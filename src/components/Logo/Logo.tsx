import React from "react";
import styles from "./Logo.module.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

function Logo() {
  return (
    <div className={`${styles.container} ${inter.className}`}>
      <h1>Vent</h1>
      <h1 className={styles.colouredPart}>Something.</h1>
    </div>
  );
}

export default Logo;
