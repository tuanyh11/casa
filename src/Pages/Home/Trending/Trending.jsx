import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
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
        queryFn: () => getProducts()
    })


    const showProduct = dataProduct?.filter((product) => product.productCategories.nodes?.some(cate => cate.id === selectCate))
    // console.log(showProduct);

    // console.log(showProduct);

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        // slidesToShow: 4,
        slidesPerRow: 4,
        rows: 2,
        slidesToScroll: 0,
        arrows: false,
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesPerRow: 3,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesPerRow: 2,
                    slidesToScroll: 1,

                }
            },
        ]

    }
    return (
        <div className='trending-main relative mb-[130px]'>
            <div className='title-box text-center'>
                <h3 class="title-block text-[36px] font-bold text-[#303030] tracking-[1px] uppercase">
                    Trending
                </h3>
            </div>
            <div className='tab-header'>
                <ul>
                    {
                        datacate?.map((item, index) => (
                            <li
                                className={`${selectCate === item.node.id ? 'active' : ''}`}
                                onClick={() => setSelectCate(item.node.id)}
                                key={index}
                            >
                                <span>
                                    {item.node.name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className='tab-content'>
                <div className='list-product'>
                    <Slider {...settings}>
                        {
                            showProduct?.map((item, index) => (
                                <div className='list-col-item mb-[30px]' key={index}>
                                    <Product data={item} />
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </div>
    );
}

export default Trending;