import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Container from "../components/Container";
import Header from "../components/Header";
import ColorItem from "../components/ColorItem";
import axios from "../lib/axios";

export default function HomePage() {
  const [filter, setFilter] = useState(null);
  const [items, setItems] = useState([]);

  async function handleLoad(mbti) {
    const res = await axios.get("/color-surveys/", {
      params: { mbti, limit: 20 },
    });
    const nextItems = res.data.results;
    setItems(nextItems);
  }

  useEffect(() => {
    handleLoad(filter);
  }, [filter]);

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
