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
                <Image className={styles.tooltipImage} src={props.img} width={1} height={1} unoptimized={true} />
            )}
            {props.quote && (
                <div className={styles.quoteWrapper}>
                    <p className={styles.tooltipQuote}>"</p>
                    <p className={styles.tooltipText}>{props.quote}</p>
                </div>
            )}
        </div>
    )
}

export default CustomTooltip