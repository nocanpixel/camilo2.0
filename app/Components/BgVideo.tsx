export function BgVideo() {
    return (
        <video
            autoPlay
            muted
            loop
            style={{
                position: 'absolute',
                top: '-70%',
                left: 0,
                width: '100%', // Set width to 100%
                height: '100vh', // Set height to 100% viewport height
                objectFit: 'cover', // Optional: Maintain aspect ratio if needed
                filter: 'blur(20px)',
                scale: 2,
                zIndex: -1,
              }}
        >
            <source src="/vector.mp4" type="video/mp4" />
            {/* Add fallback for browsers that don't support video */}
        </video>
    )
}