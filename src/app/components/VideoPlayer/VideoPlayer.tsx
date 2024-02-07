
'use client'
import { useEffect } from "react"

const VideoPlayer = () => {

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
    <video
      autoPlay
      playsInline
      loop
      muted
      style={{ width: '100%', height: 'auto' }}
      poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.jpeg?alt=media&token=8d16927e-b450-478f-b1f1-17ac9fb4973a"
    >
      <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_high.mp4?alt=media&token=3c905773-39c6-491c-85d1-8eed21f813a2" type="video/mp4" />
      {/* High res video: https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_high.mp4?alt=media&token=3c905773-39c6-491c-85d1-8eed21f813a2 */}
      {/* Low res video: https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=7182c3d6-3487-4af8-8978-99ac3ab9c952 */}
      Your browser does not support the video tag.
    </video>
  )
}

export default VideoPlayer