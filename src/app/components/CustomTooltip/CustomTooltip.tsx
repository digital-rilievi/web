import React from 'react'
import styles from './CustomTooltip.module.css'
import Image from 'next/image'

interface TooltipProps {
    img?: string,
    quote?: string
}

const CustomTooltip = (props: TooltipProps) => {
    return (
        <div className={styles.tooltipContainer}>
            {props.img && (
                <Image className={styles.tooltipImage} alt={''} src={props.img} width={1} height={1} unoptimized={true} />
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