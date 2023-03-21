import React from 'react';
import Breadcrumb from '../../Components/Common/Breadcrumb/Breadcrumb';
import Content from './Content/Content';
import './style.css';

function Cart(props) {
    return (
        <>
            <Breadcrumb label={'Cart'} />
            <div className='cart-content my-[100px]'>
                <div className='container'>
                    <div className='cart-wrapper mx-[-15px] w-full flex flex-wrap'>
                        <div className='cart-slidebar w-1/4 px-[15px]'>
                            cac
                        </div>
                        <Content />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Cart;