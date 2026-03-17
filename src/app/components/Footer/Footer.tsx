import React from "react";
import styles from "./Footer.module.css";
import content from "content.json";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <h1 className={styles.name}>{content.contatti.companyName}</h1>
      <br />
      <div className={styles.rowContainer}>
        <div className={styles.leftColumn}>
          <div>
            <p className={styles.footerAddress}>P.IVA {content.contatti.vat}</p>
            <p className={styles.footerAddress}>{content.contatti.legal}</p>
            <p className={styles.footerAddress}>REA: {content.contatti.rea}</p>
            <p className={styles.footerAddress}>
              Cod. univoco: {content.contatti.fatturazione}
            </p>
          </div>
          <br />
          <div>
            <p className={styles.footerAddress}>
              {content.contatti.addressLine1}
            </p>
            <p className={styles.footerAddress}>
              {content.contatti.addressLine2}
            </p>
            <p className={styles.footerAddress}>
              {content.contatti.addressLine3}
            </p>
          </div>
        </div>

        <div className={styles.rightColumn}>
          <ul>
            <li>
              <a
                className={styles.footerAddress}
                href="/assets/footer/tuv-cert.pdf"
                target="_blank"
              >
                Certificazione ISO 9001:2015
              </a>
            </li>
            <li>
              <a
                className={styles.footerAddress}
                href="/assets/footer/a211-sheet.pdf"
                target="_blank"
              >
                Accreditamento Bando A2.1.1 - FVG
              </a>
            </li>
            <li>
              <a
                className={styles.footerAddress}
                href={content.footer.privacyPolicyLink}
                target="_blank"
              >
                {content.footer.cookiesPolicyLabel}
              </a>
            </li>
            <li>
              <a
                className={styles.footerAddress}
                href={content.footer.cookiesPolicyLink}
                target="_blank"
              >
                {content.footer.privacyPolicyLabel}
              </a>
            </li>
          </ul>
          <br />
          <div>
            <div className={styles.socialButtonsWrapper}>
              <a href={content.footer.facebook} target="_blank">
                <Image
                  className={styles.socialButtons}
                  src="/assets/footer/facebook.svg"
                  alt={"&larr;"}
                  width={30}
                  height={30}
                />
              </a>
              <a href={content.footer.linkedin} target="_blank">
                <Image
                  className={styles.socialButtons}
                  src="/assets/footer/linkedin.svg"
                  alt={"&larr;"}
                  width={30}
                  height={30}
                />
              </a>
              <a href={content.footer.g_business} target="_blank">
                <Image
                  className={styles.socialButtons}
                  src="/assets/footer/g_business.svg"
                  alt={"&larr;"}
                  width={30}
                  height={30}
                />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.spaceColumn} />
      </div>
    </footer>
  );
};

export default Footer;
