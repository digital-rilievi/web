import React from 'react'
import styles from './TestimonialQuote.module.css'
import Image from 'next/image'
import ImageWrapper from '../ImageWrapper/ImageWrapper'
import Link from '../../../../node_modules/next/link'

interface TestimonialQuoteProps {
    imageSrc?: string,
    name?: string,
    description?: string,
    company?: string,
    quote?: string,
    link?: string,
    linkLabel?: string,
    alt?: string
}


const TestimonialQuote = (props: TestimonialQuoteProps) => {
    return (
        <div className={styles.divContainer}>
            <div className={`${props.alt ? styles.rowContainerReversed : styles.rowContainer}`}>
                <div className={`${props.alt ? styles.imageColumnReversed : styles.imageColumn}`}>
                    {props.imageSrc && <ImageWrapper src={props.imageSrc} className={styles.image} backgroundColor={"#3a3a3a"} /> }
                    <h3 className={`${styles.name} ${props.alt && styles.altAlign}`}>{props.name}</h3>
                    <br />
                    <p className={props.alt && styles.altAlign}>{props.description}</p>
                    <p className={props.alt && styles.altAlign}>{props.company}</p>
                </div>

                {props.alt && props.link &&
                    <div style={{ "flex": 1 }} />
                }
                <div className={styles.quoteColumn}>
                    <div className={`${props.alt ? styles.rowReversed : styles.row}`}>
                        <Image src={'/assets/extras/quotes.svg'} width={1} height={1} alt={''} className={styles.icon} />
                        <div>
                            <Image src={'/assets/extras/quotes.svg'} width={1} height={1} alt={''} className={styles.quoteInvisibleIcon} />

                            <div className={styles.buttonColumn}>
                                <div className={styles.quote}>{props.quote}</div>
                                    <>
                                        <div className={`${styles.buttonWrapper} ${!props.link && styles.invisible}` }>
                                            <Link href={`${props.link ? props.link : ''}`}>
                                                <div className={styles.button}>{props.linkLabel}</div>
                                            </Link>
                                        </div>
                                        <div className={styles.invisible}>
                                            <h3 className={styles.name}>{props.name}</h3>
                                            <br />
                                            <p>{props.description}</p>
                                            <p>{props.company}</p>
                                        </div>
                                    </>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default TestimonialQuote
