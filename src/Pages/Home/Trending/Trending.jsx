import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../../api';


function Trending(props) {
    const { data } = useQuery({
        queryKey: ["product-arrivals"],
        queryFn: getProducts
    })
    // console.log('data', data);
    return (
        <div className='trending-main relative mb-[130px]'>
            <div className='title-box'>
                <h3 class="title-block text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                    Trending
                </h3>
                <div className='tab-header'>

                </div>
                <div className='tab-conten'>

                </div>
            </div>
        </div>
    );
}

export default Trending;