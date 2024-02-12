'use client'
import React, { useState } from 'react'
import styles from './ManualSlider.module.css'
import Image from 'next/image'

interface SliderProps {
    slides: React.ReactNode[];
}

const ManualSlider = (props: SliderProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        if (currentIndex < props.slides.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(props.slides.length - 1);
        }
    };

    const leftArrowStyle = currentIndex === 0 ? 'hidden' : 'visible'
    const rightArrowStyle = currentIndex === props.slides.length - 1 ? 'hidden' : 'visible'

    const translateValue = -currentIndex * 100 + '%';

    return (
        <>
            <div className={styles.slider}>
                <div className={styles.slide}>
                    {props.slides[currentIndex]}
                </div>

                <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide} style={{ visibility: `${leftArrowStyle}` }}>
                    <Image src="/assets/extras/left-arrow.svg" alt={"&larr;"} width={46} height={46} />
                </button>
                <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide} style={{ visibility: `${rightArrowStyle}` }}>
                    <Image src="/assets/extras/right-arrow.svg" alt={"&rarr;"} width={46} height={46} />
                </button>
            </div>
        </>
    )
}

export default ManualSlider