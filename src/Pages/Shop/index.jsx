import React, { useEffect, useState } from "react";
import { Breadcrumb, CardListSmallV2 } from "../../Components";

import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getSidebarProduct } from "../../api";
import { Link, useLocation } from "react-router-dom";
import { itemToShow, sortTypes } from "../../assets/data";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";

const Shop = () => {
  const { data: sidebarData } = useQuery({
    queryKey: ["sidebar-shop"],
    queryFn: getSidebarProduct,
  });

  const [showProducts, setShowProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [disPlayMode, setDisPlayMode] = useState("grid")

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

  console.log(products);

  return (
    <div>
      <Breadcrumb label={"Shop"} />
      <div className="my-[100px]">
        <div className="container">
          <div className="row">
            <div className="w-full mt-[50px] md:mt-0 order-2 screen-991:order-1 screen-991:w-3/12 px-15">
              <Sidebar
                cateProduct={cateProduct}
                tagProduct={tagProduct}
                trendingProducts={trendingProducts}
                search={search}
                onSearch={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="w-full order-1 screen-991:order-2 screen-991:w-9/12 px-15">
              <Content onSetMode={setDisPlayMode} mode={disPlayMode} products={products}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
