import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';
const Product = ({ data }) => {
    // console.log(data);
    return (
        <div className='item-product'>
            <div className='product-thumb'>
                <div className='product-extra-link'>
                    <a href='#'>
                        <span>Add to cart</span>
                    </a>
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
            <div className='product-info'>
                <h3 className='product-title text-[14px] font-medium uppercase '>
                    <Link to={`/product/${data.slug}`}>{data.name}</Link>
                </h3>
                {
                    data.price ? (
                        <div className='product-price'>
                            <span className='regular-price'>
                                {data.regularPrice}
                            </span>
                            <span className='sale-price'>
                                {data.price}
                            </span>
                        </div>
                    ) : (
                        <div className='product-price'>
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