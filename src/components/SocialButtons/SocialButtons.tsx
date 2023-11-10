import React from 'react'
import styles from './SocialButtons.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function SocialButtons() {
  return (
    <nav className={`${styles.socialButtons} ${inter.className}`}>
        <span>discord</span>
        <span>patreon</span>
        <span>twitter</span>
    </nav>
  )
}

export default SocialButtons