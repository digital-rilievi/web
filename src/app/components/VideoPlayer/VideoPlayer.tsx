
'use client'
import { useEffect } from "react"
import styles from './VideoPlayer.module.css'

interface VideoPlayerProps {
  title?: string,
  videoStyle: object
}

const VideoPlayer = (props: VideoPlayerProps) => {

  useEffect(() => {
    const startPlayback = () => {
      const video = document.getElementById('myVideo') as HTMLVideoElement | null
      if (video) {
        video.play()
      }
    }

    startPlayback()
  }, [])

  return (
    <div style={{ position: "relative" }}>
      <h1 className={`${styles.title} ${styles.invisibleInMobile}`}>
        {props.title}
      </h1>
    </div>
  )
}

export default VideoPlayer