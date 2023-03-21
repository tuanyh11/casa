import React from 'react';
import PropTypes from 'prop-types';
import CustomCart from './CustomCart';
import Total from './Total';

function Content(props) {
    return (
        <div className='content-wrap w-3/4 px-[15px] '>
            <div className=' entry-content text-[#303030] m-0  '>
                <div className='cart-custom flex flex-wrap w-full'>
                    <CustomCart />
                    <Total />
                </div>
            </div>
        </div>
    );
}

export default Content;