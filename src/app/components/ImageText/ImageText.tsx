import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import Space from '../Space/Space'
import styles from './ImageText.module.css'

interface ImageTextProps {
  image: string,
  title?: String,
  text: string,
  duration1?: string,
  duration2?: string,
  link?: string,
  inverted?: String | Boolean,
  blueCircle?: Boolean
}

const ImageText = (props: ImageTextProps) => {
  return (
    <div className={`${styles.container} ${props.inverted ? styles.inverted : ''}`}>
      <div className={styles.containerHelper}></div>
      <div className={`${styles.content} ${props.blueCircle ? styles.contentWithCircle : ''}`}>
        {props.title && (
          <h2 className={styles.title}>
            {props.title}
          </h2>
        )}
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
        {props.blueCircle && (
          <div className={styles.blueCircleWrapper}>
            <BlueCircle />
          </div>
        )}
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
            <CircularButton link={props.link} remainsInPage />
          </div>
        )}
      </div>
      <div className={styles.containerHelper}></div>

      <img className={styles.image} src={props.image} alt="Image" />

    </div>
  )
}

export default ImageText