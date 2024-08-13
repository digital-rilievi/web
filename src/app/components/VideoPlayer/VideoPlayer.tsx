
'use client'
import { useEffect, useRef, useState } from "react"
import styles from './VideoPlayer.module.css'
import useDeviceInfo from '../../hooks/useDeviceInfo'
import ImageWrapper from "../ImageWrapper/ImageWrapper"

interface VideoPlayerProps {
  title?: string,
  videoStyle: object
}

const VideoPlayer = (props: VideoPlayerProps) => {

  const { browser, device, iosVersion } = useDeviceInfo()

  useEffect(() => {
    const startPlayback = () => {
      const video = document.getElementById('myVideo') as HTMLVideoElement | null
      if (video && device && (device !== "iOS" || (device === "iOS" && browser === "Safari" && !iosBiggerThan17))) {
        video.play()
        setIsPlaying(!isPlaying)
      }
    }

    startPlayback()
  }, [])

  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  };

  const [major, minor = 0] = iosVersion.split('.').map(Number)
  const versionNumber = major + (minor / 10)
  var iosBiggerThan17 = versionNumber >= 17.0

  if (browser) console.log("browser: " + browser)
  if (device) console.log("device: " + device)
  if (iosVersion) console.log("iosVersion: " + iosVersion)

  return (
    <div style={{ position: "relative" }}>
      <h1 className={`${styles.title} ${styles.invisibleInMobile}`}>
        {props.title}
      </h1>
      {(device && (device !== "iOS" || (device === "iOS" && browser === "Safari" && !iosBiggerThan17)) ?
        <div className={styles.videoAndCommandsWrapper}>
          <video
            className="intro-video"
            id="myVideo"
            ref={videoRef}
            playsInline
            autoPlay={(device && device === "iOS" && browser === "Safari") ? false : true}
            loop
            controls={false}
            muted
            style={props.videoStyle}
            poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_lowres.jpeg?alt=media&token=cbf28c19-b5d6-42d1-a2f3-39fbfc9dee5f"
          >
            <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_noaudio.webm?alt=media&token=c0b9afee-2823-4af5-a228-80e2908aa521" type="video/webm" />
            <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=9344e094-3889-4ba4-9b2c-2115b7d431e3" type="video/mp4" />
          </video>
          {((device === "iOS" && browser === "Safari") &&
            <div className={styles.commandsWrapper}>
              <div className={styles.circularButton} onClick={handlePlayPause}>
                {isPlaying ? "METTI IN PAUSA" : "RIPRODUCI"}
              </div>
            </div>
          )}
        </div> :
        <ImageWrapper
          classStyle={props.videoStyle}
          src={`https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_lowres.jpeg?alt=media&token=cbf28c19-b5d6-42d1-a2f3-39fbfc9dee5f`}
          backgroundColor={"#4e4e4e"} />
      )}
    </div>
  )
}

export default VideoPlayer