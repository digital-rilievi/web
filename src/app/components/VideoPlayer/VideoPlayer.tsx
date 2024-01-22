
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
    <div>
      <video
        autoPlay
        playsInline
        loop
        muted
        style={{ width: '100%', height: 'auto' }}
        poster="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.jpeg?alt=media&token=8d16927e-b450-478f-b1f1-17ac9fb4973a"
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro_high.mp4?alt=media&token=e3cd38b5-9503-4c87-9538-20b5a0ead246" type="video/mp4" />
        {/* Low res video if needed: https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=81ec90f8-2b53-403b-b445-8c9901f41f75 */}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default VideoPlayer