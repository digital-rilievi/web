
'use client'
import { useEffect } from "react";

const VideoPlayer = () => {

  useEffect(() => {
    const startPlayback = () => {
      const video = document.getElementById('myVideo') as HTMLVideoElement | null;
      if (video) {
        video.play();
      }
    };

    startPlayback();
  }, []);

  return (
    <div>
      <video
        autoPlay
        playsInline
        loop
        muted
        style={{ width: '100%', height: 'auto' }}
      >
        <source src="https://firebasestorage.googleapis.com/v0/b/digital-rilievi.appspot.com/o/intro.mp4?alt=media&token=f890852e-f274-4cc8-b7a1-02d1b836a556" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;