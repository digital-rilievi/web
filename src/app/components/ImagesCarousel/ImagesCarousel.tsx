// components/ManualSlider.tsx
import React, { useState } from 'react'
import styles from './ImagesCarousel.module.css'
import Image from 'next/image'

interface ImagesCarouselProps {
    slides?: string[];
}

const ImagesCarousel = (props: ImagesCarouselProps) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    var images = props.slides ?? []

    const nextSlide = () => {
        if (currentIndex < images.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const prevSlide = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else {
            setCurrentIndex(images.length - 1);
        }
    };

    const leftArrowStyle = currentIndex === 0 ? 'hidden' : 'visible'
    const rightArrowStyle = currentIndex === images.length - 1 ? 'hidden' : 'visible'

    return (
        <div className={styles.container}>
            <Image className={styles.carouselImage} src={images[currentIndex]} alt="Image" width="1" height="1" unoptimized={true} />
            <div className={styles.controls}>
                <button className={`${styles.arrow} ${styles.left}`} onClick={prevSlide} style={{ visibility: `${leftArrowStyle}` }}>
                    <Image src="/assets/extras/left-arrow.svg" alt={"&larr;"} width={46} height={46} />
                </button>
                <div className={styles.positionIndicator}>
                    {currentIndex + 1}/{images.length}
                </div>
                <button className={`${styles.arrow} ${styles.right}`} onClick={nextSlide} style={{ visibility: `${rightArrowStyle}` }}>
                    <Image src="/assets/extras/right-arrow.svg" alt={"&rarr;"} width={46} height={46} />
                </button>
            </div>
        </div>
    )
}

export default ImagesCarousel
