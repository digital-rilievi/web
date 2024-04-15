import React from 'react'
import CircularButton from '../CircularButton/CircularButton'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
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
  var img1Padding = 19
  var img2Padding = 8

  var isTitleTooLong = props.title?.length > 18

  return (
    <div className={`${styles.container} ${styles.inverted}`}>
      <div className={styles.imagesWrapper}>
        <div className={styles.images}>
          <ImageWrapper className={styles.image1} src={props.image1} backgroundColor={"#001662"} />
          <ImageWrapper className={`${styles.invisibleInMobile} ${styles.image2}`} src={props.image2} backgroundColor={"#001662"} />
        </div>
      </div>

      <div className={`${styles.content}`}>
        <div className={`${styles.invisibleInMobile} ${styles.preTitle}`}>
          ci occupiamo di progetti per
        </div>
        <h2 className={`${styles.title} ${isTitleTooLong ? styles.longTitle : ''} ${styles.invisibleInMobile}`}>
          {props.title}
        </h2>
        <div className={`${styles.visibleInMobile} ${styles.rowWrapper}`}>
          <div className={styles.titleRow}>
            <h2 className={`${styles.title} ${isTitleTooLong ? styles.longTitle : ''} ${styles.titleForMobile}`}>
              {props.title}
            </h2>
            {props.link && (
              <div className={`${styles.circularButtonWrapper} ${styles.mobileCircular}`}>
                <CircularButton link={props.link} label={props.linkLabel} remainsInPage isWeDealWith />
              </div>
            )}
          </div>
        </div>
        <div className={styles.text}>
          <p>{props.text}</p>
        </div>
        <Space />
        <div style={{ "flex": "auto" }}>
          <Space />
        </div>
        {props.link && (
          <div className={`${styles.invisibleInMobile} ${styles.circularButtonWrapper}`}>
            <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
          </div>
        )}
      </div>
    </div>
  )
}

export default WeDealWith