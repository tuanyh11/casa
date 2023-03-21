import React from 'react';

const CustomCart = () => {
    return (
        <div className='col-md-8 w-2/3 px-[15px]'>
            <form className="woocommerce-cart-form" action="https://casa.7uptheme.net/cart/" method="post">
                <table className="shop_table " cellSpacing="0">
                    <thead>
                        <tr>
                            <th className="product-remove">&nbsp;</th>
                            <th className="product-thumbnail">&nbsp;</th>
                            <th className="product-name">Product</th>
                            <th className="product-price">Price</th>
                            <th className="product-quantity">Quantity</th>
                            <th className="product-subtotal">Total</th>
                        </tr>
                    </thead>
                    <tbody>

                        <tr className=" cart_item">
                            <td className="product-remove">
                                <a href="#" className="remove" aria-label="Remove this item" >×</a>
                            </td>
                            <td className="product-thumbnail">
                                <a href="#">
                                    <img src="https://casa.7uptheme.net/wp-content/uploads/2019/05/product-32.jpg" />
                                </a>
                            </td>

                            <td className="product-name" >
                                <a href="#">Ceramic Classicle</a>
                            </td>

                            <td className="product-price" data-title="Price">
                                <span className=" amount">
                                    $39.00
                                </span>
                            </td>

                            <td className="product-quantity" data-title="Quantity">
                                <label className="qty-label">Qty</label>
                                <div className="detail-qty ">
                                    <a href="#" className="qty-down">
                                        <i className="fa-solid fa-minus"></i>
                                    </a>
                                    <input type="text" title="Qty" className="input-text" size="4" value={1} />
                                    <a href="#" className="qty-up">
                                        <i className="fa-solid fa-plus"></i>
                                    </a>
                                </div>
                            </td>

                            <td className="product-subtotal" data-title="Total">
                                <span className="amount">
                                    <bdi><span className="">$</span>39.00</bdi></span>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="6" className="actions">

                                <div className="coupon">
                                    <label for="coupon_code">Coupon:</label>
                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code" />
                                    <button type="submit" name="apply_coupon" value="Apply coupon">Apply coupon</button>
                                </div>

                                <button type="submit" className="button" name="update_cart" value="Update cart" >Update cart</button>
                                <input type="hidden" name="woocommerce-cart-nonce" />
                                <input type="hidden" name="_wp_http_referer" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CustomCart;