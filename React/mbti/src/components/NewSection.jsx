import React from "react";
import styles from "./NewSection.module.css";

export default function NewSection({ children }) {
  return <section className={styles["section"]}>{children}</section>;
}
