import React from 'react'
import Link from '../../../../node_modules/next/link'
import styles from './CircularButton.module.css'

interface CircularButtonProps {
    link: string,
    remainsInPage?: boolean
}
const CircularButton = (props: CircularButtonProps) => {
    return (
        <>
            {
                props.remainsInPage ? (
                    <Link href={props.link}>
                        <button className={styles.circularButton}>
                            <span>SCOPRI DI PIÙ</span>
                        </button>
                    </Link>
                ) :
                    <a href={props.link} target="_blank">
                        <button className={styles.circularButton}>
                            <span>SCOPRI DI PIÙ</span>
                        </button>
                    </a>
            }
        </>
    )
}

export default CircularButton
