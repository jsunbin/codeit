import React from "react";
import styles from "./ColorInput.module.css";
import NewSection from "./NewSection";

export default function ColorInput({ value, onClick, onChange, handleColorCodeBlur }) {
  return (
    <NewSection>
      <h2 className={styles["color-input-title"]}>
        컬러
        <button type="button" className={styles["random-btn"]} onClick={onClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M11.1818 1L13.7272 3.5454L11.1818 6.0908"
              stroke="#464E5E"
              strokeWidth="1.62269"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.27283 7.36375V6.09105C2.27283 5.41597 2.541 4.76854 3.01836 4.29118C3.49571 3.81383 4.14314 3.54565 4.81823 3.54565H13.7271"
              stroke="#464E5E"
              strokeWidth="1.62269"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M4.81823 14.9997L2.27283 12.4543L4.81823 9.90894"
              stroke="#464E5E"
              strokeWidth="1.62269"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.7271 8.63623V9.90893C13.7271 10.584 13.4589 11.2314 12.9816 11.7088C12.5042 12.1862 11.8568 12.4543 11.1817 12.4543H2.27283"
              stroke="#464E5E"
              strokeWidth="1.62269"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </h2>
      <div className={styles["color-input-wrap"]}>
        <input
          maxLength={7}
          className={styles["color-input"]}
          value={value}
          onBlur={handleColorCodeBlur}
          onChange={onChange}
        />
        <span className={styles["color-preview"]} style={{ background: value }}></span>
      </div>
    </NewSection>
  );
}
