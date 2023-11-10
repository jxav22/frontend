import React from "react";
import styles from "./MobileConnectionPage.module.css";
import Logo from "../Logo/Logo";
import Stats from "../Stats/Stats";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function MobileConnectionPage({
  onSelectListener,
  onSelectVenter,
  currentState,
  stats,
}: {
  onSelectListener: () => void;
  onSelectVenter: () => void;
  currentState: string;
  stats: { queueVenter: number; queueListener: number };
}) {
  let stateStyling: string;
  switch (currentState) {
    case "venter":
      stateStyling = styles.venterSelected;
      break;
    case "listener":
      stateStyling = styles.listenerSelected;
      break;
    default:
      stateStyling = "";
      break;
  }

  return (
    <span className={stateStyling}>
      <section className={`${styles.container} ${inter.className}`}>
        <article className={styles.ventSection} onClick={onSelectVenter}>
          <h1 className={styles.ventHeading}>VENT</h1>
          <h2 className={styles.ventSubheading}>talk or release</h2>
        </article>
        <article className={styles.listenSection} onClick={onSelectListener}>
          <h1 className={styles.listenHeading}>LISTEN</h1>
          <h2 className={styles.listenSubheading}>help someone out</h2>
        </article>
        <Stats stats={stats} />
        <Logo />
      </section>
    </span>
  );
}

export default MobileConnectionPage;
