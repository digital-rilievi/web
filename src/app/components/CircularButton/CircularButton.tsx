import React from 'react'
import Link from '../../../../node_modules/next/link'
import styles from './CircularButton.module.css'

interface CircularButtonProps {
    link: string,
    label: string,
    remainsInPage?: boolean
}
const CircularButton = (props: CircularButtonProps) => {
    return (
        <>
            {
                props.remainsInPage ? (
                    <Link href={props.link}>
                        <button className={styles.circularButton}>
                            <span>{props.label}</span>
                        </button>
                    </Link>
                ) :
                    <a href={props.link} target="_blank">
                        <button className={styles.circularButton}>
                            <span>{props.label}</span>
                        </button>
                    </a>
            }
        </>
    )
}

export default CircularButton
