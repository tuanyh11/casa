import React, { useEffect, useState } from "react";
import { Breadcrumb, CardListSmallV2 } from "../../Components";
import "react-range-slider-input/dist/style.css";

import RangeSlider from "react-range-slider-input";
import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getSidebarProduct } from "../../api";
import { Link, useLocation } from "react-router-dom";

const Shop = () => {
  const { data: sidebarData } = useQuery({
    queryKey: ["sidebar-shop"],
    queryFn: getSidebarProduct,
  });

  const [showProducts, setShowProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [search, setSearch] = useState("");

  const { data: products } = useQuery({
    queryKey: ["get-all-products"],
    queryFn: () => getProducts(),
    onSuccess: (data) => {
      setShowProducts(data);
      setTrendingProducts(data?.slice(0, 3));
    },
    refetchOnWindowFocus: false,
  });

  const loc = useLocation();

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  //
  useEffect(() => {
    if (obj?.cate && products) {
      return setShowProducts([
        ...products?.filter((product) =>
          product.productCategories?.nodes?.some(
            (cate) => cate.slug === obj?.cate?.toLocaleLowerCase()
          )
        ),
      ]);
    }

    if (obj?.search && products) {
      return setShowProducts([
        ...products?.filter((product) =>
          product?.name
            ?.toLocaleLowerCase()
            ?.includes(obj?.search.toLowerCase())
        ),
      ]);
    }
  }, [loc.search]);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  console.log(products)

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
                        <div className="price_slider_amount">
                          <button type="submit" className="button">
                            Filter
                          </button>
                          <div className="price_label">
                            Price: <span className="from">$7</span> —{" "}
                            <span className="to">$35</span>
                          </div>

                          <div className="clear"></div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>

                <div
                  id="woocommerce_product_categories-1"
                  className="sidebar-widget widget woocommerce widget_product_categories"
                >
                  <h3 className="widget-title">Product categories</h3>
                  <div className="widget-inner">
                    <ul className="product-categories">
                      {cateProduct?.map(({ node: cate }) => {
                        return (
                          <li key={cate?.id} className="cat-item cat-item-39">
                            <Link
                              className=" capitalize"
                              to={`/shop?cate=${cate?.slug}`}
                            >
                              {cate?.name}
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>

                <div
                  id="s7upf_attribute_filter-1"
                  className="sidebar-widget widget widget_s7upf_attribute_filter"
                >
                  <h3 className="widget-title">Color</h3>
                </div>

                <div
                  id="woocommerce_product_tag_cloud-1"
                  className="sidebar-widget widget woocommerce widget_product_tag_cloud"
                >
                  <h3 className="widget-title">Tags</h3>
                  <div className="widget-inner">
                    <div className="tagcloud">
                      {tagProduct?.map(({ node: tag }) => {
                        return (
                          <Link
                            key={tag?.id}
                            className="tag-cloud-link tag-link-35 tag-link-position-1  capitalize"
                            to={`/shop?tag=${tag?.slug}`}
                          >
                            {tag?.name}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="widget_product_search widget">
                  <form className="woocommerce-product-search relative  ">
                    <input
                      type="text"
                      className="search-field outline-none"
                      placeholder="Search products…"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                    <Link
                      to={`/shop?search=${search}`}
                      className=" text-black flex justify-center items-center"
                    >
                      <i className="fa-light fa-magnifying-glass " />
                    </Link>
                  </form>
                </div>

                <div className="sidebar-widget widget widget-products">
                  <h3 className="widget-title">TRENDING PRODUCTS</h3>{" "}
                  <div className="widget-inner">
                    <div className="widget-product">
                      <div className="widget-product-list">
                        {trendingProducts.map((product) => (
                          <div key={product?.id} className="">
                            <CardListSmallV2 {...product}/>
                          </div>
                        ))}
                      </div>
                    </div>
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
