import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import styles from './Chisiamo.module.css'
import globalStyles from 'app/page.module.css'
import content from 'content.json'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'
import Space from 'app/components/Space/Space'
import WhoWeAre from 'app/components/WhoWeAre/WhoWeAre'
import ImagesCarousel from 'app/components/ImagesCarousel/ImagesCarousel'

const ChiSiamo = () => {
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content['chi-siamo'].title}/>
      <Space size={"big"} />
      <Space size={"big"} />
      <ImagesCarousel slides={content['chi-siamo'].carousel} />
      <Space size={"big"} />
      <Space size={"big"} />
      <WhoWeAre />
      <Space size={"big"} />
      <Space size={"big"} />
      <Footer />
    </>
  )
}

export default ChiSiamo