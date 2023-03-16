import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect } from 'react';
import { getProducts } from '../../../api';
import { Product } from '../../../Components';



function NewArrivals(props) {
    const { data } = useQuery({
        queryKey: ["product-arrivals"],
        queryFn: getProducts
    })



    console.log(data)


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
                        [...new Array(7)].map((item, index) => (
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