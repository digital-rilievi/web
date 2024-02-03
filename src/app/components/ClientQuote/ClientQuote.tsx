import React from 'react'
import CircularButton from '../CircularButton/CircularButton'
import styles from './ClientQuote.module.css'
import Image from 'next/image'

interface ClientQuoteProps {
    imageSrc: string,
    name: string,
    description: string,
    quote: string,
    link: string,
    linkLabel: string
}


const ClientQuote = (props: ClientQuoteProps) => {
    return (
        <div className={styles.rowContainer}>
            <div className={styles.column}>
                <Image src={props.imageSrc} alt={''} height={1} width={1} className={styles.image} unoptimized={true} />
                <h3 className={styles.name}>{props.name}</h3>
                <br />
                <p>{props.description}</p>
            </div>

            <div className={styles.row}>
                <Image src={'/assets/extras/quotes.png'} width={1} height={1} alt={''} className={styles.icon} unoptimized={true} />
                <div>
                <Image src={'/assets/extras/quotes.png'} width={1} height={1} alt={''} className={styles.quoteInvisibleIcon} unoptimized={true} />
                <span>{props.quote}</span>
                </div>
            </div>

            <div className={styles.button}>
                <CircularButton link={props.link} label={props.linkLabel} remainsInPage />
            </div>
        </div>
    );
};

export default ClientQuote
