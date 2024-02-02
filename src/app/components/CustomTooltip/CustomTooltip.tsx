import React from 'react'
import styles from './CustomTooltip.module.css'
import Image from 'next/image'

const CustomTooltip = () => {
  return (
    <div className={styles.tooltipContainer}>
        <Image className={styles.tooltipImage} src={"/assets/whoWeAre/adriano.png"} width={1} height={1} unoptimized={true}/>
        <div className={styles.quoteWrapper}>
        <p className={styles.tooltipQuote}>"</p>
        <p className={styles.tooltipText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
        </div>
    </div>
  )
}

export default CustomTooltip