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
      <div className={`${styles.container} ${inter.className}`}>
        {messages.map((message) => {
          return (
            <div className={styles.messageContainer}>
              <div className={styles.username}>{`${message.username}:`}</div>
              <div className={styles.messageText}>{message.message}</div>
              <div className={styles.timestamp}>{message.timestamp}</div>
            </div>
          );
        })}
        {isDisconnected && (
          <div className={styles.disconnected}>You have been disconnected.</div>
        )}
      </div>
    </>
  );
}

export default MessageLog;
