import React from "react";
import styles from "./ColorItem.module.css";

export default function ColorItem() {
  return (
    <div className={styles.card}>
      <div className={styles.index}>111</div>
      <div className={styles.mbti}>ISTP</div>
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
      <div className={styles["color-board"]}></div>
      <div className={styles["color-hex"]}>#123455</div>
    </div>
  );
}
