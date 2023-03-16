import React from 'react';
import { Product } from '../../../Components';



function NewArrivals(props) {
    const data = [
        {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/06//product-36-630x300.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/06//product-36-630x300.jpg'
                },
            ]
        },
        {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        },
        {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        }, {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        }, {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        }, {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        }, {
            name: 'Runner red galbraith',
            regular: '$35.00',
            sale: '$35.00',
            list: [
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg'
                },
                {
                    image: 'https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg'
                },
            ]
        },

    ]

    return (
        <div className='new-arrivals relative mb-[130px]'>
            <div className='title-box'>
                <h3 class="title-block text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                    New Arrivals
                </h3>
            </div>
            <div className='product-wrap'>
                <div className='list-product-wrap'>
                    {
                        data.map((item, index) => (
                            <div className='list-col-item' key={index}>
                                <Product data={item} />
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default NewArrivals;