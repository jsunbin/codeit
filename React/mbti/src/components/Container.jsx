import React from "react";
import classNames from "classnames";
import styles from "./Container.module.css";

export default function Container({ className, children }) {
  return <div className={classNames(styles.container, styles[`${className}`])}>{children}</div>;
}
