import React from 'react'
import CircularButton from '../CircularButton/CircularButton'
import Space from '../Space/Space'
import styles from './WeDealWith.module.css'

interface WeDealWithProps {
  index: number,
  image1: string,
  image2: string,
  title: String,
  text: string,
  link?: string,
  linkLabel?: string,
}

const WeDealWith = (props: WeDealWithProps) => {
  var img1Padding = (props.index == 0) ? 19 : '-' + (props.index * 100 - 19)
  var img2Padding = (props.index == 0) ? 8 : '-' + (props.index * 100 - 8)

  var isTitleTooLong = props.title?.length > 18

  return (
    <div className={`${styles.container} ${styles.inverted}`}>
      <div className={styles.imagesWrapper}>
        <div className={styles.images}>
          <img className={styles.image1} style={{ right: `${img1Padding}%` }} src={props.image1} alt="Image" />
          <img className={styles.image2} style={{ right: `${img2Padding}%` }} src={props.image2} alt="Image" />
        </div>
      </div>

      <div className={`${styles.content}`}>
        <div className={styles.preTitle}>
          ci occupiamo di progetti per
        </div>
        <h2 className={`${styles.title} ${isTitleTooLong ? styles.longTitle : ''}`}>
          {props.title}
        </h2>
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
        <Space />
        <div style={{ "flex": "auto" }}>
          <Space />
        </div>
        {props.link && (
          <div className={styles.circularButtonWrapper}>
            <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
          </div>
        )}
      </div>
    </div>
  )
}

export default WeDealWith