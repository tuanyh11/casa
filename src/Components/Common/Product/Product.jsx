import React from 'react';
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
                <a href='#' className='product-thumb-link'>
                    <img src={data.acf_product.imageProduct[0].imageUrlProduct} alt='' />
                    <img src={data.acf_product.imageProduct[1].imageUrlProduct} alt='' />
                </a>
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
                    <a href='#'>{data.name}</a>
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