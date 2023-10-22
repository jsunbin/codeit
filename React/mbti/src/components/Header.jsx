import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles["header-wrap"]}>
        <h1 className={styles.h1}>
          <div>MBTI별</div>
          <strong>좋아하는 컬러</strong>
        </h1>
        <button className={styles["selected-mbti"]}>
          ISTP
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1.35792 1L13 13M12.6421 1L1 13" stroke="#464E5E" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
