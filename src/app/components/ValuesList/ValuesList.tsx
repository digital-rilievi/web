'use client'
import React from 'react'
import styles from './ValuesList.module.css'
import BlueCircle from '../BlueCircle/BlueCircle'

interface Value {
    value: string,
    description: string
}

interface ValuesListProps {
    items: Value[]
}

const ValuesList = (props: ValuesListProps) => {
    const handleMouseEnter = (index: number) => {
        const ball = document.getElementById(`blurredBall-${index}`)
        ball?.classList?.add(styles.animate)
    }

    const handleMouseLeave = (index: number) => {
        const ball = document.getElementById(`blurredBall-${index}`)
        ball?.classList?.remove(styles.animate)
    }

    return (
        <div className={styles.column}>
            {props.items.map((item, index) => (
                <div key={index} className={styles.row}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                >
                    <div className={styles.title}>{item.value}</div>
                    <div className={styles.text}>
                        {item.description}
                    </div>
                    <div id={`blurredBall-${index}`} className={styles.blurredBall}>
                        <BlueCircle />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ValuesList
