'use client'
import { useState, useEffect } from 'react'
import NextImage from 'next/image'
import styles from './CarouselImageWrapper.module.css'

interface ImageWrapperProps {
  src: string,
  alt?: string,
  backgroundColor?: string,
  width?: `${number}` | number,
  height?: `${number}` | number,
  className?: string,
  imagestyle?: string,
  optimized?: boolean,
  loading?: "lazy" | "eager" | undefined
}

const CarouselImageWrapper = (props: ImageWrapperProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [currentSrc, setCurrentSrc] = useState(props.src)

  useEffect(() => {
    if (props.src !== currentSrc) {
      setIsLoading(true);
      setCurrentSrc(props.src)
    }
  }, [props.src, currentSrc])

  return (
    <div className={`${styles.imageContainer} ${props.className}`}>
      {isLoading && <div className={styles.placeholder} style={{ backgroundColor: props.backgroundColor }}></div>}
      <NextImage
        className={`${styles.image} ${props.imagestyle}`}
        style={{
          ...(props.backgroundColor ? { backgroundColor: `${props.backgroundColor}`, backgroundSize: 'cover' } : {}),
        }}
        src={currentSrc}
        alt={props.alt ?? 'Image'}
        loading={props.loading ?? 'lazy'}
        width={props.width ?? 1}
        height={props.height ?? 1}
        unoptimized={!props.optimized}
        onLoad={() => setIsLoading(false)}
      />
    </div>
  )
}

export default CarouselImageWrapper