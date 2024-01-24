import React from 'react'
import styles from './Footer.module.css'
import content from 'content.json'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <div>
          <h3>{content.footer.companyName}</h3>
          <p>{content.footer.addressLine1}</p>
          <p>{content.footer.addressLine2}</p>
          <p>{content.footer.addressLine3}</p>
          <br />
          <p>{content.footer.pec}</p>
        </div>
        <br />
        <div className={styles.spacer}></div>
        <div>
          <p>{content.footer.vat}</p>
          <p>{content.footer.legal1}</p>
          <p>{content.footer.legal2}</p>
        </div>
      </div>


      <div className={styles.rightColumn}>
        <ul>
          <li><a href={content.footer.privacyPolicyLink} target="_blank">{content.footer.cookiesPolicyLabel}</a></li>
          <li><a href={content.footer.cookiesPolicyLink} target="_blank">{content.footer.privacyPolicyLabel}</a></li>
        </ul>

        <div>
          <div className={styles.socialButtons}>
            <a href={content.footer.facebook} target="_blank">
              <button>
                <i className="fab fa-facebook"></i>
              </button>
            </a>
            <a href={content.footer.linkedin} target="_blank">
              <button>
                <i className="fab fa-linkedin"></i>
              </button>
            </a>
          </div>
        </div >
      </div >
      <div className={styles.spaceColumn} />
    </footer >
  )
}

export default Footer
