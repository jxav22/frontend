import React from 'react'
import styles from './ChatReportDCPane.module.css'
import ChatButton from '../ChatButton/ChatButton'

function ChatReportDCPane() {
  return (
    <article className={styles.container}>
        <ChatButton text={"report"} onClick={()=>{console.log('reported')}}/>
        <ChatButton text={"dc"} onClick={()=>{console.log('disconnected')}}/>
    </article>
  )
}

export default ChatReportDCPane