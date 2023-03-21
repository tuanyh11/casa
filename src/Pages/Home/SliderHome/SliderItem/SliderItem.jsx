import React from 'react';
import { Link } from 'react-router-dom';

const SliderItem = ({ data }) => {
    // console.log(data);
    return (
        <div className='item-slide-home'>
            <div className='home-banner-thumb' style={{ backgroundImage: `url(${data.image})` }}>
                <a href='#'>
                    <img src={data.image} alt='' />
                </a>
            </div>
            <div className='home-banner-info'>
                <div className='home-banner-container max-w-[1320px] relative m-auto px-[15px] w-full'>
                    <div className="slider-content-text" data-animated="">
                        <h3 className="obc-title text-[48px] font-bold uppercase text-[#303030]"
                            dangerouslySetInnerHTML={{ __html: data.name }}>

                        </h3>
                        <p className="banner-home-desc">
                            {data.content}
                        </p>
                        <div className="slider-button">
                            <Link className="shop-button" to="/shop">
                                Learn More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SliderItem;