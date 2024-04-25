'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ScrollIndicator.module.css'

const ScrollIndicator = () => {
  const [showIndicator, setShowIndicator] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const shouldShowIndicator = scrollPosition < 100 // Adjust this value based on your layout

      setShowIndicator(shouldShowIndicator)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
      <>
      <Image className={`${styles.scrollIndicator} ${showIndicator ? '' : styles.hidden}`} src={'assets/extras/expand_more.svg'} alt="Image" width="1" height="1" unoptimized={true} />
      </>
  )
}

export default ScrollIndicator