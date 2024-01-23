import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import styles from './ImageText.module.css'

interface ImageTextProps {
  image: string,
  title?: String,
  text: string,
  days?: string,
  hours?: string,
  moreInfoLink?: string,
  invertOrder?: Boolean,
  blueCircle?: Boolean
}

const ImageText = (props: ImageTextProps) => {
  return (
    <div className={`${styles.container} ${props.invertOrder ? styles.inverted : ''}`}>
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
        {props.days && (
          <h2 className={styles.title}>
            {props.days}
          </h2>
        )}
        {props.hours && (
          <h2 className={styles.title}>
            {props.hours}
          </h2>
        )}
        {/* {props.moreInfoLink && (
          <h2 className={styles.title}>
            {props.hours}
          </h2>
        )} */}
      </div>
      <div className={styles.image}>
        <img src={props.image} alt="Image" />
      </div>
    </div>
  )
}

export default ImageText