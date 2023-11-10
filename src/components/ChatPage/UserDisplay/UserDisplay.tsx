import React from "react";
import styles from "./UserDisplay.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

function UserDisplay({className, username, isTyping }: { className?: string, username: string, isTyping: boolean }) {
  return (
    <article className={`${className} ${styles.container} ${isTyping && styles.isTyping}`}>
      <span className={`${inter.className}`}>{username}</span>
      <span className={styles.typingIndicator}>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </span>
    </article>
  );
}

UserDisplay.defaultProps = {
  className: "",
  username: "undefined",
  isTyping: false,
}

export default UserDisplay;
