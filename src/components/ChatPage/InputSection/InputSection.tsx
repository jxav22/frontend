import React from 'react'
import InputBox from './InputBox/InputBox'
import UserDisplay from '../UserDisplay/UserDisplay'
import styles from './InputSection.module.css'

function InputSection() {
  const [isTyping, setIsTyping] = React.useState(false);

  const handleTyping = (isTyping : boolean) => {
    setIsTyping(isTyping);
  }

  return (
    <article className={styles.container}>
        <UserDisplay username="watermelon man" isTyping={isTyping}/>
        <InputBox onTyping={handleTyping}/>
    </article>
  )
}

export default InputSection