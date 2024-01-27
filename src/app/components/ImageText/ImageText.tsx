import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import Space from '../Space/Space'
import styles from './ImageText.module.css'

interface ImageTextProps {
  image: string,
  title?: String,
  text: string,
  secondaryText?: string,
  duration1?: string,
  duration2?: string,
  link?: string,
  linkLabel?: string,
  inverted?: String | Boolean,
  blueCircle?: Boolean
}

const ImageText = (props: ImageTextProps) => {
  return (
    <div className={`${styles.container} ${props.inverted ? '' : styles.inverted}`}>
      <div className={styles.containerHelper}></div>
      <img className={styles.image} src={props.image} alt="Image" />
      <div className={`${styles.content} ${props.blueCircle ? styles.contentWithCircle : ''}`}>
        {props.title && (
          <h2 className={styles.title}>
            {props.title}
          </h2>
        )}
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
        <Space />
        {props.duration1 && (
          <h2 className={styles.duration}>
            {props.duration1}
          </h2>
        )}
        {props.duration2 && (
          <h2 className={styles.duration}>
            {props.duration2}
          </h2>
        )}
        {props.link && (
          <div className={styles.circularButtonWrapper}>
            <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
          </div>
        )}
        <div style={{"flex": "auto"}}>
        <Space />
        </div>
        {props.secondaryText && (
        <div className={styles.secondaryText}>
          {props.secondaryText}
        </div>
      )}
      </div>
      {props.blueCircle && (
        <div className={styles.blueCircleContainer}>
          <div className={styles.blueCircleWrapper}>
            <BlueCircle />
          </div>
        </div>
      )}
      <div className={styles.containerHelper}></div>
    </div>
  )
}

export default ImageText