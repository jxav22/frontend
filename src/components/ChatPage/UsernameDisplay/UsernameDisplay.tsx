import React from "react";
import styles from "./UsernameDisplay.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

function UsernameDisplay({username,  isTyping }: { username: string, isTyping: boolean }) {
  return (
    <article className={`${styles.container} ${isTyping && styles.isTyping}`}>
      <span className={`${inter.className}`}>{username}</span>
      <span className={styles.typingIndicator}>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </span>
    </article>
  );
}

export default UsernameDisplay;
