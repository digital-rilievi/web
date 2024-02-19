import React from 'react'
import styles from './Footer.module.css'
import content from 'content.json'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <div>
          <h1 className={styles.name}>{content.contatti.companyName}</h1>
          <br />
          <p>{content.contatti.addressLine1}</p>
          <p>{content.contatti.addressLine2}</p>
          <p>{content.contatti.addressLine3}</p>
          <br />
          <p>
            <a href={`mailto:${content.contatti.pec}`} style={{ textDecoration: 'underline' }}>{content.contatti.pec}</a>
          </p>
        </div>
        <br />
        <div className={styles.spacer}></div>
        <div>
          <p>P.IVA {content.contatti.vat}</p>
          <p>{content.contatti.legal}</p>
          <p>REA: {content.contatti.rea}</p>
          <p>Cod. univoco: {content.contatti.fatturazione}</p>
        </div>
      </div>


      <div className={styles.rightColumn}>
        <ul>
          <li><a href={content.footer.privacyPolicyLink} target="_blank">{content.footer.cookiesPolicyLabel}</a></li>
          <li><a href={content.footer.cookiesPolicyLink} target="_blank">{content.footer.privacyPolicyLabel}</a></li>
        </ul>

        <div>
          <div className={styles.socialButtonsWrapper}>
            <a href={content.footer.facebook} target="_blank">
              <Image className={styles.socialButtons} src="/assets/footer/facebook.svg" alt={"&larr;"} width={30} height={30} />
            </a>
            <a href={content.footer.linkedin} target="_blank">
              <Image className={styles.socialButtons} src="/assets/footer/linkedin.svg" alt={"&larr;"} width={30} height={30} />
            </a>
            <a href={content.footer.g_business} target="_blank">
              <Image className={styles.socialButtons} src="/assets/footer/g_business.svg" alt={"&larr;"} width={30} height={30} />
            </a>
          </div>
        </div >
      </div >
      <div className={styles.spaceColumn} />
    </footer >
  )
}

export default Footer
