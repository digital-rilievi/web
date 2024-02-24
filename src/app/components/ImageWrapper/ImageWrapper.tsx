'use client'
import React, { useEffect, useState } from 'react'
import NextImage from 'next/image'
import styles from './ImageWrapper.module.css'
import { stringify } from 'querystring'


interface ImageWrapperProps {
    src: string,
    alt: string,
    backgroundNotNeeded?: boolean,
    width?: `${number}` | number,
    height?: `${number}` | number,
    className?: string,
    imagestyle?: string,
    optimized?: boolean,
    loading?: string
}

const ImageWrapper = (props: ImageWrapperProps) => {
    const [blurDataURL, setBlurDataURL] = useState<string | null>(null)
    const [imageProps, setImageProps] = useState<{width: `${number}` | number, height: `${number}` | number} | undefined>(undefined)

    const img = new Image()

    img.onload = function() {
      const width = img.width
      const height = img.height

      // Now you can use width and height to set the size of your placeholder
      setImageProps({width: width, height: height})
    };

    useEffect(() => {
        img.src = props.src

        const fetchBase64Image = async () => {
            try {
                const response = await fetch("/assets/extras/pexels-pixabay-56866.png");
                const blob = await response.blob();
                const buffer = await new Response(blob).arrayBuffer();
                const base64Encoded = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''));
                setBlurDataURL(`data:image/png;base64,${base64Encoded}`);
            } catch (error) {
                console.error('Error encoding image to base64:', error);
                setBlurDataURL(null);
            }
        };

        fetchBase64Image();
    }, []);

    const encodeImageToBase64 = async () => {
        try {
            const response = await fetch("/assets/extras/pexels-pixabay-56866.png")
            const blob = await response.blob();
            const buffer = await new Response(blob).arrayBuffer()
            const base64Encoded = btoa(new Uint8Array(buffer).reduce((data, byte) => data + String.fromCharCode(byte), ''))
            return `data:image/png;base64,${base64Encoded}`
        } catch (error) {
            console.error('Error encoding image to base64:', error)
            return null
        }
    };

    return (
        <div className={`${props.className} ${props.backgroundNotNeeded ? '' : styles.background}`}>
            <NextImage
                className={`${styles.image} ${props.imagestyle}`}
                
                src={props.src}
                alt={props.alt}
                loading={`${props.loading ? props.loading : "lazy"}`}
                placeholder="blur"
                blurDataURL={`/_next/image?url=${props.src}&w=16&q=1`}
        width={imageProps?.width ?? 1}
        height={imageProps?.height ?? 1}
                unoptimized={!props.optimized}
            />
        </div>
    )
}

export default ImageWrapper