import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useQuery } from '@tanstack/react-query';
import { getOurTeamHome } from '../../../api';
function OurTeam(props) {
    const { data } = useQuery({
        queryKey: ["our-team-home"],
        queryFn: () => getOurTeamHome()
    })
    // console.log(data);
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 0,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,

    }
    return (
        <div className='our-team-main'>
            <div className='our-team-main-container max-w-[1320px] w-full px-0 relative m-auto'>
                <div className='our-team-inner'>
                    <div className='our-team-wrapper'>
                        <div className='content-info'>
                            <h3 className="title-block text-[36px] font-bold text-[#fff] tracking-[1px] uppercase">OUR DESIGN TEAM</h3>
                            <p className="desc-block text-[#fff]">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                            </p>
                        </div>
                        <div className='banner-slider'>
                            <Slider {...settings}>
                                {
                                    data?.map((item, index) => (
                                        <div className='item-about-team text-center' key={index}>
                                            <div className='about-team-thumb '>
                                                <a href='#' className='adv-thumb'>
                                                    <img src={item.image} alt='' />
                                                </a>

                                                <div className="about-team-info">
                                                    <h3 className="text-[18px] font-semibold uppercase">
                                                        <a href="#" className="color-title">{item.name}</a>
                                                    </h3>
                                                    <p className="text-[14px]">{item.location}</p>
                                                    <div className="share-social-team">
                                                        <a className="text-[#999] text-[18px]" href="#">
                                                            <i className="fa-brands fa-facebook-f"></i>
                                                        </a>
                                                        <a className="text-[#999] text-[18px]" href="#">
                                                            <i className="fa-brands fa-twitter"></i>
                                                        </a>
                                                        <a className="text-[#999] text-[18px]" href="#">
                                                            <i className="fa-brands fa-google-plus-g"></i>
                                                        </a>
                                                        <a className="text-[#999] text-[18px]" href="#">
                                                            <i className="fa-brands fa-instagram"></i>
                                                        </a>
                                                        <a className="text-[#999] text-[18px]" href="#">
                                                            <i className="fa-brands fa-vimeo-v"></i>
                                                        </a>
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
            </div>
        </div>
    );
}

export default OurTeam;