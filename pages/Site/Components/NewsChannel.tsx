import React from 'react'
import BreadCrumbs from './BreadCrumbs'
import skyPic from '@/public/img/sky.png'
import ImageBox from './ImageBox'

const NewsChannel = () => {
    return (
        <div className='NewsChannels'>
            <BreadCrumbs crumbTitle="News Channels" crumbUrl='/' />
            <div className="NewsChannel_Cards">

                <div className="nc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="nc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>

                <div className="nc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="nc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>

                <div className="nc_cradBox">
                    <div className="cardboxImage w-full">
                        <ImageBox sourceImg={skyPic} picName="live-channels" />
                    </div>
                    <div className="nc_badge">
                        <b>Sky SPORT</b>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default NewsChannel
