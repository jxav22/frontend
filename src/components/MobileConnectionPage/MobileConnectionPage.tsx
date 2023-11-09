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
}: {
  onSelectListener: () => void;
  onSelectVenter: () => void;
  currentState: string;
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
    <div className={stateStyling}>
      <div className={`${styles.container} ${inter.className}`}>
        <div className={styles.ventSection} onClick={onSelectVenter}>
          <h1 className={styles.ventHeading}>VENT</h1>
          <h2 className={styles.ventSubheading}>talk or release</h2>
        </div>
        <div className={styles.listenSection} onClick={onSelectListener}>
          <h1 className={styles.listenHeading}>LISTEN</h1>
          <h2 className={styles.listenSubheading}>help someone out</h2>
        </div>
        <Stats ventersOnline={0} listenersOnline={0} />
        <Logo />
      </div>
    </div>
  );
}

export default MobileConnectionPage;
