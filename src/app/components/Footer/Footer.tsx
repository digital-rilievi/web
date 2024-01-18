import styles from './Footer.module.css'
import content from './../components_content.json'

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContent}>
                <div className={styles.companyInfo}>
                    <h4>{content.footer.companyName}</h4>
                    <p>{content.footer.companyAddress}</p>
                    <p>{content.footer.companyVat}</p>
                </div>
                <div className={styles.contactInfo}>
                    <p>{content.footer.companyPec}</p>
                </div>
            </div>
            <div className={styles.footerBottom}>
                <p>{content.footer.footerRights}</p>
            </div>
        </footer>
    );
};

export default Footer;