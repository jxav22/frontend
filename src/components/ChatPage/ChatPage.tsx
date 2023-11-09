import React from 'react'
import ChatHeader from '../ChatHeader/ChatHeader'
import UsernameDisplay from '../UsernameDisplay/UsernameDisplay'
import styles from './ChatPage.module.css'

function ChatPage() {
  return (
    <div className={styles.container}>
      <ChatHeader/>
      <UsernameDisplay username="fat shit" isTyping={true}/>
    </div>
  )
}

export default ChatPage