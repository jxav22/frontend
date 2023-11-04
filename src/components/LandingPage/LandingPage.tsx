import React from "react";
import styles from "./LandingPage.module.css";
import SocialButtons from "../SocialButtons/SocialButtons";
import ChangeLog from "../ChangeLog/ChangeLog";

function LandingPage({ onNextPage }: { onNextPage: () => void}) {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}/>
      <SocialButtons/>
      <span className={styles.displacedArea} onClick={onNextPage}>
        <h1 className={styles.leftTitle}>Vent</h1>
        <h1 className={styles.rightTitle}>Something.</h1>
        <p className={styles.subTitle}>We all need an ear sometimes.</p>
      </span>
    </div>
  );
}

export default LandingPage;
