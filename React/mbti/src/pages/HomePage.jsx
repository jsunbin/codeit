import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Container from "../components/Container";
import Header from "../components/Header";
import ColorItem from "../components/ColorItem";
import axios from "../lib/axios";

export default function HomePage() {
  const [filter, setFilter] = useState(null);
  const [items, setItems] = useState([]);
  const nextPageRef = useRef(null);
  const isLoadingRef = useRef(false);

  async function handleLoad(mbti) {
    const res = await axios.get("/color-surveys/", {
      params: { mbti, limit: 20 },
    });
    const nextItems = res.data.results;
    nextPageRef.current = res.data.next;
    setItems(nextItems);
  }

  const handleLoadNext = async () => {
    const res = await axios.get(nextPageRef.current);
    const data = res.data;
    setItems((prev) => [...prev, ...data.results]);
    nextPageRef.current = data.next;
  };

  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

  useEffect(() => {
    const handleScroll = async () => {
      if (!nextPageRef.current || isLoadingRef.current) return;

      isLoadingRef.current = true;
      const maxScrollTop = document.documentElement.offsetHeight - window.innerHeight - 100;
      const currentScrollTop = document.documentElement.scrollTop;
      if (currentScrollTop >= maxScrollTop) {
        await handleLoadNext();
      }
      isLoadingRef.current = false;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Container>
        <Header filter={filter} setFilter={setFilter} />
        <main className={styles.main}>
          <Link to="/new" className={styles["add-new-color"]}>
            + 새 컬러 등록하기
          </Link>
          <ul>
            {items.map((item) => (
              <li key={item.id}>
                <ColorItem value={item} onClick={() => setFilter(item.mbti)} />
              </li>
            ))}
          </ul>
        </main>
      </Container>
    </>
  );
}
