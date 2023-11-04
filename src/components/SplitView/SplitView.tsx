import React from "react";
import styles from "./SplitView.module.css";
import SocialButtons from "../SocialButtons/SocialButtons";

function SplitView() {
  return (
    <div className={styles.container}>
      <div className={styles.leftPane}>
        <h1 className={styles.leftTitle}>Vent</h1>
      </div>
      <div className={styles.rightPane}>
        <div className={styles.socialButtons}>
          <span>discord</span>
          <span>patreon</span>
          <span>twitter</span>
        </div>
        <h1 className={styles.rightTitle}>Something.</h1>
        <p className={styles.subTitle}>We all need an ear sometimes.</p>
      </div>
    </div>
  );
}

export default SplitView;
