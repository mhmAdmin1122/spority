import React from 'react'
import ImageBox from './ImageBox'
import BannerPic from '@/public/img/banner.svg'
import {FaPhotoVideo} from 'react-icons/fa'
import Link from 'next/link'

const Banner = () => {
    return (
        <div className='banner'>
            <div className="left_Side">
                <p className='innot-text'><i><FaPhotoVideo /></i><i>Channels Hub</i></p>
                <h1>Watch Your Favourite <br /><b>Channels Live</b></h1>
                <p>Spority offers free and HD streaming sports and entertainment. Watch news, sports, entertainment channels on just one platform.</p>
                <Link href={'/'}>Watch Channels</Link>
            </div>
            <div className="right_Side">
                <ImageBox sourceImg={BannerPic} picName="banner-pic"/>
            </div>
        </div>
    )
}

export default Banner
