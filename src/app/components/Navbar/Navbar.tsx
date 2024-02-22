'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.css'
import { usePathname } from 'next/navigation'
import { useOnce } from 'app/providers/OnceProvider'


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

  useEffect(() => {
    // Allow scrolling after 3 seconds
    const enableScroll = () => {
      document.body.style.overflowY = 'auto'
    }

    document.body.style.overflowY = 'hidden'

    // with this logic wrapping the prop.animateLogo, it will do it only animate on first page load
    //const isFirstCall = once()
    //var animationNeeded = isFirstCall && (props.animateLogo ? props.animateLogo : false)
    //setAnimatedLogoNeeded(animationNeeded)

    var time = props.animateLogo ? 3000 : 0

    const scrollTimeout = setTimeout(enableScroll, time)

    // Clear the timeout to prevent enabling scrolling if the component unmounts before the timeout
    return () => clearTimeout(scrollTimeout)
  }, [])

  return (
    <div style={{ position: "relative" }}>
      {!props.invisible && props.animateLogo &&
        <div>
          <Link href="/">
            <Image className={`${styles.logo} ${styles.logoAnimated}`} src="/assets/logo/letter_d.svg" alt="Logo" width="1" height="1" />
          </Link>
        </div>
      }
      <nav className={props.invisible ? styles.spacingNavBar : styles.navbar}>
        <div>
          <Link href="/">
            <Image className={styles.logo} src="/assets/logo/letter_d.svg" alt="Logo" width="1" height="1" />
          </Link>
        </div>
        <>
          <div className={`${styles.navLinks} ${isMobileMenuOpen ? styles.showMobileMenu : ''}`}>
            <Link href="/chi-siamo" className={pathname === '/chi-siamo' ? styles.selected : styles.unselected}>
              CHI SIAMO
            </Link>
            <Link href="/contatti" className={pathname === '/contatti' ? styles.selected : styles.unselected}>
              CONTATTI
            </Link>
            <Link href="/progetti" className={pathname.includes('/progetti') ? styles.selected : styles.unselected}>
              I NOSTRI PROGETTI
            </Link>
            <Link href="/testimonials" className={pathname === '/testimonials' ? styles.selected : styles.unselected}>
              DICONO DI NOI
            </Link>
          </div>

          <div className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </>
      </nav>
    </div>
  )
}


export default Navbar