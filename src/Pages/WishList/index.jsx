import React from 'react';
import Breadcrumb from '../../Components/Common/Breadcrumb/Breadcrumb';
import './style.css';


function WishList(props) {
    return (
        <>
            <Breadcrumb label={'wishlist'} />
            <div className='wish-content'>

            </div>
        </>
    );
}

export default WishList;