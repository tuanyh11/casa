import currency from 'currency.js'
import React from 'react'

const OrderInfo = ({ data = [], totalCart }) => {

    let total = []
    return (
        <div>
            <div className="order-custom mt-[30px] md:mt-0">
                <h3 id="order_review_heading">Your order</h3>

                <div
                    id="order_review"
                    className="woocommerce-checkout-review-order"
                >
                    <div className="order-table-wrap">
                        <table className="shop_table woocommerce-checkout-review-order-table">
                            <thead>
                                <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Subtotal</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map(item => {
                                    total.push((currency(item?.price || item?.regularPrice).intValue * item.quantity) / 100)
                                    return (
                                        <tr key={item.id} className="cart_item">
                                            <td className="product-name font-poppins">
                                                {item.name}&nbsp;{" "}
                                                <strong className="product-quantity font-normal">
                                                    ×&nbsp;{item.quantity}
                                                </strong>{" "}
                                            </td>
                                            <td className="product-total">
                                                <span className="woocommerce-Price-amount amount">
                                                    <bdi>
                                                        {currency((item?.quantity) * (currency(item?.price || item?.regularPrice).intValue / 100), {symbol: '$'}).format()}
                                                    </bdi>
                                                </span>{" "}
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                            <tfoot>
                                <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                        <span className="woocommerce-Price-amount amount">
                                            <bdi>
                                               {currency(total.reduce((pre, cur) => pre + cur, 0)).format()}
                                            </bdi>
                                        </span>
                                    </td>
                                </tr>

                                <tr className="order-total">
                                    <th>Total</th>
                                    <td>
                                        <span>
                                            <span className="woocommerce-Price-amount amount">
                                                <bdi>
                                                    {currency(total.reduce((pre, cur) => pre + cur, 0)).format()}
                                                </bdi>
                                            </span>
                                        </span>{" "}
                                    </td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                    <div
                        id="payment"
                        className="woocommerce-checkout-payment"
                    >
                        <ul className="wc_payment_methods payment_methods methods  ">
                            <li className="woocommerce-notice woocommerce-notice--info woocommerce-info leading-[2] relative !mb-0">
                                <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute  top-10 -translate-y-1/2 left-7"></i>
                                Sorry, it seems that there are no available
                                payment methods for your state. Please contact
                                us if you require assistance or wish to make
                                alternate arrangements.
                            </li>{" "}
                        </ul>
                        <div className="form-row place-order mb-[15px]">
                            <div className="woocommerce-terms-and-conditions-wrapper">
                                <div className="woocommerce-privacy-policy-text">
                                    <p className="mb-[25px] leading-[1.75em]">
                                        Your personal data will be used to process
                                        your order, support your experience
                                        throughout this website, and for other
                                        purposes described in our{" "}
                                        <a
                                            href="https://casa.7uptheme.net/?page_id=3"
                                            className="woocommerce-privacy-policy-link"
                                            target="_blank"
                                        >
                                            privacy policy
                                        </a>
                                        .
                                    </p>
                                </div>
                            </div>
                            <button
                                type="submit"
                                className="button alt wp-element-button w-full block !mb-0 md:!mt-5"
                                name="woocommerce_checkout_place_order"
                                id="place_order"
                                value="Place order"
                                data-value="Place order"
                            >
                                Place order
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OrderInfo