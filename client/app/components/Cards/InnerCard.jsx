import React from 'react'
import styles from './InnerCard.module.scss'

export const InnerCard = ({title, text}) => {
  return (
    <>
        <h1 className={styles.headerText}>{title}</h1>
        <span className={styles.mainText}>{text}</span>
    </>
  )
}
