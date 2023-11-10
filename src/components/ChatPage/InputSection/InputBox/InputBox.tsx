import React, {useRef, useEffect} from "react";
import styles from "./InputBox.module.css";

function InputBox({onTyping}: {onTyping : (isTyping : boolean) => void}) {
  const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
  const typingTimer = useRef<NodeJS.Timeout | null>(null);

  const setTyping = () => {
    if (typingTimer.current) {
      clearTimeout(typingTimer.current);
    }
    onTyping(true);
    typingTimer.current = setTimeout(() => {onTyping(false)}, 1000);
  }

  const handleKeyDown = (event: any) => {
    if (textAreaRef.current){
      if (document.activeElement === textAreaRef.current){
        if (event.key === "Enter" && !event.shiftKey) {
          event.preventDefault();
        } else {
          setTyping();
        }
      } else {
        textAreaRef.current.focus();
      }
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []); 

  return <textarea ref={textAreaRef} onKeyDown={handleKeyDown} className={styles.inputBox} />;
}

export default InputBox;
