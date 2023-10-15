import React from 'react'
import ImageBox from './ImageBox'
import skyPic from '@/public/img/sky.png'
import Link from 'next/link'
import BreadCrumbs from './BreadCrumbs'

const LiveChannel = () => {
    return (
        <div className='LiveChannel'>
           <BreadCrumbs crumbTitle="Live Channels" crumbUrl='/' />
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
