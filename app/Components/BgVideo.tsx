import Image from 'next/image';

export function BgVideo() {

  return (
    <Image
      src='/images/eye.gif'
      draggable="false"
      alt='Bg'
      priority
      width={500}
      height={500}
      style={{
        position: 'absolute',
        left: 0,
        width: '100%',
        height: `100vh`,
        objectFit: 'cover',
        zIndex: -1,
        objectPosition: 'center'
      }}
    />
  );
}