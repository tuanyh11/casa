import React from "react";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <>
      <div className="mini-cart-content z-[999999999] dropdown-list">
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
            <div
              className="item-info-cart product-mini-cart table-custom mini_cart_item"
              data-key="e515df0d202ae52fcebb14295743063b"
            >
              <div className="product-thumb">
                <a
                  href="https://casa.7uptheme.net/product/chair-classicle/"
                  className="product-thumb-link"
                >
                  <img
                    width="60"
                    height="60"
                    src="https://casa.7uptheme.net/wp-content/uploads/2019/05//product-3-60x60.jpg"
                    className="attachment-60x60 size-60x60"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />{" "}
                </a>
              </div>
              <div className="product-info px-[15px] text-start">
                <h3 className=" font-medium product-title text-[#222222] font-poppins text-[14px] ">
                  <a href="https://casa.7uptheme.net/product/chair-classicle/">
                    Chair Classicle
                  </a>
                </h3>
                <div className="mini-cart-qty">
                  <h4 className="text-[14px] leading-[1] font-poppins text-black-#222222">
                    <span className="qty-num">1</span> x{" "}
                    <span className="  ">$33.00</span>
                  </h4>
                </div>
                <div className="product-delete">
                  <a href="#" className="remove-product">
                    <i className="fa fa-trash"></i>
                  </a>
                </div>
              </div>
            </div>
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
                $33.00
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
