import React from 'react';

const SliderItem = () => {
    return (
        <div className='item-slide-home'>
            <div className='home-banner-thumb'>
                <a href='#'>
                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/06/slider43.jpg' alt='' />
                </a>
            </div>
            <div className='home-banner-info'>
                <div className='home-banner-container max-w-[1320px] relative m-auto px-[15px] w-full'>
                    <div className="slider-content-text" data-animated="">
                        <h3 className="obc-title text-[48px] font-bold uppercase text-[#303030]">
                            Stool 60 <br />
                            Nesting Set
                        </h3>
                        <p className="banner-home-desc">A set of three platforms, with varying legs heights, that rest and nest on the floor, as one piece of furniture.</p>
                        <div className="slider-button">
                            <a className="shop-button" href="#">
                                Learn More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;