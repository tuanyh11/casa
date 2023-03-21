import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const CardListSmallV2 = ({ averageRating, acf_product, slug, name, price}) => {
  const generateStart = (rating = 0, className) => {
    const filledStars = Math.round(rating);
    const emptyStars = 5 - filledStars;
    const stars = [];

    for (let i = 0; i < filledStars; i++) {
      stars.push(
        <i
          key={i}
          className={`fa-light fa-star text-main text-xs font-medium ${
            className || ""
          }`}
        ></i>
      );
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <i
          key={filledStars + i}
          className={`fa-light fa-star text-[#ccc] text-xs ${className || ""}`}
        ></i>
      );
    }

    return stars;
  };

  const image = acf_product?.imageProduct?.[0]?.imageUrlProduct

  

  return (
    <div className="item clearfix mb-[30px] flex">
      <div className="banner-advs zoom-image overlay-image">
        <Link
          to={`/product/${slug}`}
          className="product-thumb-link adv-thumb-link"
        >
          <img
            width="100"
            height="100"
            src={image}
            className="attachment-100x100 size-100x100 wp-post-image"
            alt=""
            decoding="async"
            loading="lazy"
          />
        </Link>{" "}
      </div>
      <div className="post-info">
        <h3 className="product-title title16 font-medium">
          <Link
            className="black"
            title={name}
            to={`/product/${slug}`}
          >
            {name}
          </Link>
        </h3>
        <div className="wrap-rating">
          <div className="product-rate">
            <div className="product-rating">{generateStart(averageRating)}</div>
          </div>
        </div>{" "}
        <div className="product-price price simple mx-0">
          <span className="woocommerce-Price-amount amount">
            <bdi>
              {price}
            </bdi>
          </span>
        </div>{" "}
      </div>
    </div>
  );
};

export default CardListSmallV2;
