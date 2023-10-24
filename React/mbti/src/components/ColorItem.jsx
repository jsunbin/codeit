import React from "react";
import styles from "./ColorItem.module.css";

export default function ColorItem({ value, onClick }) {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.index}>{value.id}</div>
      <div className={styles.mbti}>{value.mbti}</div>
      <div className={styles.arrow}>
        <span className={styles["arrow-icon"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="8" height="13" viewBox="0 0 8 13" fill="none">
            <g clipPath="url(#clip0_8_1236)">
              <path d="M1 1L6.5 6.5L1 12" stroke="#BFC8DA" strokeWidth="2" strokeLinecap="round" />
            </g>
            <defs>
              <clipPath id="clip0_8_1236">
                <rect width="8" height="13" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </span>
      </div>
      <div className={styles["color-board"]} style={{ background: value.colorCode }}></div>
      <div className={styles["color-hex"]}>{value.colorCode}</div>
    </div>
  );
}
