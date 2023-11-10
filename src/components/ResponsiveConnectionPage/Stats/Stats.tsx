import React from "react";
import styles from "./Stats.module.css";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

function Stats({
  stats,
}: {
  stats: { queueVenter: number; queueListener: number };
}) {
  const { queueVenter, queueListener } = stats;

  const joinAndPluralize = (amount: number, word: string) => {
    if (amount === 0) {
      return `0 ${word}s`;
    } else if (amount === 1) {
      return `1 ${word}`;
    } else if (amount > 1) {
      return `${amount} ${word}s`;
    } else {
      return `unknown ${word}s`;
    }
  };

  const venterText = `${joinAndPluralize(queueVenter, "Venter")} online`;
  const listenerText = `${joinAndPluralize(queueListener, "Listener")} online`;

  return (
    <div className={`${styles.container} ${inter.className}`}>
      <span>{venterText}</span>
      <span>{listenerText}</span>
    </div>
  );
}

export default Stats;
