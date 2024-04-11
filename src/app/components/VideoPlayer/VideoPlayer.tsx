
'use client'
import { useEffect } from "react"
import styles from './VideoPlayer.module.css'

interface VideoPlayerProps {
  title?: string
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
      <video
        className="intro-video"
        id="myVideo"
        playsInline
        autoPlay
        loop
        muted
        style={{ width: '100%', height: '133.33vw', objectFit: "cover" }}
        poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.jpeg?alt=media&token=5323f5ec-28a5-405e-a387-a17b74e613d1"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_noaudio.webm?alt=media&token=cbd3d82c-cf49-4a03-bccf-525d0bbe375a" type="video/webm" />
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_noaudio.mp4?alt=media&token=a0dc6fa6-1276-4afe-be01-55e104927794" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer