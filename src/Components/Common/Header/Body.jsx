import React, { useMemo, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useClickInsideOutside, useDebounce } from "../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../../../api";
import CardlistSmall from "../../Ui/Product/CardlistSmall";
import LoginForm from "../../Ui/Form/LoginForm";

const socialMedia = [
  {
    name: "Facebook",
    icon: "fa-brands fa-facebook-f",
    link: "https://www.facebook.com/",
  },
  {
    name: "Twitter",
    icon: "fab fa-twitter",
    link: "https://twitter.com/",
  },
  {
    name: "Google",
    icon: "fa-brands fa-google-plus-g",
    link: "https://www.google.com/",
  },
  {
    name: "Instagram",
    icon: "fa-brands fa-instagram",
    link: "https://www.instagram.com/",
  },
];

const Body = () => {
  const resultRef = useRef(null);

  const [openSearch, setOpenSearch] = useState(false);

  const [openResultSearch, setOpenResultSearch] = useState(false);

  const [text, setText] = useState(null);

  const { value: debounceValue, isDebounced } = useDebounce(text, 3000);

  const { data, isFetching } = useQuery({
    queryKey: ["search-product", debounceValue],
    queryFn: () => searchProduct(debounceValue),
    refetchOnWindowFocus: false,
    enabled: Boolean(debounceValue),
  });

  // console.log(data);

  const handleOnBlur = (e) => {
    setText(text || null);
  };

  const handleOnFocus = () => {
    setOpenResultSearch(true);
    setText(text || "");
  };

  function handleClickOutside() {
    setOpenResultSearch(false);
  }

  useClickInsideOutside(resultRef, () => {}, handleClickOutside);

  // console.log(isDebounced , isFetching);

  const listProduct = useMemo(() => {
    return data?.map((item) => {
      return <CardlistSmall key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <div>
      <div className="pt-[30px] px-[50px]">
        <div className="grid grid-cols-12">
          <div className="pt-[21px] pb-[19px] col-span-4 ">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${item.icon} text-lg leading-6 px-[13px] first:pl-0`}
              ></a>
            ))}
          </div>
          <div className="py-[10px] col-span-4 flex justify-center ">
            <div className="">
              <img
                src="https://casa.7uptheme.net/wp-content/uploads/2019/10/logo2.jpg"
                alt="logo"
                className="inline-block"
              />
              <span className=" text-black-#303030 font-bold align-middle ml-[7px] font-poppins text-[36px] uppercase">
                Casa
              </span>
            </div>
          </div>
          <div className="col-span-4 ">
            <div className="flex justify-end">
              <div className="relative text-[18px] px-4 pt-5 pb-[15px] text-black">
                <div>
                  {openSearch ? (
                    <i
                      onClick={() => setOpenSearch(false)}
                      className="fa-sharp fa-regular fa-xmark !transition transition-main hover:text-main text-[22px] cursor-pointer "
                    ></i>
                  ) : (
                    <i
                      onClick={() => setOpenSearch(true)}
                      className="fa-light transition-main !transition hover:text-main  fa-magnifying-glass cursor-pointer"
                    ></i>
                  )}
                </div>
                <div
                  className={`search-form-wrap ${
                    openSearch ? "!mt-0 !opacity-100 !visible" : ""
                  }`}
                >
                  <div className="overlay-fixed"></div>
                  <form
                    ref={resultRef}
                    className={`search-form live-search-on ${
                      openResultSearch ? "active" : ""
                    }`}
                  >
                    <input
                      value={text === null ? "Type search text here..." : text}
                      type="text"
                      onChange={(e) => setText(e.target.value)}
                      onFocus={handleOnFocus}
                      onBlur={handleOnBlur}
                      className="text-[14px] !text-black-#303030"
                    />
                    <div className="submit-form">
                      <button
                        type="button"
                        className="fa-light fa-magnifying-glass !text-xl !text-black-#303030"
                      />
                    </div>
                    <div className="list-product-search ">
                      {isDebounced || isFetching ? (
                        <div className="text-center">
                          <i className="fa-solid fa-spinner animate-spin"></i>
                        </div>
                      ) : data?.length > 0 ? (
                        listProduct
                      ) : (
                        <p className="text-center">
                          {data?.length === 0
                            ? "No any results with this keyword."
                            : "Please enter key search to display results."}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className=" text-[18px] px-4 pt-5 pb-[15px] text-black">
                <Popup
                  trigger={
                    <button>
                      {" "}
                      <i className="fa-light transition-main hover:text-main  fa-user"></i>
                    </button>
                  }
                  position="right center"
                  contentStyle={{ width: 'auto', maxWidth: '600px', height: 'auto', padding: '2rem' }}
                  overlayStyle={{
                    background: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  <LoginForm/>
                </Popup>
              </div>

              <button className=" text-[18px] px-4 pt-5 pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
                <p className=" relative">
                  <i className="fa-light transition-main hover:text-main  fa-cart-shopping"></i>
                  <span className="mini-cart-number">1</span>
                </p>
                <div className="mini-cart-content dropdown-list">
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
                      <input
                        className="get-cart-number"
                        type="hidden"
                        value="1"
                      />
                      <div className="mini-cart-total text-[16px] font-normal flex justify-between text-black-#333333">
                        <span className="pull-left font-semibold black">
                          Total
                        </span>
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
              </button>
              <button className=" text-[18px] px-4 pt-5 pb-[15px]  text-black">
                <i className="fa-regular fa-bars transition-main hover:text-main "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
