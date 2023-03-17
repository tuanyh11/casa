import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Slider from 'react-slick';
import { getListBlog } from '../../../api';

function LatestNew(props) {
    const { data } = useQuery({
        queryKey: ['list-blog'],
        queryFn: () => getListBlog(8)
    })
    // console.log(data);

    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-angle-right slider_iconbanner_next"></i>
                {/* <i class="fa-solid fa-angle-left"></i> */}
            </div>
        );
    };
    const PrevArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="fa-solid fa-angle-left slider_iconbanner_prev"></i>
                {/* <i class="fa-solid fa-angle-right"></i> */}
            </div>
        );
    };
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 2000,

    }
    return (
        <div className='latest-new-main mt-[120px] mb-[90px] '>
            <div className='latest-new-inner '>
                <div className='content-info text-center'>
                    <h3 className="title-block text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                        LATEST NEWS
                    </h3>
                </div>
                <div className='latest-new-slider relative'>
                    <Slider {...settings}>
                        {
                            data?.map((item, index) => (
                                <div className='item-post-grid' key={index}>
                                    <div className='latest-new-item'>
                                        <div className='col-md-8 w-2/3'>
                                            <div class="latest-new-zoom-image">
                                                <a href="#" >
                                                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-800x440.jpg' alt='' />
                                                </a>
                                            </div>
                                        </div>
                                        <div className='col-md-4 w-1/3 float-left'>
                                            <div class="post-info">
                                                <div class="author text-[#999]">
                                                    By:
                                                    <a class="text-[#999]" href="#"> admin</a>
                                                </div>
                                                <h3 class="text-[24px] post-title tracking-[1px] font-bold uppercase">
                                                    <a class="text-[#303030]" href=" #">
                                                        {item.title}
                                                    </a>
                                                </h3>
                                                <p class="latest-new-desc text-[14px]">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
                                                <a href="#" class="shop-button">Read more</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default LatestNew;