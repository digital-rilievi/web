'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <Link href="/">
          <Image src="/img/letter_d.svg" alt="Logo" width="1" height="1" />
        </Link>
      </div>

      <>
        <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}>
          <Link href="/chi-siamo" className={pathname === '/chi-siamo' ? styles.selected : styles.unselected}>
            CHI SIAMO
          </Link>
          <Link href="/progetti" className={pathname === '/progetti' ? styles.selected : styles.unselected}>
            I NOSTRI PROGETTI
          </Link>
          <Link href="/mission" className={pathname === '/mission' ? styles.selected : styles.unselected}>
            LA NOSTRA MISSION
          </Link>
          <Link href="/contatti" className={pathname === '/contatti' ? styles.selected : styles.unselected}>
            CONTATTI
          </Link>
        </div>

        <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
          <div className={styles.bar}></div>
        </div>
      </>
    </nav>
  );
};

export default Navbar;