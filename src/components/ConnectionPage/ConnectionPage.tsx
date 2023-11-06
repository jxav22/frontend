import React from "react";
import Logo from "../Logo/Logo";
import styles from "./ConnectionPage.module.css";
import Stats from "../Stats/Stats";

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

          {/* {currentState === 1 ? <div className={styles.venterDescription}>Vent your woes</div> : <></>} */}
        </div>

        <div className={styles.listenSection} onClick={onSelectListener}>
          <h1 className={styles.listenHeader}>LISTEN</h1>
          <h2 className={styles.listenSubheader}>help someone out</h2>

          {/* {currentState === 2 ? <div className={styles.listenerDescription}>Be kind and supportive and stuff</div> : <></>} */}
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
