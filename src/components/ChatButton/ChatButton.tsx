import React from 'react'
import styles from './ChatButton.module.css'
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "700" });

function ChatButton({text, onClick}: {text: string, onClick: () => void}) {
  return (
    <button className={`${styles.chatButton} ${inter.className}`} onClick={onClick}>{text}</button>
  )
}

export default ChatButton