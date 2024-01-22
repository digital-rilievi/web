import React from 'react';
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
          <br />
          <p>{content.footer.vat}</p>
          <p>{content.footer.legal1}</p>
          <p>{content.footer.legal2}</p>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <ul>
          <li><a href={content.footer.privacyPolicyLink}>{content.footer.cookiesPolicyLabel}</a></li>
          <li><a href={content.footer.cookiesPolicyLink}>{content.footer.privacyPolicyLabel}</a></li>
        </ul>

        {/* Spacer to create empty space */}
        <div className={styles.spacer}></div>

        <ul>
          {/* Add more list items as needed */}
        </ul>

        <div>
          <div className={styles.socialButtons}>
            <button><i className="fab fa-facebook"></i></button>
            <button><i className="fab fa-instagram"></i></button>
            <button><i className="fab fa-linkedin"></i></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
