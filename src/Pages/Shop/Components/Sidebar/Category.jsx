import React from "react";
import { Link } from "react-router-dom";

const Category = ({ data }) => {
  return (
    <div
      id="woocommerce_product_categories-1"
      className="sidebar-widget widget woocommerce widget_product_categories"
    >
      <h3 className="widget-title">Product categories</h3>
      <div className="widget-inner">
        <ul className="product-categories">
          {data?.map(({ node: cate }) => {
            return (
              <li key={cate?.id} className="cat-item cat-item-39">
                <Link className=" capitalize" to={`/shop?cate=${cate?.slug}`}>
                  {cate?.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Category;
