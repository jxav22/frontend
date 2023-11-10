import React from 'react'
import styles from './StickyChatHeader.module.css'
import ChatHeader from '../ChatHeader/ChatHeader'
import UserDisplay from '../UserDisplay/UserDisplay'

function StickyChatHeader() {
  return (
    <>
        <ChatHeader/>
        <UserDisplay className={styles.usernameDisplay} username="fat chungus flower" isTyping={true}/>
    </>
  )
}

export default StickyChatHeader