import React from "react";
import ChatHeader from "./ChatHeader/ChatHeader";
import UserDisplay from "./UserDisplay/UserDisplay";
import styles from "./ChatPage.module.css";
import MessageLog from "./MessageLog/MessageLog";
import ChatReportDCPane from "./ChatReportDCPane/ChatReportDCPane";
import InputBox from "./InputSection/InputBox/InputBox";
import ChatButton from "./ChatButton/ChatButton";
import InputSection from "./InputSection/InputSection";
import StickyChatHeader from "./StickyChatHeader/StickyChatHeader";

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
    new Message(
      "watermelon man",
      "i'm not doubting that you did that, i'm just saying that this is a therapy site",
      "3 hours ago"
    ),
    new Message("fat chungus flower", "well", "3 hours ago"),
    new Message("watermelon man", "well did you like it?", "3 hours ago"),
    new Message("fat chungus flower", "wth", "3 hours ago"),
    new Message(
      "watermelon man",
      "wdym wth you had the audacity to ask that, this is incredibly tame in comparison",
      "3 hours ago"
    ),
    new Message(
      "fat chungus flower",
      "no this is kinda different",
      "3 hours ago"
    ),
    new Message("watermelon man", "how is this different", "3 hours ago"),
    new Message("fat chungus flower", "it's different", "3 hours ago"),
  ];

  const isDisconnected = false;

  return (
    <section className={styles.container}>
      <span className={styles.stickyHeader}>
        <ChatHeader />
        <UserDisplay
          className={styles.usernameDisplay}
          username="fat chungus flower"
          isTyping={true}
        />
      </span>
      <section className={styles.messageSection}>
        <MessageLog
          isDisconnected={isDisconnected}
          messages={exampleMessages}
        />
        {isDisconnected && (
          <span className={styles.returnButton}>
            <ChatButton
              text="return"
              onClick={() => {
                console.log("return");
              }}
            />
          </span>
        )}
        <ChatReportDCPane />
        <InputSection />
      </section>
    </section>
  );
}

export default ChatPage;
