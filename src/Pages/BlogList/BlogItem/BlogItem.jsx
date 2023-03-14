import React from 'react';

const BlogItem = ({ data, index }) => {
    return (

        <div className='item-blog-list flex'>
            <div className={`col-md-8 w-2/3 float-left px-[15px] relative ${data.location === 'right' ? 'order-2 col-md-8-right' : 'order-1'}`}>
                <div className='blog-zoom-image'>
                    <a href='#'>
                        <img src={data.image} alt='' />
                    </a>
                </div>
            </div>
            <div className={`col-md-4 w-1/3 float-left px-[15px] relative ${data.location === 'left ' ? 'order-2  col-md-4-right' : 'order-1'}`}>
                <div class="blog-info">
                    <div class="author text-[#999]">
                        By: <a class="text-[#999] hover:text-[#f598a4]" href="#">admin</a>
                    </div>
                    <h3 class="text-[24px] post-title tracking-[1px] font-bold uppercase">
                        <a class="text-[#303030] hover:text-[#f598a4]" href="#">
                            {data.title}
                        </a>
                    </h3>
                    <p class="blog-desc text-[24px]">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    </p>
                    <a href="#" class="button">Read more</a>
                </div>
            </div>
        </div>
    );
};

export default BlogItem;