import styles from './Footer.module.css'
import strings from './footer.json'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.companyInfo}>
                    <h4>{strings.companyName}</h4>
                    <p>{strings.companyAddress}</p>
                    <p>{strings.companyVat}</p>
                </div>
                <div className={styles.contactInfo}>
                    <p>{strings.companyPec}</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>{strings.footerRights}</p>
            </div>
        </footer>
    );
};

export default Footer;