
'use client'
const VideoPlayer = () => {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{ width: '100%', height: 'auto' }}
      >
        <source src="\assets\video\intro-sito-adriano-facchin_prores.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;
