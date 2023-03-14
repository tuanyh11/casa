import React from 'react';

const SliderItem = () => {
    return (
        <div class="item-testimo">
            <div class="testimo-thumb flex justify-center items-center">
                <div class="banner-advs cursor-pointer">
                    <a class="adv-thumb-link " href="#">
                        <img src="https://casa.7uptheme.net/wp-content/uploads/2019/05//avt01-100x100.jpg" alt='' />
                    </a>
                </div>
                <div class="testimo-info">
                    <h3>
                        <a href="#">Mia Mia</a>
                    </h3>
                    <div class="line-wrap">
                        <div class="line"></div>
                        <h3>Designer</h3>
                    </div>
                </div>
            </div>
            <div class=" text-center">
                <p class="testimo-desc">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
                </p>
            </div>
        </div>
    );
};

export default SliderItem;