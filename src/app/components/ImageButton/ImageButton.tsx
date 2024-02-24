import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import styles from './ImageButton.module.css'

interface ImageButtonProps {
  image: string,
  text?: string,
  name?: string,
  link?: string,
  buttonLabel: string,
  remainsInPage?: boolean,
  inverted?: String | Boolean,
  blueCircle?: Boolean
}

const ImageButton = (props: ImageButtonProps) => {
  return (
    <div className={`${styles.container} ${props.inverted ? styles.inverted : ''}`}>
      <div className={styles.containerHelper}></div>
      <div className={`${styles.content} ${props.blueCircle ? styles.contentWithCircle : ''}`}>
        {props.text && (
          <h2 className={styles.text}>
            {props.text}
          </h2>
        )}
        <div className={styles.buttonWrapper} >
          <CircularButton link={'/progetti'} label={props.buttonLabel} remainsInPage={props.remainsInPage} />
        </div>
        {props.blueCircle && (
          <div className={styles.blueCircleWrapper}>
            <BlueCircle />
          </div>
        )}
      </div>
      <div className={styles.containerHelper}></div>
      <div className={styles.imageWrapper}>
      <ImageWrapper className={styles.image} src={props.image} alt="Image" />
      {props.name && (
        <div className={styles.name}>{props.name}</div>
        )}
      </div>
      
    </div>
  )
}

export default ImageButton