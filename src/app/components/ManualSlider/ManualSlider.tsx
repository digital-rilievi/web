'use client'
import React, { useState } from 'react';
import styles from './ManualSlider.module.css';
import Image from 'next/image';

interface SliderProps {
  slides: React.ReactNode[];
}

const ManualSlider = (props: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % props.slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + props.slides.length) % props.slides.length);
  };

  const translateValue = -currentIndex * 100 + '%';

  return (
    <div className={styles.slider}>
      <div className={styles.slides} style={{ transform: `translateX(${translateValue})` }}>
        {props.slides.map((slide, index) => (
          <div key={index} className={styles.slide}>
            {slide}
          </div>
        ))}
      </div>

      <div className={styles.arrows}>
        <button className={styles.arrow} onClick={prevSlide}>
          <Image src="/assets/extras/left-arrow.svg" alt="&larr;" width={46} height={46} />
        </button>
        <button className={styles.arrow} onClick={nextSlide}>
          <Image src="/assets/extras/right-arrow.svg" alt="&rarr;" width={46} height={46} />
        </button>
      </div>
    </div>
  );
};

export default ManualSlider;