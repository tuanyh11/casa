import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderTop(props) {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,

    }
    return (

        <div className='wrap-item-slider'>
            <div className='banner-inner'>
                <div className='banner-slider'>
                    <div className='wrap-item'>
                        <div className='item-slider'>
                            <div className='banner-thumb'>
                                <a href='#'>
                                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/06/slider61.jpg' alt='' />
                                </a>
                            </div>
                            <div className='banner-info'>
                                <div className='banner-info-container max-w-[1320px] m-auto relative w-full px-[15px]'>
                                    <div class="slider-content-text" >
                                        <h3 class="obc-title ">
                                            Making &amp; Gathering Good Design
                                        </h3>
                                        <p class="obc-desc ">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default SliderTop;