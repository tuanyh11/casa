import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { getProducts } from '../../../api';


function Trending(props) {
    const { data } = useQuery({
        queryKey: ["product-arrivals"],
        queryFn: getProducts
    })
    console.log('data', data);
    return (
        <div>
            cac
        </div>
    );
}

export default Trending;