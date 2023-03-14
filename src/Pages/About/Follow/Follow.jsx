import React from 'react';



function Follow(props) {
    const data = [
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//obc-ins01-215x215.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//obc-ins02-215x215.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//obc-ins03-215x215.jpg' },
        { image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//obc-ins04-215x215.jpg' },

    ]
    return (
        <div className='follow-container max-w-[1320px] m-auto relative w-full px-[15px]'>
            <div className='follow-main flex flex-wrap w-full  mb-[120px]'>
                <div className='follow-col-4 w-1/3 items-stretch flex px-0 float-left relative '>
                    <div className='follow-inner px-[15px]'>
                        <div className='follow-wapper'>
                            <div class="about-instagram-title flex items-center  ">
                                <div class="follow-info ">
                                    <h4 class="text-[16px] font-medium uppercase mb-[34px]">
                                        follow us on instagram
                                    </h4>
                                    <h3 class="text-[30px] font-medium">
                                        <a class="smoke text-[#ccc] hover:text-[#f598a4]" href="#">@casa</a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className='follow-col-8 w-2/3 items-stretch flex px-0 float-left relative'>
                    <div className='follow-inner px-[15px]'>
                        <div class="follow-wapper">
                            <div class="about-instagram ">
                                <ul class="follow-instagram">
                                    {
                                        data.map((item, index) => (
                                            <li key={index}>
                                                <a href="https://www.instagram.com/#">
                                                    <img src={item.image} alt="Instagram image" />
                                                    <span class="instagram-text-follow">
                                                        <i className="fa-brands fa-instagram"></i>
                                                    </span>
                                                </a>
                                            </li>
                                        ))
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Follow;