import React from "react";
import styles from "./ChatHeader.module.css";
import Stats from "../Stats/Stats";

import { Inter } from "next/font/google";
import UsernameDisplay from "../UsernameDisplay/UsernameDisplay";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold = Inter({ subsets: ["latin"], weight: "700" });

function ChatHeader() {
  return (
    <div className={styles.container}>
      <div className={`${styles.header} ${interBold.className}`}>
        <div className={styles.leftSection}>
          <div className={styles.navBar}>
            <p>discord</p>
            <p>patreon</p>
            <p>twitter</p>
          </div>
          <h1 className={styles.titleOne}>Vent</h1>
        </div>
        <h1 className={styles.titleTwo}>Something</h1>
      </div>
      <h2 className={`${styles.stats} ${inter.className}`}>0 Venters Online</h2>
      <h2 className={`${styles.stats} ${inter.className}`}>0 Listeners Online</h2>
      <UsernameDisplay username={"fat chungus"} isTyping={true}/>
    </div>
  );
}

export default ChatHeader;
