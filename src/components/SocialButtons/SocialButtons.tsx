import React from 'react'
import styles from './SocialButtons.module.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

function SocialButtons({style}: {style: string}) {
  return (
    <div className={`${style} ${inter.className}`}>
        <span>discord</span>
        <span>patreon</span>
        <span>twitter</span>
    </div>
  )
}

export default SocialButtons