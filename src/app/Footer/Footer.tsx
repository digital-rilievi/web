import styles from './Footer.module.css';
import strings from 'localization/it.json'

const Footer = () => {
    return (
        <footer className={`${styles.footer}`}>
            <div className={styles.footerContent}>
                <div className={styles.companyInfo}>
                    <h4>{strings.name}</h4>
                    <p>Via Montello 50/A, 33080, Zoppola, Pordenone</p>
                    <p>P.IVA 01443130933</p>
                </div>
                <div className={styles.contactInfo}>
                    <p>PEC: postacertificata@pec.digitalrilievi.it</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>&copy; 2023 Digital Rilievi Srl. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;