import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getLogoHome } from '../../../api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Logo(props) {
    const { data } = useQuery({
        queryKey: ["logo-home"],
        queryFn: () => getLogoHome()
    })
    // console.log(data);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesPerRow: 1,
        rows: 2,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1170,
                settings: {
                    slidesToShow: 4,
                    slidesPerRow: 1,
                    rows: 2,

                }
            },
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 3,
                    slidesPerRow: 1,
                    rows: 2,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesPerRow: 1,
                    rows: 2,

                }
            },
        ]

    }
    return (
        <div className='logo-main mb-[120px]'>
            <Slider {...settings}>
                {data?.map((item, index) => (

                    <div className='logo-item' key={index}>
                        <a href='#'>
                            <img src={item.image} alt='' />
                        </a>
                    </div>

                ))}
            </Slider>

        </div>
    );
}

export default Logo;