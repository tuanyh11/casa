import React from 'react';
import './style.css';
const Product = ({ data }) => {
    return (
        <div className='item-product'>
            <div className='product-thumb'>
                <div className='product-extra-link'>
                    <a href='#'>
                        <span>Add to cart</span>
                    </a>
                </div>
                <a href='#' className='product-thumb-link'>
                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/05//product-14-360x360.jpg' alt='' />
                    <img src='https://casa.7uptheme.net/wp-content/uploads/2019/05//product-15-360x360.jpg' alt='' />
                </a>
                <div className='product-label'>
                    <span className="sale">Sale</span>
                </div>
            </div>
            <div className='product-info'>
                <h3 className='product-title text-[14px] font-medium uppercase '>
                    <a href='#'>Runner red galbraith</a>
                </h3>
                <div className='product-price'>
                    <span className='regular-price'>
                        $35.00
                    </span>
                    <span className='sale-price'>
                        $35.00
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Product;