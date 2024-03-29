export function BgVideo() {
  
    return (
      <video
        autoPlay
        muted
        style={{
          position: 'absolute',
          top: '-50%',
          left: 0,
          width: '100%',
          height: '100vh',
          objectFit: 'cover',
          filter:'blur(20px)',
          scale: 1.5,
          zIndex: -1,
        }}
      >
        <source src="/vector.mp4" type="video/mp4" />
        {/* Add fallback for browsers that don't support video */}
      </video>
    );
  }