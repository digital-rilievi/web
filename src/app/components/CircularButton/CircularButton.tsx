import React from 'react'
import Link from '../../../../node_modules/next/link'
import styles from './CircularButton.module.css'
import content from 'content.json'

interface CircularButtonProps {
    link: string,
    label?: string,
    remainsInPage?: boolean
}
const CircularButton = (props: CircularButtonProps) => {
    return (
        <>
            {
                props.remainsInPage ? (
                    <Link href={props.link}>
                        <button className={styles.circularButton}>
                            <span>{props.label ? props.label : content.defaultButtonsValue}</span>
                        </button>
                    </Link>
                ) :
                    <a href={props.link} target="_blank">
                        <button className={styles.circularButton}>
                            <span>{props.label ? props.label : content.defaultButtonsValue}</span>
                        </button>
                    </a>
            }
        </>
    )
}

export default CircularButton
