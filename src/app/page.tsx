'use client'
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

  var weDealWithList: React.ReactNode[] = content.home.weDealWith.map((deal, index) => (
    <WeDealWith
      key={index}
      index={index}
      image1={deal.img1}
      image2={deal.img2}
      title={deal.title}
      text={deal.text}
      link={deal.link} />
  ))

  return (
    <main>
      <NavBar animateLogo />
      <ScrollIndicator />
      <div className={styles.content}>
        <div className={`${styles.appBarSpace} ${styles.mobileAppbarSpacer}`}>
          <NavBar invisible />
        </div>

        <div className={styles.visibleInMobile}>
          <VideoPlayer title={content.home.title} videoStyle={{ width: '100%', height: '133.33vw', objectFit: "cover" }} />
        </div>
        <div className={styles.invisibleInMobile}>
          <VideoPlayer title={content.home.title} videoStyle={{ width: '100%', height: 'auto' }} />
        </div>
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} />
        <ImageText image={content.home.firstImage}
          text={content.home.firstImageDesc}
          secondaryText={content.home.firstImageName}
          inverted
          blueCircle
        />
        <Space size={"big"} maintainInMobile />
        <ImageButton
          image={content.home.secondImage}
          text={content.home.secondImageDesc}
          name={content.home.secondImageName}
          buttonLabel={content.home.secondImageButtonLabel}
          remainsInPage={true}
        />
        <Space size={"big"} maintainInMobile />
        <Space maintainInMobile />
        <ManualSliderWrapper slides={weDealWithList} />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} maintainInMobile />
        <Space size={"big"} hideInWeb />
        <BlueTextCta text={content.home.areYouInterested} label={content.home.areYouInterestedLabel} link={content.home.areYouInterestedLink} />
        <Space size={"big"} maintainInMobile />
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
