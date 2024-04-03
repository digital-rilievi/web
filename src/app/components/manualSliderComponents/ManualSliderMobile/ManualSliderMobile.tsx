'use client'
import React, { useState } from 'react'
import styles from './ManualSliderMobile.module.css'
import Image from 'next/image'

interface SliderProps {
    className?: string,
    slides: React.ReactNode[]
}

const ManualSlider = (props: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [startX, setStartX] = useState<number | null>(null)

    const handleTouchStart = (e: React.TouchEvent) => {
        setStartX(e.touches[0].clientX);
    };

    const handleTouchEnd = (e: React.TouchEvent) => {
        if (startX === null) {
            return;
        }

        const endX = e.changedTouches[0].clientX;
        const deltaX = startX - endX;

        if (deltaX > 50) {
            // Swipe right, go to the next slide
            nextSlide();
        } else if (deltaX < -50) {
            // Swipe left, go to the previous slide
            prevSlide();
        }

        setStartX(null);
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === props.slides.length - 1 ? 0 : prevIndex + 1))
    }

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? props.slides.length - 1 : prevIndex - 1))
    };

    return (
        <div className={styles.row}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}>
            <div className={`${styles.arrow} ${styles.leftArrow}`} onClick={prevSlide}>
                <Image src="/assets/extras/left-arrow-white.svg" alt={"&larr;"} width={46} height={46} />
            </div>
            <div className={styles.imageContainer}>
                {props.slides[currentIndex]}
            </div>
            <div className={`${styles.arrow} ${styles.rightArrow}`} onClick={nextSlide}>
                <Image src="/assets/extras/right-arrow-white.svg" alt={"&rarr;"} width={46} height={46} />
            </div>
        </div>
    )
}

export default ManualSlider