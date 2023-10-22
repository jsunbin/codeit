import React from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

export default function Container({ className, children }) {
  console.log(className, children);
  return <div className={styles.container}>{children}</div>;
}
