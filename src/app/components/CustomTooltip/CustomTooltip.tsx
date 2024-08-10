import React from 'react'
import styles from './CustomTooltip.module.css'
import Image from 'next/image'
import ImageWrapper from '../ImageWrapper/ImageWrapper'

interface TooltipProps {
    img?: string,
    quote?: string,
    name?: string,
    role?: string
}

const CustomTooltip = (props: TooltipProps) => {
    return (
        <div className={styles.tooltipContainer}>
            {props.img && (
                <div className={styles.imageRowContainer}>
                    <ImageWrapper className={styles.tooltipImage} imagestyle={styles.image} alt={''} src={props.img} backgroundColor={"#F5F5F5"} />
                    <div className={styles.nameColumnContainer}>
                        {props.name && (
                            <h1 className={styles.nameForMobile}>{props.name}</h1>
                        )}
                        {props.role && (
                            <h1 className={styles.role}>{props.role}</h1>
                        )}
                    </div>
                </div>
            )}
            {props.quote && (
                <div className={styles.quoteWrapper}>
                    <Image className={styles.tooltipQuote} src={'/assets/extras/quotes.svg'} alt={''} height={1} width={1} />
                    <div>
                        <Image className={`${styles.tooltipQuote} ${styles.tooltipQuoteInvisible}`} src={'/assets/extras/quotes.svg'} alt={''} height={1} width={1} />
                        <p className={styles.tooltipText}>{props.quote}</p>
                    </div>
                </div>
            )}
        </div>
    )

}

export default CustomTooltip