import currency from 'currency.js';
import React, { useState } from 'react';
import { useCartStore } from '../../../Components/Store';

const CustomCart = ({ data }) => {
    const { upadateItemWithQuantity, removeItem } = useCartStore();
    const [isUpdated, setIsUpdated] = useState(false);
    const [cart, setCart] = useState([]);

    const [itemSale, setItemSale] = useState("");
    const [sale, setSale] = useState();


    const inCreaseQty = (id) => {
        const newCart = data.map((item) => {
            if (item.id === id && item.quantity) {
                setIsUpdated(true);
                return {
                    ...item,
                    quantity: item.quantity++,
                };
            }
            return item;
        });
        setCart([...newCart]);
    };

    const deCreaseQty = (id) => {
        const newCart = data.map((item) => {
            if (item.id === id && item.quantity && item.quantity > 1) {
                setIsUpdated(true);
                return {
                    ...item,
                    quantity: item.quantity--,
                };
            }
            return item;
        });
        setCart([...newCart]);
    };

    const handleChangeQty = (e, id) => {
        if (/^[0-9]*$/.test(e?.target.value)) {
            setIsUpdated(true);
            cart.some((item) => {
                if (item.id === id) {
                    item.quantity = e?.target.value;
                    return true;
                }
            });
            setCart([...cart]);
        }
    };

    const handleUpdate = () => {
        setIsUpdated(false)
        cart.map((item) => {
            upadateItemWithQuantity(item);
            // console.log(item);
        });
    };
    const handleSale = () => {
        itemSale && (
            setSale(50)
        );
    };
    // console.log(sale);
    return (
        <div className='col-md-8 w-2/3 px-[15px]'>
            <form className="woocommerce-cart-form" method="post">
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
                        {
                            data.map((item, index) => {
                                const imageProduct = item?.acf_product?.imageProduct?.[0].imageUrlProduct
                                const nameProduct = item?.name
                                const price = item?.price || item?.regularPrice
                                const priceNumber = currency(price);

                                const formatter = new Intl.NumberFormat('en-US', {
                                    style: 'currency',
                                    currency: 'USD',

                                });
                                const subTotal = formatter.format(priceNumber * item?.quantity);
                                {/* console.log(subTotal) */ }
                                return (
                                    <tr className=" cart_item">
                                        <td className="product-remove">
                                            <div className="remove"
                                                aria-label="Remove this item"
                                                onClick={() => removeItem(item.id)}
                                            >×</div>
                                        </td>
                                        <td className="product-thumbnail">
                                            <a href="#">
                                                <img src={imageProduct} alt='' />
                                            </a>
                                        </td>

                                        <td className="product-name" data-title="Product" >
                                            <a href="#">{nameProduct}</a>
                                        </td>

                                        <td className="product-price" data-title="Price">
                                            <span className=" amount">
                                                {price}
                                            </span>
                                        </td>

                                        <td className="product-quantity" data-title="Quantity">
                                            <label className="qty-label">Qty</label>
                                            <div className="detail-qty ">
                                                <div className="qty-down"
                                                    onClick={() => deCreaseQty(item.id)}
                                                >
                                                    <i className="fa-solid fa-minus"></i>
                                                </div>
                                                <input type="text" title="Qty"
                                                    className="input-text"
                                                    size="4"
                                                    value={item?.quantity}
                                                    onChange={(e) => handleChangeQty(e, item.id)}
                                                />
                                                <div className="qty-up"
                                                    onClick={() => inCreaseQty(item.id)}
                                                >
                                                    <i className="fa-solid fa-plus"></i>
                                                </div>
                                            </div>
                                        </td>

                                        <td className="product-subtotal" data-title="Total">
                                            <span className="amount">
                                                {subTotal}
                                            </span>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                        <tr>
                            <td colSpan="6" className="actions">

                                <div className="coupon">
                                    <label for="coupon_code">Coupon:</label>
                                    <input type="text" name="coupon_code" className="input-text" id="coupon_code" placeholder="Coupon code"
                                        onChange={(e) => setItemSale(e.target.value)}
                                    />
                                    <div type="submit" name="apply_coupon" value="Apply coupon" className='apply_coupon'
                                        onClick={handleSale}>Apply coupon</div>
                                </div>

                                <div className={`button ${isUpdated === true ? 'update-cart' : ''}`} name="update_cart" value="Update cart"
                                    disabled={!isUpdated}
                                    onClick={() => handleUpdate()}
                                >Update cart
                                </div>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </div>
    );
};

export default CustomCart;