import React from 'react'
import { CgMediaLive } from 'react-icons/cg'
import ImageBox from './ImageBox'
import skyPic from '@/public/img/sky.png'

const LiveChannel = () => {
    return (
        <div className='LiveChannel'>
            <div className="LiveChannel_topHeading">
                <b><CgMediaLive /></b>
                <i>Live Channels</i>
            </div>
            <div className="LiveChannel_Cards">
                <div className="lc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="lc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>
                <div className="lc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="lc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>
                <div className="lc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="lc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LiveChannel
