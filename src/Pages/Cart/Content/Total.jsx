import currency from 'currency.js';
import React from 'react';
import { Link } from 'react-router-dom';

const Total = ({ data }) => {
    let ListCart = [];
    // console.log(items);
    let TotalCart = 0;
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',

    });
    Object.keys(data).forEach(function (item) {
        // console.log(items[item].salePrice);
        if (data[item].price !== null) {
            TotalCart += data[item].quantity * currency(data[item].price);
        }
        else {
            TotalCart += data[item].quantity * currency(data[item].regularPrice);
        }
        ListCart.push(data[item]);

    });
    // console.log((formatter.format(TotalCart)));
    return (
        <div className='col-md-4 w-1/3 px-[15px]'>
            <div class="cart-collaterals">
                <div class="cart_totals ">
                    <h2>Cart totals</h2>
                    <table cellspacing="0" class="shop_table shop_table_responsive">
                        <tbody>
                            <tr class="cart-subtotal">
                                <th>Subtotal</th>
                                <td data-title="Subtotal">
                                    <span>{(formatter.format(TotalCart))}</span>
                                </td>
                            </tr>
                            <tr class="order-total">
                                <th>Total</th>
                                <td data-title="Total">
                                    <strong>
                                        <span>{(formatter.format(TotalCart))}</span>
                                    </strong>
                                </td>
                            </tr>


                        </tbody></table>
                    <div class="wc-proceed-to-checkout">
                        <Link to="/checkout" class="checkout-button ">
                            Proceed to checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Total;