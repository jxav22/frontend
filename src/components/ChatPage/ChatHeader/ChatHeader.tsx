import React from "react";
import styles from "./ChatHeader.module.css";
import Stats from "../../ResponsiveConnectionPage/Stats/Stats";

import { Inter } from "next/font/google";
import UsernameDisplay from "../UsernameDisplay/UsernameDisplay";

const inter = Inter({ subsets: ["latin"], weight: "400" });
const interBold = Inter({ subsets: ["latin"], weight: "700" });

function ChatHeader() {
  return (
    <section className={styles.container}>
      <header className={`${styles.header} ${interBold.className}`}>
        <section className={styles.leftSection}>
          <nav className={styles.navBar}>
            <p>discord</p>
            <p>patreon</p>
            <p>twitter</p>
          </nav>
          <h1 className={styles.titleOne}>Vent</h1>
        </section>
        <h1 className={styles.titleTwo}>Something</h1>
      </header>
      <h2 className={`${styles.stats} ${inter.className}`}>0 Venters Online</h2>
      <h2 className={`${styles.stats} ${inter.className}`}>0 Listeners Online</h2>
    </section>
  );
}

export default ChatHeader;
