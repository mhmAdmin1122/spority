import React from 'react'
import Slider from "react-slick";

const HeroSlick = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        cssEase: "linear",
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    dots: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    };
    return (
        <div className='w-full overflow-hidden'>
            <Slider {...settings}>
                <div className='hero_Content_bOX'>
                    <h3>1</h3>
                </div>
                <div className='hero_Content_bOX'>
                    <h3>2</h3>
                </div>
                <div className='hero_Content_bOX'>
                    <h3>3</h3>
                </div>
                <div className='hero_Content_bOX'>
                    <h3>4</h3>
                </div>
                <div className='hero_Content_bOX'>
                    <h3>5</h3>
                </div>
                <div className='hero_Content_bOX'>
                    <h3>6</h3>
                </div>
            </Slider>
        </div>
    )
}

export default HeroSlick
