import React from "react";
import styles from "./MessageLog.module.css";
import { Inter } from "next/font/google";
import ChatButton from "../ChatButton/ChatButton";
import ChatReportDCPane from "../ChatReportDCPane/ChatReportDCPane";
import ChatInput from "../ChatInput/ChatInput";

const inter = Inter({ subsets: ["latin"], weight: "400" });

type Message = {
  username: string;
  message: string;
  timestamp: string;
};

function MessageLog({
  isDisconnected,
  messages,
}: {
  isDisconnected: boolean;
  messages: Message[];
}) {
  return (
    <>
      <article className={`${styles.container} ${inter.className}`}>
        {messages.map((message) => {
          return (
            <div className={styles.messageContainer}>
              <span className={styles.username}>{`${message.username}:`}</span>
              <span className={styles.messageText}>{message.message}</span>
              <span className={styles.timestamp}>{message.timestamp}</span>
            </div>
          );
        })}
        {isDisconnected && (
          <span className={styles.disconnected}>You have been disconnected.</span>
        )}
      </article>
    </>
  );
}

export default MessageLog;
