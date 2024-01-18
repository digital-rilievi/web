
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
        <source src="https://htlnjfaj3apbggng.public.blob.vercel-storage.com/intro-dgs6nH0j6PJ1aP1x9GX5nAnYRRVEwf.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideoPlayer;