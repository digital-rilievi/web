import React from 'react'
import CircularButton from '../CircularButton/CircularButton'
import styles from './TestimonialQuote.module.css'
import Image from 'next/image'

interface TestimonialQuoteProps {
    imageSrc: string,
    name: string,
    description: string,
    company: string,
    quote: string,
    link?: string,
    linkLabel?: string,
    alt?: string
}


const TestimonialQuote = (props: TestimonialQuoteProps) => {
    return (
        <div className={styles.divContainer}>
            <div className={`${props.alt ? styles.rowContainerReversed : styles.rowContainer}`}>
                <div className={styles.imageColumn}>
                    <Image src={props.imageSrc} alt={''} height={1} width={1} className={styles.image} unoptimized={true} />
                    <h3 className={`${styles.name} ${props.alt && styles.altAlign}`}>{props.name}</h3>
                    <br />
                    <p className={props.alt && styles.altAlign}>{props.description}</p>
                    <p className={props.alt && styles.altAlign}>{props.company}</p>
                </div>

                {props.alt &&
                    <div style={{ "flex": 1 }} />
                }
                <div className={styles.quoteColumn}>
                    <div className={`${props.alt ? styles.rowReversed : styles.row}`}>
                        <Image src={'/assets/extras/quotes.svg'} width={1} height={1} alt={''} className={styles.icon} unoptimized={true} />
                        <div>
                            <Image src={'/assets/extras/quotes.svg'} width={1} height={1} alt={''} className={styles.quoteInvisibleIcon} unoptimized={true} />
                            <span className={styles.quote}>{props.quote}</span>
                        </div>
                    </div>
                    <div style={{ "visibility": "hidden" }}>
                        <h3 >{props.name}</h3>
                        <br />
                        <p>{props.description}</p>
                        <p>{props.company}</p>
                    </div>
                </div>

                {!props.alt &&
                    <div className={styles.buttonColumn}>
                        <div className={styles.button}>
                            {props.link &&
                                <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
                            }
                        </div>
                        <div style={{ "visibility": "hidden" }}>
                            <h3 className={styles.name}>{props.name}</h3>
                            <br />
                            <p>{props.description}</p>
                            <p>{props.company}</p>
                        </div>
                    </div>
                }

            </div>

        </div>
    )
}

export default TestimonialQuote
