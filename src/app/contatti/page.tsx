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
          <h1 className={styles.name}>{content.contatti.companyName}</h1>
          <br />
          <p>{content.contatti.addressLine1}</p>
          <p>{content.contatti.addressLine2}</p>
          <p>{content.contatti.addressLine3}</p>
          <br />
          <p>
            Tel: <a href={`tel:${content.contatti.phone}`} style={{ textDecoration: 'underline' }}>
              {content.contatti.phone}
            </a>
          </p>
          <br />
          <p>
            Fax: <a href={`tel:${content.contatti.fax}`} style={{ textDecoration: 'underline' }}>
              {content.contatti.fax}
            </a>
          </p>
          <br />
          <p>email</p>
          <p>
            <a href={`mailto:${content.contatti.email}`} style={{ textDecoration: 'underline' }}>{content.contatti.email}</a>
          </p>
          <br />
          <p>PEC</p>
          <p>
            <a href={`mailto:${content.contatti.pec}`} style={{ textDecoration: 'underline' }}>{content.contatti.pec}</a>
          </p>
          <br />
          <p>P.IVA {content.contatti.vat}</p>
          <p>{content.contatti.legal}</p>
          <p>REA: {content.contatti.rea}</p>
          <p>Cod. univoco: {content.contatti.fatturazione}</p>
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
      <Space size="big" />
      <Footer />
    </>
  )
}

export default Contatti