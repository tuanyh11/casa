import React, { useMemo, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useClickInsideOutside, useDebounce } from "../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../../../api";
import CardlistSmall from "../../Ui/Product/CardlistSmall";
import LoginForm from "../../Ui/Form/LoginForm";
import { useTransition, animated } from "react-spring";

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

const instagramImg = [
  {
    image:
      "https://casa.7uptheme.net/wp-content/uploads/2019/05//Untitled-1-175x175.jpg",
    link: "https://www.instagram.com/",
  },
  {
    image:
      "https://casa.7uptheme.net/wp-content/uploads/2019/05//Untitled-3-175x175.jpg",
    link: "https://www.instagram.com/",
  },
  {
    image:
      "https://casa.7uptheme.net/wp-content/uploads/2019/05//Untitled-4-175x175.jpg",
    link: "https://www.instagram.com/",
  },
  {
    image:
      "https://casa.7uptheme.net/wp-content/uploads/2019/05//Untitled-2-175x175.jpg",
    link: "https://www.instagram.com/",
  },
];

const Body = () => {
  const resultRef = useRef(null);

  const [openSearch, setOpenSearch] = useState(false);

  const [openResultSearch, setOpenResultSearch] = useState(false);

  const [text, setText] = useState(null);

  const [openSidebar, setOpenSidebar] = useState(false);

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

  const transition = useTransition(openSidebar, {
                         
    from: { opacity: 0, transform: "translate(100%)"},
    enter: { opacity: 1, transform: "translate(0)" },
    leave: { opacity: 1, x: 580 },
  });

  const listProduct = useMemo(() => {
    return data?.map((item) => {
      return <CardlistSmall key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <div>
      <div className="px-[15px] screen-1200:pt-[30px] screen-1200:px-[50px]">
        <div className="grid grid-cols-12 items-center">
          <div className="pt-[21px] pb-[19px] col-span-4 hidden screen-567:block">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${item.icon} text-lg leading-6 px-2 screen-1200:px-[13px] first:pl-0 `}
              ></a>
            ))}
          </div>
          <div className="py-[10px] col-span-6 screen-567:col-span-4 flex justify-center ">
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
          <div className=" col-span-6 screen-567:col-span-4 ">
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
              <div className=" text-[18px] px-4 pt-5 pb-[15px] text-black ">
                <Popup
                  trigger={
                    <button>
                      {" "}
                      <i className="fa-light transition-main hover:text-main  fa-user"></i>
                    </button>
                  }
                  position="center center"
                  contentStyle={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    top: 50,
                    // position: "relative",
                  }}
                  arrow={false}
                  overlayStyle={{
                    background: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {(close) => <LoginForm onClose={close} />}
                </Popup>
              </div>

              <button className=" text-[18px] px-4 pt-5 pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
                <p className=" relative  ">
                  <i className="fa-light transition-main hover:text-main  fa-cart-shopping"></i>
                  <span className="mini-cart-number screen-567:block hidden">1</span>
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
              <div className=" text-[18px] px-4 pt-5 pb-[15px]  text-black">
                <button
                  onClick={() => setOpenSidebar(!openSidebar)}
                  className="fa-regular fa-bars transition-main hover:text-main cursor-pointer"
                ></button>

                {/* sidebar header */}
                {transition((style, item) =>
                  item ? (
                    <animated.div>
                      <animated.div
                        style={{ ...style.opacity, transitionDuration: "0.6s" }}
                        className=" absolute inset-0 z-[999999] bg-[rgba(0,0,0,0.3)] "
                      ></animated.div>

                      <animated.div
                        style={{
                          ...style,
                          transitionTimingFunction:
                            "cubic-bezier(0.77, 0, 0.175, 1)",
                          transitionDuration: "0.4s"
                        }}
                        className={`aside-box-content z-[999999999999] `}
                      >
                        <button
                          onClick={() => setOpenSidebar(false)}
                          className="close-login-form transition-main  font-light text-black-#303030 w-[30px] h-[30px] transition-main hover:text-main "
                        >
                          ×
                        </button>
                        <div className="-mx-[17px]">
                          <div className="mb-[54px]">
                            <div className="mt-[74px] text-[14px] text-black-#303030 mb-[18px]">
                              Lorem ipsum dolor sit amet, consectetur
                              adipisicing elit, sed do eiusmod tempor incididunt
                              ut labore et dolore magna aliqua.
                            </div>

                            <div className="">
                              <div className="mb-[2px] text-[14px] text-black-#303030">
                                <i className="mr-[10px] fa-light fa-phone text-main"></i>
                                +1123456789
                              </div>

                              <div className="mb-[2px] text-[14px] text-black-#303030">
                                <i className="mr-[10px] fa-light fa-location-dot text-main"></i>
                                433-447 San Pedro St, Los Angeles, CA 90013
                              </div>

                              <div className="mb-[2px] text-[14px] text-black-#303030">
                                <i className="mr-[10px] fa-light fa-envelope text-main"></i>
                                Support@obachan.com
                              </div>
                            </div>
                          </div>

                          <div className="mb-[54px]">
                            <div className="mb-[27px]">
                              <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                                NEWSLETTER
                              </h3>
                            </div>

                            <form className="mt-5 mb-[15px] relative">
                              <input
                                required
                                placeholder="Email"
                                className=" placeholder-white  block h-[46px] leading-[46px] text-white px-5 border-none  bg-main  outline-none text-[14px] w-full font-poppins"
                              />
                              <button
                                type="submit"
                                className="fa-regular fa-arrow-right w-[46px] px-[6px] absolute top-0 right-0 bottom-0 leading-[46px] text-center text-white cursor-pointer"
                              ></button>
                            </form>
                          </div>

                          <div className="mb-[54px]">
                            <div className="mb-[27px]">
                              <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                                FOLLOW US
                              </h3>
                            </div>

                            <div className="mt-5 mb-[15px] relative">
                              {socialMedia.map((item, index) => (
                                <a
                                  key={index}
                                  href={item.link}
                                  className={`${item.icon} text-lg leading-6 px-[13px] first:pl-0`}
                                ></a>
                              ))}
                            </div>
                          </div>

                          <div className="mb-[54px]">
                            <div className="mb-[27px]">
                              <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                                INSTAGRAM
                              </h3>
                            </div>

                            <ul className="mt-5 mb-[15px] flex flex-wrap relative">
                              {instagramImg.map((item, index) => (
                                <li key={index} className="w-1/2">
                                  <a
                                    className=" relative overflow-hidden group"
                                    href={item.link}
                                  >
                                    <img
                                      src={item.image}
                                      alt=""
                                      className="w-full object-cover"
                                    />
                                    <div className=" absolute z-[999] inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:scale-100 opacity-0 transition-all duration-[0.4s] text-white bg-[rgba(0,0,0,0.4)] scale-[0.8] ">
                                      <i className="fa-brands fa-instagram text-[44px] mx-[5px]"></i>
                                    </div>
                                  </a>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </animated.div>
                    </animated.div>
                  ) : null
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
