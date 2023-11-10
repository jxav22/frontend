import React from "react";
import styles from "./LandingPage.module.css";
import SocialButtons from "./SocialButtons/SocialButtons";
import ChangeLog from "./ChangeLog/ChangeLog";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function LandingPage({ onNextPage }: { onNextPage: () => void }) {
  return (
    <section className={`${styles.container} ${inter.className}`}>
      <aside className={styles.leftPane} />
      <SocialButtons />
      <button className={styles.displacedArea} onClick={onNextPage}>
        <h1 className={styles.leftTitle}>Vent</h1>
        <h1 className={styles.rightTitle}>Something.</h1>
        <h2 className={styles.subTitle}>We all need an ear sometimes.</h2>
      </button>
    </section>
  );
}

export default LandingPage;
