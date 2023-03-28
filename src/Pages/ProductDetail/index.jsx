import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct, getSaleProducts } from "../../api";
import { socialMediaIconsBlog } from "../../assets/data";
import { Breadcrumb, Product } from "../../Components";
import { useCartStore } from "../../Components/Store";
import "./style.css";

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%] right-[-25px] group-hover:right-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0 "
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-right w-10 h-10 text-[#111] text-xl z-[9999] "></button>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%]  z-[9999] left-[-25px] group-hover:left-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0"
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-left w-10 h-10 text-[#111] text-xl"></button>
    </div>
  );
}

function NextSaleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%]  right-[15px] group-hover:right-2 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0 "
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-right  w-[60px] h-[60px] text-[36px] w-10 h-10 text-[#111] text-xl z-[9999] "></button>
    </div>
  );
}

function PrevSaleArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={
        "absolute top-1/2 -translate-y-[60%]  z-[9999] left-[15px]  group-hover:left-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0"
      }
      onClick={onClick}
    >
      <button className="fas fa-chevron-left w-[60px] h-[60px] text-[36px] text-[#111] text-xl"></button>
    </div>
  );
}

const ProductDetail = () => {
  const { addToWishlistItems } = useCartStore();

  const loc = useLocation();

  const [tab, setTab] = useState(false);

  const pathname = loc.pathname.substring(1).split("/");

  const [quantity, setQuantity] = useState(1);

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  const [previewImage, setPreviewImage] = useState();

  const [{ data: productDetail }, { data: saleProducts }] = useQueries({
    queries: [
      {
        queryKey: ["product-detail", pathname[1]],
        queryFn: () => getProduct({ ...obj, slug: pathname?.[1] }),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["product-sale", pathname[1]],
        queryFn: () => getSaleProducts(),
        refetchOnWindowFocus: false,
      },
    ],
  });

  console.log(saleProducts);

  useEffect(() => {
    setPreviewImage(
      productDetail?.acf_product?.imageProduct?.[0]?.imageUrlProduct
    );
  }, [productDetail]);

  const productCate = productDetail?.productCategories?.nodes;

  const images = productDetail?.acf_product?.imageProduct;

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const productSaleSetting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 4,
    arrow: true,
    nextArrow: <NextSaleArrow />,
    prevArrow: <PrevSaleArrow />,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrow: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrow: false,
        },
      },
    ],
  };

  const handleQuantityChange = (event) => {
    const input = event.target.value;
    console.log(isNaN(input));
    if (!isNaN(input)) {
      const newQuantity = Number(input);
      setQuantity(newQuantity);
    } else {
      setQuantity(0);
    }
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const categories = productDetail?.productCategories?.nodes;
  const tags = productDetail?.productTags?.nodes;

  const handleAddtoWish = (data) => {
    addToWishlistItems(data)
  }
  return (
    <div>
      <Breadcrumb
        customPathname={
          <div>
            <Link to={"/"}>Home</Link>{" "}
            {productCate?.map((item) => (
              <Link key={item.id} to={`/shop?cate=${item?.slug}`}>
                {item.name}
              </Link>
            ))}
            <span className="">{pathname?.[1]}</span>
          </div>
        }
        label={"product"}
      />

      <div className="content-page product-detail  my-[50px] md:!my-[70px]  screen-1200:!my-[100px]">
        <div className="container">
          <div className="row mb-[100px]">
            <div className="w-full screen-991:w-6/12 px-15">
              <div>
                <div>
                  <img
                    src={previewImage}
                    alt=""
                    className="w-full block"
                    loading="lazy"
                    decoding="async"
                  />
                </div>

                <div className="mx-[-5px] mt-[10px]">
                  <Slider {...settings} className="product-detail-slider group">
                    {images?.map((item) => {
                      return (
                        <div key={item?.imageUrlProduct} className="px-[5px]">
                          <div
                            className="cursor-pointer"
                            onClick={() =>
                              setPreviewImage(item.imageUrlProduct)
                            }
                          >
                            <img
                              src={item?.imageUrlProduct}
                              loading="lazy"
                              alt=""
                              srcset=""
                              decoding="async"
                              className={`${previewImage === item.imageUrlProduct
                                ? "active"
                                : ""
                                }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className="w-full screen-991:w-6/12 px-15">
              <div className="screen-991:pl-[30px]">
                <div className="summary entry-summary detail-info !mt-10 screen-991:!mt-0 ">
                  <h2 className="title36 font-bold uppercase text-black-#303030 mb-[22px]">
                    {productDetail?.name}
                  </h2>
                  <div className="product-price price simple ">
                    <del className="text-[#ccc] mx-[5px] md:mx-[13px] font-poppins font-medium">
                      {productDetail?.regularPrice}
                    </del>
                    <ins className="mx-[5px] md:mx-[13px] text-main  ">
                      {productDetail?.price}
                    </ins>
                  </div>
                  <div className="woocommerce-product-details__short-description">
                    <div
                      className="product-desc leading-[1.75em] mb-[30px]"
                      dangerouslySetInnerHTML={{
                        __html: productDetail?.excerpt,
                      }}
                    />
                  </div>
                  <div className="stock_sku-info flex justify-between">
                    <div className="stock_status pull-left ">
                      <label className=" uppercase"> Availability: </label>
                      <span className=" uppercase text-[#3cb111] font-poppins font-medium">
                        {" "}
                        {productDetail?.stockStatus}
                      </span>
                    </div>
                    <div className="sku_wrapper pull-right">
                      <label>SKU:</label>
                      <span className="sku">{productDetail?.sku} </span>
                    </div>
                  </div>

                  <div className="cart flex items-center mb-[2em] ">
                    <label className="qty-label ">Qty</label>
                    <div className="detail-qty info-qty flex items-center  ">
                      <button
                        onClick={handleDecrement}
                        className="qty-down text-center "
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                      <input
                        type="text"
                        pattern="[0-9]*"
                        min={1}
                        inputMode="numeric"
                        value={quantity}
                        onChange={handleQuantityChange}
                        className="input-text text qty qty-val text-center"
                      />
                      <button
                        onClick={handleIncrement}
                        className="qty-down text-center"
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                    </div>

                    <button
                      type="submit"
                      name="add-to-cart"
                      value="1030"
                      className="single_add_to_cart_button button alt wp-element-button !p-[12.5px_20px] screen-991:!p-[17.5px_20px]"
                    >
                      Add to cart
                    </button>
                  </div>

                  <div className=" flex action ">
                    <button className="add_to_wishlist single_add_to_wishlist w-1/2 text-center underline capitalize transition-main"
                      onClick={() => handleAddtoWish(productDetail)}>
                      <i className="fa-light fa-heart mr-[10px]"></i>
                      <span>Add to wishlist</span>
                    </button>
                    <button className=" w-1/2 text-center underline compare relative">
                      Compare
                    </button>
                  </div>
                  <div className="clearfix"></div>
                  <div className="single_product_meta">
                    <div className="single-list-social">
                      <ul className="list-inline-block flex justify-between">
                        {socialMediaIconsBlog.map((social) => {
                          return (
                            <li className=" relative w-full" key={social.icon}>
                              <a
                                data-social="facebook"
                                title=" Facebook"
                                href={social.link}
                              >
                                <span className="share-icon facebook-social text-[#222]">
                                  <i
                                    className={social.icon}
                                    aria-hidden="true"
                                  ></i>
                                </span>
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                  <div className="product_meta item-product-meta-info">
                    <span className="posted_in">
                      <label>Category:</label>
                      <div className="meta-item-list">
                        {categories?.map((category) => (
                          <Link
                            key={category.id}
                            to={`/shop?cate=${category.slug}`}
                          >
                            {category.name}
                          </Link>
                        ))}
                      </div>
                    </span>
                    <span className="tagged_as">
                      <label>Tags:</label>
                      <div className="meta-item-list">
                        {tags?.map((tag) => (
                          <Link key={tag.id} to={`/shop?cate=${tag.slug}`}>
                            {tag.name}
                          </Link>
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="detail-tabs tab-horizontal mt-[-10px]">
              <div className="detail-tab-title font-poppins">
                <ul
                  className="list-tag-detail list-none font-medium"
                  role="tablist"
                >
                  <li className={`description_tab  ${!tab ? "active" : ""}`}>
                    <button onClick={() => setTab(false)}>Description </button>
                  </li>
                  <li className={`reviews_tab ${tab ? "active" : ""}`}>
                    <button onClick={() => setTab(true)}>Reviews (0) </button>
                  </li>
                </ul>
              </div>
              <div className="detail-tab-content">
                <div className="tab-content">
                  {!tab ? (
                    <div id="tab-description" className="tab-pane active">
                      <div className="detail-tab-desc">
                        <div className="single-product-detail">
                          <div className="row mx-[-60px] ">
                            <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-left relative">
                              <h3 className="title16 poppins-font font-medium">
                                Care Intructions
                              </h3>
                              <p className="desc">
                                Microwave and dishwasher safe. We recommend
                                using gentle, environmentally-friendly
                                detergents. Not suitable for use on an open
                                flame or electric stove top. Avoid temperature
                                shock by heating things slowly, evenly, and
                                carefully
                              </p>
                            </div>
                            <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-center relative">
                              <h3 className="title16 poppins-font font-medium">
                                PRODUCT SPECS
                              </h3>
                              <ul className="list-none">
                                <li className="mb-[6px]">
                                  <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                  Material: Ceramic
                                </li>
                                <li className="mb-[6px]">
                                  <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                  Size: 4″ dia.
                                </li>
                                <li className="mb-[6px]">
                                  <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                  Capacity: 16 oz
                                </li>
                                <li className="mb-[6px]">
                                  <i className=" font-medium mr-[10px] fa-thin fa-chevron-right"></i>{" "}
                                  Designed and handcrafted in Sausalito, CA.
                                </li>
                              </ul>
                            </div>
                            <div className="w-full mb-[40px] screen-991:mb-0 screen-991:w-4/12 px-[60px] obc-product obc-product-right relative">
                              <h3 className="title16 poppins-font font-medium">
                                DID YOU KNOW?
                              </h3>
                              <p className="desc">
                                Microwave and dishwasher safe. We recommend
                                using gentle, environmentally-friendly
                                detergents. Not suitable for use on an open
                                flame or electric stove top. Avoid temperature
                                shock by heating things slowly, evenly, and
                                carefully
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div id="tab-reviews" className="tab-pane">
                      <div className="detail-tab-desc">
                        <div id="reviews" className="woocommerce-Reviews">
                          <div className="mb-[42px]">
                            <p className="woocommerce-noreviews">
                              There are no reviews yet.
                            </p>
                          </div>

                          <div id="review_form_wrapper">
                            <div id="review_form">
                              <div id="respond" className="comment-respond">
                                <span
                                  id="reply-title"
                                  className="comment-reply-title inline-block"
                                >
                                  Be the first to review “Berlage Guest Chair”{" "}
                                  <small>
                                    <a
                                      rel="nofollow"
                                      id="cancel-comment-reply-link"
                                      href="/product/berlage-guest-chair/#respond"
                                    >
                                      Cancel reply
                                    </a>
                                  </small>
                                </span>
                                <p className="must-log-in">
                                  You must be{" "}
                                  <a href="https://casa.7uptheme.net/my-account/">
                                    logged in
                                  </a>{" "}
                                  to post a review.
                                </p>{" "}
                              </div>
                            </div>
                          </div>

                          <div className="clear"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-[90px]">
              <div className="title-related-product flex items-center justify-between">
                <h2 className="title36 font-bold text-uppercase single-title  relative mb-[60px]">
                  On Sale Now{" "}
                </h2>
                <Link
                  className="title14 color poppins-font font-medium text-capitalize pull-right mb-[60px] font-poppins text-main"
                  to={"/shop"}
                >
                  Shop Full Collection
                </Link>
              </div>
            </div>

            <div className="-mx-[15px]">
              <Slider
                {...productSaleSetting}
                className="product-detail-slider group"
              >
                {saleProducts?.map((product) => {
                  return (
                    <div key={product.id}>
                      <div className=" mx-[15px] mb-[30px]">
                        <Product data={{ ...product }} />
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
