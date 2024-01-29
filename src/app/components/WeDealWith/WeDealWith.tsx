import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import Space from '../Space/Space'
import styles from './WeDealWith.module.css'

interface WeDealWithProps {
  image1: string,
  image2: string,
  title?: String,
  text: string,
  link?: string,
  linkLabel?: string,
}

const WeDealWith = (props: WeDealWithProps) => {
  return (
    <div className={`${styles.container} ${styles.inverted}`}>
      <div className={styles.containerHelper}></div>
      <img className={styles.image1} src={props.image1} alt="Image" />
      <img className={styles.image2} src={props.image2} alt="Image" />
      <div className={`${styles.content}`}>
        {props.title && (
          <h2 className={styles.title}>
            {props.title}
          </h2>
        )}
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
        <Space />
        <div style={{"flex": "auto"}}>
        <Space />
        </div>
        {props.link && (
          <div className={styles.circularButtonWrapper}>
            <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
          </div>
        )}

      </div>
      <div className={styles.containerHelper}></div>
    </div>
  )
}

export default WeDealWith