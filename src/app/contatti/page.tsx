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
      <Space size='big' maintainInMobile />
      <div className={styles.container}>
        <div className={styles.text}>
          <h1 className={styles.name}>{content.contatti.companyName}</h1>
          <br />
          <p className={styles.smallText}>{content.contatti.addressLine1}</p>
          <p className={styles.smallText}>{content.contatti.addressLine2}</p>
          <p className={styles.smallText}>{content.contatti.addressLine3}</p>
          <br />
          <p className={styles.smallText}>
            Telefono <a href={`tel:${content.contatti.phone}`} style={{ textDecoration: 'underline' }}>
              {content.contatti.phone}
            </a>
          </p>
          <p className={styles.smallText}>
            Fax <a href={`tel:${content.contatti.fax}`} style={{ textDecoration: 'underline' }}>
              {content.contatti.fax}
            </a>
          </p>
          <br />
          <p className={styles.smallText}>Email <a href={`mailto:${content.contatti.email}`} style={{ textDecoration: 'underline' }}>{content.contatti.email}</a></p>
          <p className={styles.smallText}>PEC <a href={`mailto:${content.contatti.pec}`} style={{ textDecoration: 'underline' }}>{content.contatti.pec}</a></p>
          <br />
          <p className={styles.smallText}>P.IVA: {content.contatti.vat}</p>
          <p className={styles.smallText}>{content.contatti.legal}</p>
          <p className={styles.smallText}>REA: {content.contatti.rea}</p>
          <p className={styles.smallText}>Cod. univoco: {content.contatti.fatturazione}</p>
        </div>
        <div className={styles.map}>
          <iframe
            width="100%"
            height="100%"
            allowFullScreen
            src="https://snazzymaps.com/embed/585095">
          </iframe>
        </div>
      </div>
      <Space size="big" />
      <Space size="big" />
      <Footer />
    </>
  )
}

export default Contatti;