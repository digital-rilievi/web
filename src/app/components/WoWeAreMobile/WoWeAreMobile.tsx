'use client'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './WhoWeAreMobile.module.css'
import content from 'content.json'
import CustomTooltip from '../CustomTooltip/CustomTooltip'

const WhoWeAreMobile = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [progress, setProgress] = useState(0)
    const [lastManualTransition, setLastManualTransition] = useState(Date.now())
    const [autoIntervalId, setAutoIntervalId] = useState<NodeJS.Timeout | null>(null)

    // Your image array here
    const images = content['chi-siamo'].whoWeAreList.map((member, index) => (
        <CustomTooltip key={index} img={member.tooltipImage} quote={member.tooltipQuote} name={member.name} role={member.role} />
    ))

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
        setProgress(0);
        setLastManualTransition(Date.now())
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
        setProgress(0)
        setLastManualTransition(Date.now())
    };

    useEffect(() => {
        if (autoIntervalId != null)
            clearInterval(autoIntervalId) // Clear previous interval
        const intervalId = setInterval(() => {
            nextSlide()
        }, 10000); // 10 seconds interval

        setAutoIntervalId(intervalId) // Save the new interval ID
        return () => clearInterval(intervalId) // Clear interval on unmount
    }, [currentIndex])

    useEffect(() => {
        const timerId = setInterval(() => {
            setProgress((prevProgress) => {
                const newProgress = prevProgress + 0.5 // Increase the increment for smoother animation
                return newProgress >= 100 ? 100 : newProgress
            })
        }, 50)
        return () => clearInterval(timerId)
    }, [currentIndex, lastManualTransition])

    return (
        <div className={styles.container}>
            <div className={styles.row}>
                <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide}>
                    <Image src="/assets/extras/left-arrow-black.svg" alt={"&larr;"} width={46} height={46} />
                </div>
                <div className={styles.imageContainer}>
                    {images[currentIndex]}
                </div>
                <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide}>
                    <Image src="/assets/extras/right-arrow-black.svg" alt={"&rarr;"} width={46} height={46} />
                </div>
            </div>
            <div className={styles.timeBarContainer}>
                <div className={styles.timeBar}>
                    <div className={styles.progressBar} style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    )
}

export default WhoWeAreMobile