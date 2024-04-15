import Image from 'next/image';
import { useState, useEffect } from 'react';

export function BgVideo() {

  return (
    <Image
      src='/images/eye.gif'
      draggable="false"
      alt='Bg'
      priority
      placeholder='blur'
      width={500}
      height={500}
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: `100vh`,
        objectFit: 'cover',
        zIndex: -1,
      }}
    />
  );
}
{/* <source src="/vector.mp4" type="video/mp4" /> */}
{/* Add fallback for browsers that don't support video */}