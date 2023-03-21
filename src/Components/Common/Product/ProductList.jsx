import React from "react";
import { Link } from "react-router-dom";

const ProductList = ({ data }) => {
  return (
    <div>
      <div className="item-product item-product-list mb-[40px]">
        <div className="row">
          <div className=" w-full screen-991:w-4/12  px-15">
            <div className="product-thumb">
              <Link
                to={`/product/${data.slug}`}
                className="product-thumb-link rotate-thumb before:!hidden w-full screen-991:w-[300px] screen-991:h-[300px]"
              >
                <img
                  className="attachment-300x300 size-300x300 wp-post-image w-full h-full"
                  width={300}
                  height={300}
                  src={data.acf_product?.imageProduct?.[0].imageUrlProduct}
                  alt=""
                />
                <img
                  className="attachment-300x300 size-300x300 wp-post-image"
                  width="300"
                  height="300"
                  src={data.acf_product?.imageProduct?.[1].imageUrlProduct}
                  alt=""
                />
              </Link>{" "}
              {data.price ? (
                <div className="product-label">
                  <span className="sale">Sale</span>
                </div>
              ) : null}
            </div>
          </div>
          <div className=" w-full screen-991:w-8/12  px-15">
            <div className="product-info">
              <h3 className="title24 font-medium text-uppercase product-title !mb-[19px]">
                <Link
                  title={data.name}
                  to={`/product/${data.slug}`}
                >
                  {data.name}
                </Link>
              </h3>
              <div className=" external mb-4">
              {
                    data.price ? (
                        <div className='product-price'>
                            <span className='regular-price !text-[18px]'>
                              {data.regularPrice}
                            </span>
                            <span className='sale-price !text-[18px]'>
                                {data.price}
                            </span>
                        </div>
                    ) : (
                        <div className='product-price'>
                            <span className='sale-price'>
                                {data.regularPrice}
                            </span>
                        </div>
                    )
                }
              </div>{" "}
              <div className="desc">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra
                maecenas accumsan lacus vel facilisis.{" "}
              </div>
              <div className="product-extra-link">
                <button
                  className="addcart-link  product_type_external product_type_external"
                  data-title="Runner red galbraith"
                >
                  <span>Add to cart</span>
                </button>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
