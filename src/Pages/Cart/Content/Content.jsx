import React from 'react';
import { Link } from 'react-router-dom';
import { useCartStore } from '../../../Components/Store';
import CustomCart from './CustomCart';
import Total from './Total';

function Content(props) {
    const { items } = useCartStore();
    // console.log(items);
    return (
        <div className='content-wrap w-3/4 px-[15px] '>
            {
                items.length > 0 ? (
                    <div className=' entry-content text-[#303030] m-0  '>
                        <div className='cart-custom flex flex-wrap w-full'>
                            <CustomCart data={items} />
                            <Total data={items} />
                        </div>
                    </div>
                ) : (
                    <div className='content-empty'>
                        <p className='cart-empty'>Your cart is currently empty.</p>
                        <p class="return-to-shop">
                            <Link to="/shop">
                                Return to shop
                            </Link>
                        </p>
                    </div>
                )
            }

        </div>
    );
}

export default Content;