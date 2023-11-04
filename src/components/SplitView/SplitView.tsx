import React from "react";
import styles from "./SplitView.module.css";
import SocialButtons from "../SocialButtons/SocialButtons";

function SplitView() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane} />
      <h1 className={styles.leftTitle}>Vent</h1>
      <SocialButtons/>
      <h1 className={styles.rightTitle}>Something.</h1>
      <p className={styles.subTitle}>We all need an ear sometimes.</p>
    </div>
  );
}

export default SplitView;
