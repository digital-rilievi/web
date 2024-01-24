import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import styles from './ImageButton.module.css'

interface ImageButtonProps {
  image: string,
  title: String,
  text?: string,
  link?: string,
  remainsInPage?: boolean,
  inverted?: String | Boolean,
  blueCircle?: Boolean
}

const ImageButton = (props: ImageButtonProps) => {
  return (
    <div className={`${styles.container} ${props.inverted ? styles.inverted : ''}`}>
      <div className={styles.containerHelper}></div>
      <div className={`${styles.content} ${props.blueCircle ? styles.contentWithCircle : ''}`}>
        {props.title && (
          <h2 className={styles.title}>
            {props.title}
          </h2>
        )}
        <div className={styles.buttonWrapper} >
          <CircularButton link={'/progetti'} remainsInPage={props.remainsInPage} />
        </div>
        {props.blueCircle && (
          <div className={styles.blueCircleWrapper}>
            <BlueCircle />
          </div>
        )}
      </div>
      <div className={styles.containerHelper}></div>
      <img className={styles.image} src={props.image} alt="Image" />
    </div>
  )
}

export default ImageButton