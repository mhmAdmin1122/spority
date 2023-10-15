import React from 'react'
import Slider from "react-slick";
import ImageBox from './ImageBox';
import skyPic from '@/public/img/sky.png'

const EventsBanner = () => {
    const settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 3,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <div className='EventBox'>
            <h1 className='E_Name'>Events</h1>
            <div className='w-full overflow-hidden px-12 py-7 '>
                <Slider {...settings} className='!flex gap-2'>
                    <div className="lc_cradBox">
                        <div className="cardboxImage w-full">
                            <ImageBox sourceImg={skyPic} picName="live-channels" />
                        </div>
                        <div className="lc_badge">
                            <b>1 Sky SPORT</b>
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
                </Slider>
            </div>
        </div>
    )
}

export default EventsBanner
