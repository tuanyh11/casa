import React from 'react';
import SliderItem from './SliderItem/SliderItem';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SliderTestimo(props) {
    const NextArrow = (props) => {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: 'block' }}
                onClick={onClick}
            >
                <i className="las la-angle-right slider_iconbanner_next"></i>
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
                <i className="las la-angle-left slider_iconbanner_prev"></i>
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
        autoplay: true,
        autoplaySpeed: 2000,

    }
    return (
        <div className='slider-main'>
            <div className='slider-inner'>
                <div className='slider-wrap-item'>
                    <Slider {...settings}>
                        {
                            [...new Array(2)].map((item, index) => (
                                <SliderItem key={index} />
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </div>
    );
}

export default SliderTestimo;