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
    const [blurDataURL, setBlurDataURL] = useState<string | null>(null)
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

        const fetchBase64Image = async () => {
            try {
                const response = await fetch(props.src)
                const blob = await response.blob();
                const buffer = await new Response(blob).arrayBuffer()
                const base64Encoded = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''))
                setBlurDataURL(`data:image/png;base64,${base64Encoded}`)
            } catch (error) {
                console.error('Error encoding image to base64:', error)
                setBlurDataURL(null)
            }
        };

        fetchBase64Image();
    }, []);

    return (
        <div className={`${props.className} ${props.backgroundNotNeeded ? '' : styles.background}`}>
            <NextImage
                className={`${styles.image} ${props.imagestyle}`}

                src={props.src}
                alt={props.alt}
                loading={`${props.loading ? props.loading : "lazy"}`}
                placeholder="blur"
                blurDataURL={`${blurDataURL}`}
                width={imageProps?.width ?? props.width ?? 1}
                height={imageProps?.height ?? props.height ?? 1}
                unoptimized={!props.optimized}
            />
        </div>
    )
}

export default ImageWrapper