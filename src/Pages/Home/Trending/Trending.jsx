import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getProducts, getProductsCate } from '../../../api';
import { Product } from '../../../Components';


function Trending(props) {


    const [selectCate, setSelectCate] = useState({})

    const { data: datacate } = useQuery({
        queryKey: ["product-cate"],
        queryFn: () => getProductsCate(3),
        onSuccess: (cate) => {
            setSelectCate(cate?.[0].node?.id)
        }
    })

    const { data: dataProduct } = useQuery({
        queryKey: ["products-trendings"],
        queryFn: () => getProducts(999)
    })

    const showProduct = dataProduct?.filter((product) => product.productCategories.nodes?.some(cate => cate.id === selectCate))
    console.log(showProduct);
    return (
        <div className='trending-main relative mb-[130px]'>
            <div className='title-box'>
                <h3 class="title-block text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                    Trending
                </h3>
                <div className='tab-header'>
                    <ul>
                        {
                            datacate?.map((item, index) => (
                                <li onClick={() => setSelectCate(item.node.id)}>{item.node.name}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className='tab-content'>
                    <div className='list-product'>
                        {
                            showProduct?.map((item, index) => (
                                <div className='list-col-item' key={index}>
                                    <Product data={item} />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Trending;