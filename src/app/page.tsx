'use client'
import { useState, useEffect } from "react"
import NavBar from "./components/Navbar/Navbar"
import VideoPlayer from "./components/VideoPlayer/VideoPlayer"
import styles from "./page.module.css"
import content from 'content.json'
import ImageText from "./components/ImageText/ImageText"
import Footer from "./components/Footer/Footer"
import ImageButton from "./components/ImageButton/ImageButton"
import Space from "./components/Space/Space"
import BlueTextCta from "./components/BlueTextCta/BlueTextCta"
import WeDealWith from "./components/WeDealWith/WeDealWith"
import ScrollIndicator from "./components/ScrollIndicator/ScrollIndicator"
import PartnersList from "./components/PartnersList/PartnersList"
import WhoWeAreWrapper from "./components/whoWeAreComponents/WhoWeAreWrapper/WhoWeAreWrapper"
import ManualSliderWrapper from "./components/manualSliderComponents/ManualSliderWrapper/ManualSliderWrapper"

export default function Home() {
  const [isVertical, setIsVertical] = useState(true)

  // Your image array here
  const weDealWithList: React.ReactNode[] = content.home.weDealWith.map((deal, index) => (
    <WeDealWith
      key={index}
      index={index}
      image1={deal.img1}
      image2={deal.img2}
      title={deal.title}
      text={deal.text}
      link={deal.link} />
  ))

  useEffect(() => {
    const handleResize = () => {
      const isVerticalOrientation = window.innerHeight > window.innerWidth * 0.75 // height is > 3/4 width
      // if is not vertical it sets video to full screen height
      setIsVertical(isVerticalOrientation)
    }

    window.addEventListener('resize', handleResize)

    // Set initial state
    handleResize()

    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <main>
      <NavBar animateLogo />
      <ScrollIndicator />
      <div className={styles.content}>
        {/* <div className={`${styles.appBarSpace} ${styles.mobileAppbarSpacer}`}>
          <NavBar invisible />
        </div> */}

        <div className={styles.visibleInMobile}>
          <VideoPlayer title={content.home.title} videoStyle={{ width: '100%', height: '133.33vw', objectFit: "cover" }} />
        </div>
        <div className={styles.invisibleInMobile}>
          <VideoPlayer
            title={content.home.title}
            videoStyle={isVertical ? { width: '100%', height: 'auto' } : { width: '100%', height: '100vh', objectFit: 'cover' }}
          />
        </div>
        <Space size={"big"} maintainInMobile />
        <Space size={"normal"} />
        <ImageText image={content.home.firstImage}
          text={content.home.firstImageDesc}
          secondaryText={content.home.firstImageName}
          inverted
          blueCircle
        />
        <Space size={"big"} />
        <ImageButton
          image={content.home.secondImage}
          text={content.home.secondImageDesc}
          name={content.home.secondImageName}
          buttonLabel={content.home.secondImageButtonLabel}
          remainsInPage={true}
        />
        <Space size={"big"} />
        <Space maintainInMobile />
        <ManualSliderWrapper slides={weDealWithList} />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} hideInWeb />
        <BlueTextCta text={content.home.areYouInterested} label={content.home.areYouInterestedLabel} link={content.home.areYouInterestedLink} />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} hideInWeb />
        <Space maintainInMobile />
        <PartnersList
          className={styles.partnersList}
          partners={content.home.partners}
        />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} />
        <WhoWeAreWrapper />
        <Space size={"big"} maintainInMobile />
        <Space maintainInMobile />
        <Space size={"big"} hideInWeb />
        <Footer />
      </div>
    </main>
  )
}