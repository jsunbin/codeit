import React from "react";
import classNames from "classnames";
import styles from "./MbtiSelect.module.css";
import NewSection from "./NewSection";

export default function MbtiSelect() {
  return (
    <NewSection>
      <h2 className={styles["mbti-section-title"]}>MBTI</h2>
      <div>
        <div className={styles["mbti-option"]}>
          <div className={classNames(styles["mbti-option-card"], styles.selected)}>
            <strong>E</strong>
            외향형
          </div>
          <div className={styles["mbti-option-card"]}>
            <strong>I</strong>
            내향형
          </div>
        </div>
        <div className={styles["mbti-option"]}>
          <div className={styles["mbti-option-card"]}>
            <strong>S</strong>
            감각형
          </div>
          <div className={styles["mbti-option-card"]}>
            <strong>N</strong>
            직관형
          </div>
        </div>
        <div className={styles["mbti-option"]}>
          <div className={styles["mbti-option-card"]}>
            <strong>T</strong>
            사고형
          </div>
          <div className={styles["mbti-option-card"]}>
            <strong>F</strong>
            감정형
          </div>
        </div>
        <div className={styles["mbti-option"]}>
          <div className={styles["mbti-option-card"]}>
            <strong>J</strong>
            판단형
          </div>
          <div className={styles["mbti-option-card"]}>
            <strong>P</strong>
            인식형
          </div>
        </div>
      </div>
    </NewSection>
  );
}
