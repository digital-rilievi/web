
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
      <video
        className="intro-video"
        id="myVideo"
        playsInline
        autoPlay
        loop
        muted
        style={props.videoStyle}
        poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_lowres.jpeg?alt=media&token=cbf28c19-b5d6-42d1-a2f3-39fbfc9dee5f"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_noaudio.webm?alt=media&token=5660bb0c-c389-4227-aad0-61e825abe9bf" type="video/webm" />
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=1ea9086c-61b9-444e-b8c0-df2f8d518062" type="video/mp4" />
      </video>
    </div>
  )
}

export default VideoPlayer