import React from 'react';
import PropTypes from 'prop-types';


function WorkShop(props) {
    return (
        <div className='work-shop-main mb-[120px]'>
            <div class="work-shop-banner-advs ">
                <a href="#" className='adv-thumb-link'>
                    <img src="https://casa.7uptheme.net/wp-content/uploads/2019/10//a11-960x530.jpg" alt="" />
                </a>
                <div class="banner-info ">
                    <h3 class="obc-title text-[36px] font-bold uppercase text-[#303030] tracking-[1px] mb-[18px]">WORKSHOP IN OUR<br />
                        CERAMIC STUDIO</h3>
                    <p class="work-shop-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <div class="banner-button mt-[53px]">
                        <a class="shop-button" href="#">Learn More</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WorkShop;