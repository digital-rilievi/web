import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from './Chisiamo.module.css'
import globalStyles from 'app/page.module.css'
import content from 'content.json'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'
import Space from 'app/components/Space/Space'
import WhoWeAreWrapper from 'app/components/whoWeAreComponents/WhoWeAreWrapper/WhoWeAreWrapper'
import ImagesCarousel from 'app/components/ImagesCarousel/ImagesCarousel'
import ValuesList from 'app/components/ValuesList/ValuesList'
import BlueTextCta from 'app/components/BlueTextCta/BlueTextCta'
import ImageWrapper from 'app/components/ImageWrapper/ImageWrapper'

const ChiSiamo = () => {

  var slides = content['chi-siamo'].carousel.map((image, index) => (
    <ImageWrapper key={index} className={styles.carouselImage} src={image[index]} backgroundColor={"#373737"} />
  ))

  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content['chi-siamo'].title} />
      <Space size={"big"} maintainInMobile />
      <ValuesList items={content['chi-siamo'].values} />
      <div className={styles.invisibleInMobile}>
        <Space size={"big"} />
      </div>
      <Space size={"big"} maintainInMobile />
      <ImagesCarousel className={styles.invisibleInMobile} slides={content['chi-siamo'].carousel} />
      {/* <ManualSliderWrapper className={styles.visibleInMobile} slides={content['chi-siamo'].carousel.map((image, index) => (
        <ImageWrapper key={index} imagestyle={styles.carouselImage} src={image} backgroundColor={"#373737"} />
      ))} />*/}
      <div className={styles.invisibleInMobile}>
        <Space size={"big"} />
        <Space size={"big"} />
      </div>
      <WhoWeAreWrapper />
      <Space size={"big"} maintainInMobile />
      <Space size={"big"} />
      <Space size={"big"} />
      <div className={styles.invisibleInMobile}>
        <BlueTextCta text={content['chi-siamo'].canWeHelp} label={content['chi-siamo'].canWeHelpCta} link={content['chi-siamo'].canWeHelpLink} />
      </div>
      <Space size={"big"} />
      <Space size={"big"} />
      <Space size={"big"} />
      <Footer />
    </>
  )
}

export default ChiSiamo