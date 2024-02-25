'use client'
import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'
import styles from './ImageWrapper.module.css'


interface ImageWrapperProps {
    src: string,
    alt: string,
    backgroundNotNeeded?: boolean,
    width?: `${number}` | number,
    height?: `${number}` | number,
    className?: string,
    imagestyle?: string,
    optimized?: boolean,
    loading?: "lazy" | "eager" | undefined
}

const ImageWrapper = (props: ImageWrapperProps) => {
    const [imageProps, setImageProps] = useState<{ width: `${number}` | number, height: `${number}` | number } | undefined>(undefined)

    var img: HTMLImageElement | undefined

    useEffect(() => {
        img = new Image()
        
        if (img != null) {

            img.src = props.src

            img.onload = function () {
                const width = img?.width
                const height = img?.height

                // Now you can use width and height to set the size of your placeholder
                setImageProps({ width: width ?? 1, height: height ?? 1 })
            };
        }
    }, []);

    return (
        <div className={`${props.className} ${props.backgroundNotNeeded ? '' : styles.background}`}>
            <NextImage
                className={`${styles.image} ${props.imagestyle}`}

                src={props.src}
                alt={props.alt}
                loading={`${props.loading ? props.loading : "lazy"}`}
                placeholder="blur"
                blurDataURL={`/_next/image?url=${props.src}&w=16&q=1`}
                width={imageProps?.width ?? props.width ?? 1}
                height={imageProps?.height ?? props.height ?? 1}
                unoptimized={!props.optimized}
            />
        </div>
    )
}

export default ImageWrapper