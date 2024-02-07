import React from 'react'
import Footer from '../components/Footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import globalStyles from 'app/page.module.css'
import content from 'content.json'
import ScrollingText from 'app/components/ScrollingText/ScrollingText'
import Space from 'app/components/Space/Space'
import styles from './Contatti.module.css'

const Contatti = () => {
  return (
    <>
      <Navbar />
      <div className={globalStyles.appBarSpace}>
        <Navbar invisible />
      </div>
      <ScrollingText text={content.contatti.title} />
      <Space size="big" />
      <div className={styles.container}>
        <div className={styles.text}>
          <p>{content.contatti.companyName}</p>
          <br />
          <p>{content.contatti.addressLine1}</p>
          <p>{content.contatti.addressLine2}</p>
          <p>{content.contatti.addressLine3}</p>
          <br />
          <p>{content.contatti.phone1}</p>
          <p>{content.contatti.phone2}</p>
          <br />
          <p>PEC</p>
          <p>{content.contatti.pec}</p>
        </div>
        <div className={styles.map}>
        <iframe
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDoMH-gHCCYdzaaNyPdAPAJFhAmRFpecl8
            &q=digital%20rilievi&maptype=roadmap">
              {/* TODO: For personalisation, see https://developers.google.com/maps/documentation/javascript/overview */}
        </iframe>
        </div>
      </div>
      <Space size="big" />
      <Footer />
    </>
  )
}

export default Contatti