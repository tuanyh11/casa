import React from "react";
import { Link } from "react-router-dom";

const CardlistSmall = (props) => {

  console.log(props);

  const {acf_product, name, price, salePrice, slug  } = props;

  const imageUrl = acf_product?.imageProduct?.[0]?.imageUrlProduct

  return (
    <div className="item-search-pro font-poppins row">
      <div className="search-ajax-thumb product-thumb">
        <Link to={`/product/${slug}`}>
          <img
            width="50"
            height="50"
            src={imageUrl}
            className="attachment-50x50 size-50x50 wp-post-image"
            alt=""
            decoding="async"
            loading="lazy"
          />
        </Link>
      </div>
      <div className="search-ajax-title w-1/2">
        <h3 className=" font-medium capitalize text-[14px]">
          <Link className=" text-black-#333333" to={`/product/${slug}`}>
            {name}
          </Link>
        </h3>
      </div>
      <div className="search-ajax-price">
        <div className="product-price price simple">
          <del className=" text-[#ccc] font-medium " aria-hidden="true">
            {price}
          </del>{" "}
          <div
            className=" text-[14px]  font-medium text-black-#303030 "
            aria-hidden="true"
          >
            {salePrice}
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default CardlistSmall;
