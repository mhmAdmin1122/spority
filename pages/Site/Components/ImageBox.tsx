import React from 'react'
import Image from 'next/image'

const ImageBox = ({sourceImg, picName}:any) => {
  return (
    <Image src={sourceImg} alt={picName} className='!w-full !h-full' width={120} height={120}/>
  )
}

export default ImageBox
