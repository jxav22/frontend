import React from "react";
import Logo from "../Logo/Logo";
import styles from "./ConnectionPage.module.css";
import Stats from "../Stats/Stats";

import { Maitree } from "next/font/google";

const maitree = Maitree({subsets: ["latin"], weight: "400"});

function ConnectionPage({
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
      <div className={styles.container}>
        <div className={styles.ventSection} onClick={onSelectVenter}>
          <h1 className={styles.ventHeader}>VENT</h1>
          <h2 className={styles.ventSubheader}>talk or release</h2>
          <blockquote className={`${styles.ventDescription} ${maitree.className}`}>
            Venting provides an outlet for you to express your thoughts,
            emotions, and struggles openly and honestly. This space is
            here for you to unload your feelings without fear of judgment.
          </blockquote>
        </div>

        <div className={styles.listenSection} onClick={onSelectListener}>
          <h1 className={styles.listenHeader}>LISTEN</h1>
          <h2 className={styles.listenSubheader}>help someone out</h2>
          <blockquote className={`${styles.listenDescription} ${maitree.className}`}>
            As a Listener, you play
            a crucial role by offering your time
            and understanding to those who need someone to talk to. Your role is
            to provide a caring, non-judgmental ear to those who are venting.
          </blockquote>
        </div>
      </div>
      <div className={styles.statsPositioner}>
        <Stats ventersOnline={0} listenersOnline={0} />
      </div>
      <div className={styles.logoPositioner}>
        <Logo />
      </div>
    </div>
  );
}

export default ConnectionPage;
