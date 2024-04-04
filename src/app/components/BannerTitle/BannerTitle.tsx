import React from 'react'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import styles from './BannerTitle.module.css'
import content from 'content.json'
import Space from '../Space/Space'

const BannerTitle = () => (
    <>
        <ImageWrapper width={1} height={1} className={styles.image} src={`${content.home.bannerImage}`} backgroundColor={"#4e4e4e"} />
        <div className={styles.blueCircleWrapper}>
            <div className={styles.homeTitle}>{content.home.title}</div>
        </div>
        <Space size={"big"} maintainInMobile />
        <h1 className={styles.postBannerQuote}>{content.home.bannerQuote}</h1>
        <Space size={"big"} maintainInMobile />
    </>
)

export default BannerTitle