import React from 'react'
import styles from './ChatButton.module.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "600" });

function ChatButton({text, onClick}: {text: string, onClick: () => void}) {
  return (
    <button className={styles.chatButton} onClick={onClick}>
      <span className={inter.className}>{text}</span>
    </button>
  )
}

export default ChatButton