import React from "react";
import { Link } from "react-router-dom";
import styles from "./HomePage.module.css";
import Container from "../components/Container";
import Header from "../components/Header";
import ColorItem from "../components/ColorItem";

export default function HomePage() {
  return (
    <>
      <Container>
        <Header />
        <main className={styles.main}>
          <Link to="/new" className={styles["add-new-color"]}>
            + 새 컬러 등록하기
          </Link>
          <ul>
            <li>
              <ColorItem />
            </li>
          </ul>
        </main>
      </Container>
    </>
  );
}
