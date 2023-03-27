import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { generateStart } from '../../../utils';
import { useCartStore } from '../../Store';
import './style.css';
const Product = ({ data, rating = false }) => {
    // console.log(data);
    const [loading, setLoading] = useState()
    const { addItem, items } = useCartStore();
    const handleAddToCart = () => {
        setLoading(false);
        setTimeout(() => {
            setLoading(true)
            addItem(data)
        }, 3000)
    }
    // console.log(items);
    return (
        <div className='item-product'>
            <div className='product-thumb'>
                <div className='product-extra-link'>
                    <div className={`btn-add-cart ${loading === false ? 'loading' : ''}`}
                        onClick={handleAddToCart}>
                        <div className='loading-product'></div>
                        <span >Add to cart</span>
                        {/* <span className={`${loading===true ?'':''}`}>Add </span> */}

                    </div>
                </div>
                <Link to={`/product/${data.slug}`} className='product-thumb-link'>
                    <img src={data.acf_product?.imageProduct?.[0].imageUrlProduct} alt='' />
                    <img src={data.acf_product?.imageProduct?.[1].imageUrlProduct} alt='' />
                </Link>

               
                {
                    data.price ? (
                        <div className='product-label'>
                            <span className="sale">Sale</span>
                        </div>
                    ) : (
                        null
                    )
                }

            </div>
            <div className='product-info '>
                <h3 className='product-title text-[14px] font-medium uppercase '>
                    <Link to={`/product/${data.slug}`}>{data.name}</Link>
                </h3>
                {rating && <div className="my-2">
                    {generateStart(data.averageRating)}
                </div>}
                {
                    data.price ? (
                        <div className='product-price !mb-[7px]'>
                            <span className='regular-price'>
                                {data.regularPrice}
                            </span>
                            <span className='sale-price'>
                                {data.price}
                            </span>
                        </div>
                    ) : (
                        <div className='product-price !mb-[7px]'>
                            <span className='sale-price'>
                                {data.regularPrice}
                            </span>
                        </div>
                    )
                }

            </div>
        </div>
    );
};

export default Product;