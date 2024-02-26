import React from 'react'
import styles from './CustomTooltip.module.css'
import Image from 'next/image'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

interface TooltipProps {
    img?: string,
    quote?: string
}

const CustomTooltip = (props: TooltipProps) => {
    return (
        <div className={styles.tooltipContainer}>
            {props.img && (
                <ImageWrapper className={styles.tooltipImage} alt={''} src={props.img} />
            )}
            {props.quote && (
                <div className={styles.quoteWrapper}>
                    <Image className={styles.tooltipQuote} src={'/assets/extras/quotes.svg'} alt={''} height={1} width={1} />
                    
                    <div>
                    <Image className={styles.tooltipQuote} src={'/assets/extras/quotes.svg'} style={{visibility: "hidden"}} alt={''} height={1} width={1} />
                    <p className={styles.tooltipText}>{props.quote}</p>
                </div>
                </div>
            )}
        </div>
    )
}

export default CustomTooltip