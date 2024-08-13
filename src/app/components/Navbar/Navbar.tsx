'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'

interface NavBarProps {
  invisible?: boolean,
  animateLogo?: boolean
}

const Navbar = (props: NavBarProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false)
  //const [animatedLogoNeeded, setAnimatedLogoNeeded] = useState(false)

  const pathname = usePathname()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen)
  }

  /*
  useEffect(() => {
    // Function to handle user interaction
    const handleUserInteraction = () => {
      setAnimatedLogoNeeded(true)
    }

    // Add event listeners for scroll and click events
    window.addEventListener('scroll', handleUserInteraction)
    window.addEventListener('click', handleUserInteraction)

    // Cleanup the event listeners when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleUserInteraction)
      window.removeEventListener('click', handleUserInteraction)
    }
  }, [])
  */


  return (
    <div style={{ position: "relative" }}>
      {!props.invisible && props.animateLogo &&
        <div>
          <Link href="/" prefetch={false}>
            {/* <Image className={`${styles.bigLogo} ${animatedLogoNeeded ? styles.logoAnimated : ''}`} src="/assets/logo/letter_d.svg" alt="Logo" width="1" height="1" /> */}
            <Image className={`${styles.bigLogo} ${styles.logoAnimated}`} src="/assets/logo/letter_d.svg" alt="Logo" width="1" height="1" />
          </Link>
        </div>
      }
      <nav className={`${props.invisible ? styles.spacingNavBar : styles.navbar} ${isMobileMenuOpen ? styles.mobileMenuMaskDeactivated : ''}`}>
        <div>
          <Link href="/" prefetch={false}>
            <Image className={styles.logo} src="/assets/logo/letter_d.svg" alt="Logo" width="1" height="1" />
          </Link>
        </div>
        <>
          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}>
            <Link prefetch={false} href="/chi-siamo" className={pathname === '/chi-siamo' ? styles.selected : styles.unselected}>
              CHI SIAMO
            </Link>
            <Link prefetch={false} href="/contatti" className={pathname === '/contatti' ? styles.selected : styles.unselected}>
              CONTATTI
            </Link>
            <Link prefetch={false} href="/progetti" className={pathname.includes('/progetti') ? styles.selected : styles.unselected}>
              I NOSTRI PROGETTI
            </Link>
            <Link prefetch={false} href="/testimonials" className={pathname === '/testimonials' ? styles.selected : styles.unselected}>
              DICONO DI NOI
            </Link>
          </div>

          <div onClick={toggleMobileMenu}>
          <Image className={`${styles.mobileMenuIcon} ${props.invisible ? styles.invisibleMenuIcon : ''}`} src={'/assets/extras/menu.svg'} alt={''} height={1} width={1} />
          </div>
        </>
      </nav>
    </div>
  )
}

export default Navbar

