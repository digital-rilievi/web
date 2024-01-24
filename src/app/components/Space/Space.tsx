import React from 'react'
import styles from './Space.module.css'

interface SpaceProps {
    size?: String
}

const Size = {
    normal: "normal",
    big: "big"
}

export default function Space(props: SpaceProps) {
  return (
    <div className={
        `${props.size === Size.big ? styles.bigSpace : styles.space}`
    }></div>
  )
}
