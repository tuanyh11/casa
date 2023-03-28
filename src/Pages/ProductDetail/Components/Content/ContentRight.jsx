import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";
import { socialMediaIconsBlog } from "../../../../assets/data";
import { Product } from "../../../../Components";
import { useCompareStore } from "../../../../Components/Store";
import { useWindowScroll } from "../../../../hooks";

const CustomButton = React.forwardRef(
  ({ open, onAddToCompare, isAdded, ...props }, ref) => {
    console.log(onAddToCompare);
    return (
      <div ref={ref} {...props}>
        <button
          onClick={() => onAddToCompare()}
          className="text-center underline compare relative block w-full "
        >
          {" "}
          {isAdded ? 'Added': 'Compare'}
          <i className="lni lni-checkmark ml-[0.53em] relative  font-black underline"></i>
        </button>
      </div>
    );
  }
);

const ContentRight = ({ data, onAddToCart }) => {
  const categories = data?.productCategories?.nodes;
  const tags = data?.productTags?.nodes;
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
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

  const { add, items, remove } = useCompareStore();

  const {scrollToTop} = useWindowScroll()

  const isAddedToCompareStore = items.find(item => item.id === data?.id)

  const handleAddToCart = () => {
    scrollToTop()
    onAddToCart()
  }

  return (
    <div>
      <div className="screen-991:pl-[30px]">
        <div className="summary entry-summary detail-info !mt-10 screen-991:!mt-0 ">
          <h2 className="title36 font-bold uppercase text-black-#303030 mb-[22px]">
            {data?.name}
          </h2>
          <div className="product-price price simple ">
            <del className="text-[#ccc] mx-[5px] md:mx-[13px] font-poppins font-medium">
              {data?.regularPrice}
            </del>
            <ins className="mx-[5px] md:mx-[13px] text-main  ">
              {data?.price}
            </ins>
          </div>
          <div className="woocommerce-product-details__short-description">
            <div
              className="product-desc leading-[1.75em] mb-[30px]"
              dangerouslySetInnerHTML={{
                __html: data?.excerpt,
              }}
            />
          </div>
          <div className="stock_sku-info flex justify-between">
            <div className="stock_status pull-left ">
              <label className=" uppercase"> Availability: </label>
              <span className=" uppercase text-[#3cb111] font-poppins font-medium">
                {" "}
                {data?.stockStatus}
              </span>
            </div>
            <div className="sku_wrapper pull-right">
              <label>SKU:</label>
              <span className="sku">{data?.sku} </span>
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
              onClick={handleAddToCart}
              value="1030"
              className="single_add_to_cart_button button alt wp-element-button !p-[12.5px_20px] screen-991:!p-[17.5px_20px]"
            >
              Add to cart
            </button>
          </div>

          <div className=" flex action ">
            <button className="add_to_wishlist single_add_to_wishlist w-1/2 text-center underline capitalize transition-main">
              <i className="fa-light fa-heart mr-[10px]"></i>
              <span>Add to wishlist</span>
            </button>
            <div className="w-6/12">
              <Popup
                className="compare-popup"
                overlayStyle={{
                  background: "rgba(0, 0, 0, 0.6)",
                  zIndex: 999999999,
                }}
                trigger={
                  <CustomButton data={data} onAddToCompare={() => add(data)} isAdded={isAddedToCompareStore} />
                }
                position="right center"
                contentStyle={{ zIndex: 9999999999999 }}
                arrow={false}
              >
                {(close) => {
                  return (
                    <div className="bg-white w-[90%] mx-auto">
                      <div className="bg-[#4F4F4F]  font-extrabold border-transparent  text-[1em] p-[10px] text-center uppercase text-white border-b-[2px]">
                        COMPARE PRODUCTS
                      </div>

                      <div className="pb-[100px] mt-10 relative">
                        <div className="py-[10px] px-[30px]">
                          <div className="flex  mx-[-15px]">
                            {items.map((item) => {
                              return (
                                <div key={item.id} className=" w-4/12 px-15   ">
                                  <div className="shadow p-4 border ">
                                    <Product data={{ ...item }} rating={true} />
                                    <div className="mt-4">
                                      <button onClick={() => remove(item.id)} className="button !bg-main !border-transparent !text-white uppercase tracking-wide !font-poppins font-medium hover:!bg-black-#222222">
                                        {" "}
                                        Remove{" "}
                                      </button>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                        <button
                          onClick={() => close()}
                          type="button"
                          id="cboxClose"
                        ></button>
                      </div>
                    </div>
                  );
                }}
              </Popup>
            </div>
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
                          <i className={social.icon} aria-hidden="true"></i>
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
                  <Link key={category.id} to={`/shop?cate=${category.slug}`}>
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
  );
};

export default ContentRight;
