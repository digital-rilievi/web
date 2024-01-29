import React from 'react'
import BlueCircle from '../BlueCircle/BlueCircle'
import CircularButton from '../CircularButton/CircularButton'
import styles from './BlueTextCta.module.css'

interface BlueTextCtaProps {
    text: string,
    label?: string,
    link: string
}

function BlueTextCta(props: BlueTextCtaProps) {
    return (
        <div className={styles.cta}>
            <div className={styles.blueCircleWrapper}>
                <BlueCircle />
            </div>
            <div className={styles.ctaWrapper}>
                <div className={styles.text}>{props.text}</div>
                <div className={styles.button}>
                <CircularButton link={props.link} label={props.label} remainsInPage />
                </div>
            </div>
        </div>
    )
}

export default BlueTextCta