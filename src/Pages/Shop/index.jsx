import React, { useEffect, useState } from "react";
import { Breadcrumb } from "../../Components";
import "react-range-slider-input/dist/style.css";

import RangeSlider from "react-range-slider-input";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import {  getProducts, getSidebarProduct } from "../../api";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const { data: sidebarData } = useQuery({
    queryKey: ["sidebar-shop"],
    queryFn: getSidebarProduct,
  });

  const { data: products } = useQuery({
    queryKey: ["get-all-products"],
    queryFn: getProducts,
  });

  const [showProducts, setShowProducts] = useState([]);

  const loc = useLocation()

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  // 
  useEffect(() => {
    if(obj?.cate && products) {
      // return setShowProducts([...products?.filter(product => product.productCategories?.nodes?.some(cate => console.log(cate.slug === obj?.cate?.toLocaleLowerCase())))]);
    }
    products && setShowProducts(products)
  }, [loc.search, products])

  console.log(showProducts)

  return (
    <div>
      <Breadcrumb label={"Shop"} />
      <div className="my-[100px]">
        <div className="container">
          <div className="row">
            <div className=" screen-991:w-3/12 px-15">
              <div>
                <div className="sidebar-widget widget woocommerce widget_price_filter">
                  <h3 className="widget-title">Filter by price</h3>
                  <div className="widget-inner">
                    <form>
                      <div className="price_slider_wrapper">
                        <RangeSlider className="shop-price" />
                        <div class="price_slider_amount">
                          <button type="submit" class="button">
                            Filter
                          </button>
                          <div class="price_label">
                            Price: <span class="from">$7</span> —{" "}
                            <span class="to">$35</span>
                          </div>

                          <div class="clear"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  id="woocommerce_product_categories-1"
                  class="sidebar-widget widget woocommerce widget_product_categories"
                >
                  <h3 class="widget-title">Product categories</h3>
                  <div class="widget-inner">
                    <ul class="product-categories">
                      {sidebarData?.[0]?.map(({node: cate}) => {
                       return <li key={cate?.id} class="cat-item cat-item-39">
                          <Link className=" capitalize" to={`/shop?cate=${cate?.slug}`}>
                            {cate?.name}
                          </Link>
                        </li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className=" screen-991:w-9/12 px-15">content</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
