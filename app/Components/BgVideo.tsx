import { useState, useEffect } from 'react';

export function BgVideo() {

  return (
    <img
      src='/images/eye.gif'
      draggable="false"
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: `100vh`, // Set the height based on the calculated value
        objectFit: 'cover',
        zIndex: -1,
      }}
    >
      {/* <source src="/vector.mp4" type="video/mp4" /> */}
      {/* Add fallback for browsers that don't support video */}
    </img>
  );
}