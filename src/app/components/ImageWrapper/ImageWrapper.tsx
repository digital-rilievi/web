import NextImage from 'next/image'
import styles from './ImageWrapper.module.css'

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

const ImageWrapper = (props: ImageWrapperProps) => {

  return (
    <div
      className={`${props.className}`}>
      <NextImage
        className={`${styles.image} ${props.imagestyle}`}
        style={{
          ...(props.backgroundColor ? { backgroundColor: `${props.backgroundColor}`, backgroundSize: 'cover' } : {}),
        }}
        src={props.src}
        alt={props.alt ?? 'Image'}
        loading={`${props.loading ? props.loading : "lazy"}`}
        width={props.width ?? 1}
        height={props.height ?? 1}
        unoptimized={!props.optimized}
      />
    </div>
  )
}

export default ImageWrapper