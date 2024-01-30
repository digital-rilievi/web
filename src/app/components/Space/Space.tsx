import React from 'react'
import styles from './Space.module.css'

interface SpaceProps {
  size?: String
}

const Size = {
  small: "small",
  normal: "normal",
  big: "big"
}

export default function Space(props: SpaceProps) {
  return (
    <div className={
      `${props.size === Size.big ? styles.bigSpace : (props.size === Size.small ? styles.smallSpace : styles.space)}`
    }></div>
  )
}
