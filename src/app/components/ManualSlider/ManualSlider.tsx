'use client'
import React, { useState } from 'react'
import styles from './ManualSlider.module.css'

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

    const leftArrowStyle = currentIndex === 0 ? { visibility: 'hidden' } : {};
    const rightArrowStyle = currentIndex === props.slides.length - 1 ? { visibility: 'hidden' } : {};

    const translateValue = -currentIndex * 100 + '%';

    return (
        <div className={styles.slider}>
            <div className={styles.slides} style={{ transform: 'translateX(' + translateValue + ')' }}>
                {props.slides.map((slide, index) => (
                    <div key={index} className={styles.slide}>
                        {slide}
                    </div>
                ))}
            </div>

            <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide} style={leftArrowStyle}>
                &larr;
            </button>
            <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide} style={rightArrowStyle}>
                &rarr;
            </button>
        </div>
    )
}

export default ManualSlider