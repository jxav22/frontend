import React from "react";
import styles from "./UsernameDisplay.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

function UsernameDisplay({username,  isTyping }: { username: string, isTyping: boolean }) {
  return (
    <div className={`${styles.container} ${isTyping && styles.isTyping}`}>
      <div className={`${inter.className}`}>{username}</div>
      <div className={styles.typingIndicator}>
        <div>.</div>
        <div>.</div>
        <div>.</div>
      </div>
    </div>
  );
}

export default UsernameDisplay;
