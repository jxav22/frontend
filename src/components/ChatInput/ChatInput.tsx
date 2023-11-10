import React from "react";
import styles from "./ChatInput.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "800" });

function ChatInput() {
  return <textarea className={`${styles.inputBox} ${inter.className}`} />;
}

export default ChatInput;
