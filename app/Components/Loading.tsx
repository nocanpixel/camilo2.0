import Image from 'next/image'
import React from 'react'

export const Loading = () => {
  return (
    <div className='absolute w-full h-screen bg-black z-50 flex justify-center items-center left-0'>
      <div className='flex justify-center items-center flex-col'>
        <Image
          src={'/images/loading.gif'}
          width={300}
          height={300}
          alt='Loading'
          priority
        />
      </div>
    </div>
  )
}
