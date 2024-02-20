import Image from 'next/image'
import React from 'react'

const ChannelsCard = ({channelPic, channelName, channelAltTextPic}:any) => {
  return (
    <div className='w-[260px] h-[160px] rounded-md overflow-hidden'>
      <Image src={channelPic} alt={channelAltTextPic} title={channelName} className='cursor-pointer w-full h-full' />
    </div>
  )
}

export default ChannelsCard
