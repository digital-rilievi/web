
'use client'
import { useEffect } from "react"
import styles from './VideoPlayer.module.css'
import useDeviceInfo from '../../hooks/useDeviceInfo'
import ImageWrapper from "../ImageWrapper/ImageWrapper"

interface VideoPlayerProps {
  title?: string,
  videoStyle: object
}

const VideoPlayer = (props: VideoPlayerProps) => {

  const { device, os, iosVersion } = useDeviceInfo()

  useEffect(() => {
    const startPlayback = () => {
      const video = document.getElementById('myVideo') as HTMLVideoElement | null
      if (video) {
        video.play()
      }
    }

    startPlayback()
  }, [])

  const [major, minor = 0] = iosVersion.split('.').map(Number)
  const versionNumber = major + (minor / 10)
  var iosBiggerThan17 = versionNumber >= 17.0

  if(device) console.log("device: " + device)
  if(os) console.log("os: " + os)
  if(iosVersion) console.log("iosVersion: " + iosVersion)

  return (
    <div style={{ position: "relative" }}>
      <h1 className={`${styles.title} ${styles.invisibleInMobile}`}>
        {props.title}
      </h1>
      {(device !== "iOS" || device === "iOS" && !iosBiggerThan17) ?
        <video
          className="intro-video"
          id="myVideo"
          playsInline
          loop
          muted
          style={props.videoStyle}
          poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_lowres.jpeg?alt=media&token=cbf28c19-b5d6-42d1-a2f3-39fbfc9dee5f"
        >
          <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_noaudio.webm?alt=media&token=c0b9afee-2823-4af5-a228-80e2908aa521" type="video/webm" />
          <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=9344e094-3889-4ba4-9b2c-2115b7d431e3" type="video/mp4" />
        </video> :
        <ImageWrapper
          className={styles.image}
          src={`https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_lowres.jpeg?alt=media&token=cbf28c19-b5d6-42d1-a2f3-39fbfc9dee5f`}
          backgroundColor={"#4e4e4e"} />
      }
    </div>
  )
}

export default VideoPlayer