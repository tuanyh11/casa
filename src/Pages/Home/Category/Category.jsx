import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getCategoryHome } from '../../../api';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const Category = (props) => {
    const { data } = useQuery({
        queryKey: ["category-home"],
        queryFn: () => getCategoryHome()
    })
    // console.log(data);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,

                }
            }, {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                }
            },
        ]

    }
    return (
        <div className='category-home mb-[120px]'>
            <Slider {...settings}>
                {
                    data?.map((item, index) => (
                        <div className='category-item' key={index}>
                            <a href='#'>
                                <img src={item.image} />
                            </a>
                            <div className="category-banner-info ">
                                <h4 className="text-[24px] font-bold uppercase "
                                    dangerouslySetInnerHTML={{ __html: item.name }}>

                                </h4>
                                <h5 className="text-[14px] uppercase obc-line">{item.category}</h5>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default Category;