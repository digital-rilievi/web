'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css'; // Create a CSS module for styling

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };


  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <Image src="/img/letter_d.png" alt="Logo" />
        </Link>
      </div>

      <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}>

        <Link href="/page1" onClick={() => setMobileMenuOpen(false)}>
          CHI SIAMO
        </Link>
        <Link href="/page2" onClick={() => setMobileMenuOpen(false)}>
          I NOSTRI PROGETTI
        </Link>
        <Link href="/page3" onClick={() => setMobileMenuOpen(false)}>
          LA NOSTRA MISSION
        </Link>
        <Link href="/page4" onClick={() => setMobileMenuOpen(false)}>
          CONTATTI
        </Link>
      </div>

      <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </nav>
  );
};

export default Navbar;