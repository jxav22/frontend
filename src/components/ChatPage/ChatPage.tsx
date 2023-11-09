import React from "react";
import ChatHeader from "../ChatHeader/ChatHeader";
import UsernameDisplay from "../UsernameDisplay/UsernameDisplay";
import styles from "./ChatPage.module.css";
import MessageLog from "../MessageLog/MessageLog";
import ChatReportDCPane from "../ChatReportDCPane/ChatReportDCPane";

class Message {
  username: string;
  message: string;
  timestamp: string;

  constructor(username: string, message: string, timestamp: string) {
    this.username = username;
    this.message = message;
    this.timestamp = timestamp;
  }
}

function ChatPage() {
  const exampleMessages = [
    new Message("fat chungus flower", "today I defecated in a urinal", "12:00"),
    new Message("watermelon man", "this is a therapy site", "15:00"),
    new Message("fat chungus flower", "well that's what I did", "NOW"),
    new Message("watermelon man", "i'm not doubting that you did that, i'm just saying that this is a therapy site", "3 hours ago"),
    new Message("fat chungus flower", "well", "3 hours ago"),
    new Message("watermelon man", "well did you like it?", "3 hours ago"),
    new Message("fat chungus flower", "wth", "3 hours ago"),
    new Message("watermelon man", "wdym wth you had the audacity to ask that, this is incredibly tame in comparison", "3 hours ago"),
    new Message("fat chungus flower", "no this is kinda different", "3 hours ago"),
    new Message("watermelon man", "how is this different", "3 hours ago"),
    new Message("fat chungus flower", "it's different", "3 hours ago"),
  ];

  return (
    <div className={styles.container}>
      <ChatHeader />
      <div className={styles.messageSection}>
        <UsernameDisplay username="fat chungus flower" isTyping={true} />
        <MessageLog isDisconnected={true} messages={exampleMessages} />
      </div>
      <ChatReportDCPane/>
      <UsernameDisplay username="watermelon man" isTyping={false} />
    </div>
  );
}

export default ChatPage;
