import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Slider from 'react-slick';
import { getBannerHome } from '../../../api';
import SliderItem from './SliderItem/SliderItem';


function SliderHome(props) {
    const [currentSlide, setCurrentSlide] = useState(1);
    const { data } = useQuery({
        queryKey: ['banner-home'],
        queryFn: () => getBannerHome()
    })
    // console.log(data);
    const settings = {
        dots: true,
        autoplay: true,
        autoplaySpeed: 50000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        speed: 500,
        arrows: false,
        adaptiveHeight: true,

        appendDots: (dots) => (
            <div className='list-dots'>
                <div className='slider-home-container max-w-[1320px] relative w-full px-[15px] m-auto'>
                    <div className='number-slider'>
                        <div className='current-total-items '>
                            0{currentSlide}
                        </div>
                        <ul>{dots}</ul>
                        <div className='total-items'>
                            03
                        </div>
                    </div>

                </div>

            </div>

        ),
        beforeChange: (oldIndex, newIndex) => {
            setCurrentSlide(newIndex + 1);
        },
        afterChange: (index) => {
            setCurrentSlide(index + 1);
        },
    };
    return (
        <div className='slider-home-main mb-[120px] relative'>

            <Slider {...settings}>
                {
                    data?.map((item, index) => (
                        <SliderItem key={index} data={item} />
                    ))
                }
            </Slider>

        </div>
    );
}

export default SliderHome;