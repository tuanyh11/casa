import currency from "currency.js";
import React from "react";
import { Link } from "react-router-dom";
import { useCartStore } from "../../../Store";

const Cart = () => {
  const { items, removeItem } = useCartStore();
  // console.log(items);
  let ListCart = [];
  // console.log(items);
  let TotalCart = 0;
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',

  });
  Object.keys(items).forEach(function (item) {
    // console.log(items[item].salePrice);
    if (items[item].price !== null) {
      TotalCart += items[item].quantity * currency(items[item].price);
    }
    else {
      TotalCart += items[item].quantity * currency(items[item].regularPrice);
    }
    ListCart.push(items[item]);

  });
  return (
    <>
      <div className="mini-cart-content z-[999999999] dropdown-list !cursor-default">
        <div className="cart-header hidden">
          <h4 className="cart-heading ">Shopping Cart</h4>
          <a className="close-aside">
            <i className="la la-close"></i>
          </a>
        </div>
        <div className="mini-cart-main-content">
          <div
            className="product-mini-cart list-mini-cart-item ps ps--theme_default"
            data-ps-id="b04225f8-1f8f-0ad6-482d-53d66fbea53f"
          >
            {items.map((item, index) => {
              const imageProduct = item?.acf_product?.imageProduct?.[0].imageUrlProduct
              const nameProduct = item?.name
              const price = item?.price || item?.regularPrice
              return (
                <div
                  className="item-info-cart product-mini-cart table-custom mini_cart_item"
                  data-key="e515df0d202ae52fcebb14295743063b"
                  key={index}
                >
                  <div className="product-thumb">
                    <a
                      href="https://casa.7uptheme.net/product/chair-classicle/"
                      className="product-thumb-link"
                    >
                      <img
                        width="60"
                        height="60"
                        src={imageProduct}
                        className="attachment-60x60 size-60x60"
                        alt=""
                        decoding="async"
                        loading="lazy"
                      />{" "}
                    </a>
                  </div>
                  <div className="product-info px-[15px] text-start">
                    <h3 className=" font-medium product-title text-[#222222] font-poppins text-[14px] ">
                      <Link to={`/product/${item?.slug}`}>
                        {nameProduct}
                      </Link>
                    </h3>
                    <div className="mini-cart-qty">
                      <h4 className="text-[14px] leading-[1] font-poppins text-black-#222222">
                        <span className="qty-num">{item?.quantity}</span> x{" "}
                        <span className="  ">{price}</span>
                      </h4>
                    </div>
                    <div className="product-delete"
                      onClick={() => removeItem(item.id)}>
                      <a href="#" className="remove-product">
                        <i className="fa fa-trash"></i>
                      </a>
                    </div>
                  </div>
                </div>
              )
            })
            }

            <div className="ps__rail-x">
              <div className="ps__thumb-x" tabIndex={0}></div>
            </div>
            <div className="ps__rail-y">
              <div className="ps__thumb-y" tabIndex={0}></div>
            </div>
          </div>

          <div className="mini-cart-total-wrap">
            <input className="get-cart-number" type="hidden" value="1" />
            <div className="mini-cart-total text-[16px] font-normal flex justify-between text-black-#333333">
              <span className="pull-left font-semibold black">Total</span>
              <span className="pull-right font-semibold black mini-cart-total-price get-cart-price">
                {(formatter.format(TotalCart))}
              </span>
            </div>
            <div className="mini-cart-button font-poppins">
              <Link
                to="/cart"
                className="button px-5 w-full hover:!bg-main hover:!border-main hover:text-white !bg-transparent"
              >
                View cart
              </Link>
              <Link
                to={"/checkout"}
                className="button checkout px-5 w-full !bg-black-#222222 hover:!bg-main hover:border-main !text-white"
              >
                Checkout
              </Link>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
