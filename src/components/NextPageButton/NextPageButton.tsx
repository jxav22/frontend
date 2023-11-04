import React from 'react';
import styles from './NextPageButton.module.css';
import { Khula } from 'next/font/google'

const khula = Khula({weight: "700", subsets: ['latin']});

function NextPageButton({className, onClick, children}: {className?: string, onClick: () => void, children?: React.ReactNode}) {
  return (
    <button className={`${className} ${khula.className} ${styles.nextButton}`} onClick={onClick}>{children}</button>
  )
}

export default NextPageButton