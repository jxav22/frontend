import React from 'react'
import styles from './Stats.module.css'

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], weight: "400" });

function Stats({ventersOnline, listenersOnline} : {ventersOnline: number, listenersOnline: number}) {
  return (
      <div className={`${styles.container} ${inter.className}`}>
        <span>{`${ventersOnline} Venters online`}</span>
        <span>{`${listenersOnline} Listeners online`}</span>
      </div>
  )
}

export default Stats