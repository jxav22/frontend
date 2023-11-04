import React from 'react'
import styles from './DevMessagePage.module.css'
import Image from 'next/image'

export default function DevMessagePage() {
  return (
    <div className={styles.container}>
        <div className={styles.leftPane} />
        <Image className={styles.profilePicture} src="/profile.png" width={485} height={485} alt="drawing of the developer"/>
        <span>
            <p>Hey,</p>
            <p>I created this site so people could have a safe and supportive environment to vent their woes</p>
            <p>I realized that the existing solutions weren't that great so I tried to make something better</p>
            <p>Vent Something will be free forever, but your donations really do help</p>
            <p>Cheers,</p>
            <p>Dev</p>
            <button>Nice</button>
        </span>
    </div>
  )
}
