import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct } from "../../api";
import { Breadcrumb } from "../../Components";
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

const ProductDetail = () => {
  const loc = useLocation();

  const pathname = loc.pathname.substring(1).split("/");

  console.log(pathname?.[1]);

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  const [previewImage, setPreviewImage] = useState();

  const { data } = useQuery({
    queryKey: ["product-detail", pathname[1]],
    queryFn: () => getProduct({ ...obj, slug: pathname?.[1] }),
    refetchOnWindowFocus: false,
  });

  console.log(data);

  useEffect(() => {
    setPreviewImage(data?.acf_product?.imageProduct?.[0]?.imageUrlProduct);
  }, [data]);

  const productCate = data?.productCategories?.nodes;

  const images = data?.acf_product?.imageProduct;

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrow: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };


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

      <div className="content-page">
        <div className="container">
          <div className="row">
            <div className=" screen-991:w-6/12 px-15">
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
                            />
                          </div>
                        </div>
                      );
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className=" screen-991:w-6/12 px-15">
              <div className="">
                <div class="summary entry-summary detail-info">
                  <h2 class="title36 font-bold uppercase color-title">
                    {data?.name}
                  </h2>
                  <p class="price"></p>
                  <div class="product-price price simple">
                    <span class="woocommerce-Price-amount amount">
                      {data}
                    </span>
                  </div>
                  <p></p>
                  <div class="woocommerce-product-details__short-description">
                    <div class="product-desc">
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Quis ipsum suspendisse ultrices gravida.
                        Risus commodo viverra maecenas accumsan lacus vel
                        facilisis.
                      </p>
                    </div>
                  </div>
                  <div class="stock_sku-info">
                    <div class="stock_status pull-left">
                      <label> Availability: </label>
                      <span class="instock"> In stock</span>
                    </div>
                    <div class="sku_wrapper pull-right">
                      <label>SKU:</label>
                      <span class="sku">No-5635-97 </span>
                    </div>
                  </div>
                  <div class="clearfix"></div>

                  <form
                    class="cart"
                    action="https://casa.7uptheme.net/product/chair-classicle/"
                    method="post"
                    enctype="multipart/form-data"
                  >
                    <label class="qty-label">Qty</label>
                    <div class="detail-qty info-qty d-flex align-items-center">
                      <a href="#" class="qty-down">
                        <i class="la la-minus" aria-hidden="true"></i>
                      </a>
                      <input
                        type="text"
                        step="1"
                        min="1"
                        max=""
                        name="quantity"
                        value="1"
                        title="Qty"
                        class="input-text text qty qty-val"
                        size="4"
                      />
                      <a href="#" class="qty-up">
                        <i class="la la-plus" aria-hidden="true"></i>
                      </a>
                    </div>

                    <button
                      type="submit"
                      name="add-to-cart"
                      value="1030"
                      class="single_add_to_cart_button button alt wp-element-button"
                    >
                      Add to cart
                    </button>
                  </form>

                  <div
                    class="yith-wcwl-add-to-wishlist add-to-wishlist-1030  wishlist-fragment on-first-load"
                    data-fragment-ref="1030"
                    data-fragment-options='{"base_url":"","in_default_wishlist":false,"is_single":true,"show_exists":false,"product_id":1030,"parent_product_id":1030,"product_type":"simple","show_view":true,"browse_wishlist_text":"Browse wishlist","already_in_wishslist_text":"The product is already in your wishlist!","product_added_text":"Product added!","heading_icon":"fa-heart-o","available_multi_wishlist":false,"disable_wishlist":false,"show_count":false,"ajax_loading":false,"loop_position":"after_add_to_cart","item":"add_to_wishlist"}'
                  >
                    <div class="yith-wcwl-add-button">
                      <a
                        href="?add_to_wishlist=1030&amp;_wpnonce=d4f7692b67"
                        class="add_to_wishlist single_add_to_wishlist"
                        data-product-id="1030"
                        data-product-type="simple"
                        data-original-product-id="1030"
                        data-title="Add to wishlist"
                        rel="nofollow"
                      >
                        <i class="yith-wcwl-icon fa fa-heart-o"></i>{" "}
                        <span>Add to wishlist</span>
                      </a>
                    </div>
                  </div>
                  <a
                    href="https://casa.7uptheme.net?action=yith-woocompare-add-product&amp;id=1030"
                    class="compare button"
                    data-product_id="1030"
                    rel="nofollow"
                  >
                    Compare
                  </a>
                  <div class="clearfix"></div>
                  <div class="single_product_meta">
                    <div class="single-list-social" data-id="1030">
                      <ul class="list-inline-block">
                        <li>
                          <a
                            data-social="facebook"
                            title=" Facebook"
                            href="http://www.facebook.com/sharer.php?u=https://casa.7uptheme.net/product/chair-classicle/"
                          >
                            <span class="share-icon facebook-social">
                              <i class="fa fa-facebook" aria-hidden="true"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-social="twitter"
                            title=" Twitter"
                            href="http://www.twitter.com/share?url=https://casa.7uptheme.net/product/chair-classicle/"
                          >
                            <span class="share-icon twitter-social">
                              <i class="fa fa-twitter" aria-hidden="true"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-social="google"
                            title=" Google plus"
                            href="https://plus.google.com/share?url=https://casa.7uptheme.net/product/chair-classicle/"
                          >
                            <span class="share-icon google-social">
                              <i
                                class="fa fa-google-plus"
                                aria-hidden="true"
                              ></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-social="pinterest"
                            title=" Pinterest"
                            href="#"
                          >
                            <span class="share-icon pinterest-social">
                              <i class="fa fa-pinterest" aria-hidden="true"></i>
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            data-social="envelope"
                            title=" Mail"
                            href="mailto:?subject=I wanted you to see this site&amp;body=Check out this site https://casa.7uptheme.net/product/chair-classicle/"
                          >
                            <span class="share-icon envelope-social">
                              <i class="fa fa-envelope" aria-hidden="true"></i>
                            </span>
                          </a>
                        </li>{" "}
                      </ul>
                    </div>
                  </div>
                  <div class="product_meta item-product-meta-info">
                    <span class="posted_in">
                      <label>Category:</label>
                      <div class="meta-item-list">
                        <a
                          href="https://casa.7uptheme.net/product-category/dinnerware-sets/"
                          rel="tag"
                        >
                          Dinnerware Sets
                        </a>
                      </div>
                    </span>
                    <span class="tagged_as">
                      <label>Tags:</label>
                      <div class="meta-item-list">
                        <a
                          href="https://casa.7uptheme.net/product-tag/elegant/"
                          rel="tag"
                        >
                          Elegant
                        </a>{" "}
                        <a
                          href="https://casa.7uptheme.net/product-tag/modern/"
                          rel="tag"
                        >
                          Modern
                        </a>{" "}
                        <a
                          href="https://casa.7uptheme.net/product-tag/style/"
                          rel="tag"
                        >
                          Style
                        </a>
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
