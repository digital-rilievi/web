import React from 'react';
import styles from './Footer.module.css';
  
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.leftColumn}>
        <div>
          <h3>Your Company Name</h3>
          <p>123 Main Street, Cityville, Country</p>
          <p>VAT Code: XXX-XXX-XXX</p>
        </div>
      </div>

      <div className={styles.rightColumn}>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#">Cookie Policy</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h3>Follow Us</h3>
          <div className={styles.socialButtons}>
            <button><i className="fab fa-facebook"></i></button>
            <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              className={"bi bi-facebook"}
              viewBox="0 0 16 16"
            >
              <path d="M15 0H1C.448 0 0 .448 0 1v14c0 .552.448 1 1 1h7.695v-6.275H6.59V7.87c0-1.815 1.08-2.82 2.74-2.82.787 0 1.63.14 1.63.14v1.79h-1.822c-.904 0-1.186.56-1.186 1.137v1.37h3.204l-.515 3.725h-2.689V16h5c.552 0 1-.448 1-1V1c0-.552-.448-1-1-1z" />
            </svg>
            </button>
            <button><i className="fab fa-instagram"></i></button>
            <button><i className="fab fa-linkedin"></i></button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
