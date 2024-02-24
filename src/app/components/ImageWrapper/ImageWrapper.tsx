'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './ImageWrapper.module.css'

interface ImageWrapperProps {
    src: string,
    alt: string,
    backgroundNotNeeded?: boolean,
    width?: `${number}` | number,
    height?: `${number}` | number,
    className?: string,
    imagestyle?: string,
    optimized?: boolean
}

const ImageWrapper = (props: ImageWrapperProps) => {
    const [blurDataURL, setBlurDataURL] = useState<string | null>(null)

    useEffect(() => {
        const fetchBase64Image = async () => {
            const base64Encoded = await encodeImageToBase64()
            setBlurDataURL(base64Encoded)
        };

        fetchBase64Image()
    }, [])

    const encodeImageToBase64 = async () => {
        try {
            const response = await fetch("/assets/extras/placeholder.png")
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
            <Image
                className={`${styles.image} ${props.imagestyle}`}
                src={props.src}
                alt={props.alt}
                placeholder="empty"
                blurDataURL={`data:image/png;base64,${blurDataURL}`}
                width={props.width ?? 1}
                height={props.height ?? 1}
                unoptimized={!props.optimized}
            />
        </div>
    )
}

export default ImageWrapper