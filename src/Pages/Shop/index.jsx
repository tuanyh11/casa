import React, { useEffect, useMemo, useState } from "react";
import { Breadcrumb, CardListSmallV2 } from "../../Components";

import "./style.css";
import { useQuery } from "@tanstack/react-query";
import { getProducts, getSidebarProduct } from "../../api";
import { Link, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar";
import Content from "./Components/Content";
import currency from "currency.js";
import { filterProductBySidebar, getPathBreadcrumbs, handleFilter } from "./utils";

const Shop = () => {
  const { data: sidebarData } = useQuery({
    queryKey: ["sidebar-shop"],
    queryFn: getSidebarProduct,
    refetchOnWindowFocus: false,
  });

  const [showProducts, setShowProducts] = useState([]);
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [disPlayMode, setDisPlayMode] = useState("grid");
  const [currentPage, setCurrentPage] = useState(0);
  const [pageSize, setPageSize] = useState(12);

  const { data: products } = useQuery({
    queryKey: ["get-all-products", currentPage, pageSize],
    queryFn: () =>
      getProducts({
        start: currentPage * pageSize,
        end: currentPage * pageSize + pageSize,
      }),
    onSuccess: (data) => {
      setShowProducts(data);
      setTrendingProducts(data?.slice(0, 3));
    },
    refetchOnWindowFocus: false,
  });

  const loc = useLocation();

  const params = new URLSearchParams(loc.search);

  const query = Object.fromEntries(Array.from(params.entries()));

  //
  useEffect(filterProductBySidebar(products, query, setShowProducts), [
    loc,
    products,
  ]);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  const priceRanges = useMemo(() => {
    const price =
      products?.map((p) => currency(p.price || p.regularPrice).value) || [];

    return [Math.min(...price), Math.max(...price)];
  }, [products, currentPage]);

  const pathBreadCrumbs = getPathBreadcrumbs(query);

  


  return (
    <div>
      <Breadcrumb
        label={pathBreadCrumbs?.title || "Shop"}
        customPathname={pathBreadCrumbs?.element}
      />
      <div className="my-[50px] md:my-[100px]">
        <div className="container">
          <div className="row">
            <div className="w-full mt-[50px] md:mt-0 order-2 md:order-1 md:w-4/12 screen-991:w-3/12 px-15">
              <Sidebar
                cateProduct={cateProduct}
                tagProduct={tagProduct}
                trendingProducts={trendingProducts}
                search={search}
                onSearch={(e) => setSearch(e.target.value)}
                priceRanges={priceRanges}
              />
            </div>
            <div className="w-full order-1 md:order-2 md:w-8/12 screen-991:w-9/12 px-15">
              {showProducts.length === 0 ? (
                <p className=" border-l-[3px] border-l-[#5aa1e3] bg-[rgba(90,161,227,0.1)] p-[18px_30px_18px_65px] relative text-[#515151]">
                  <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute top-1/2 -translate-y-1/2 left-7"></i>
                  No products were found matching your selection.
                </p>
              ) : (
                <Content
                  onSetMode={setDisPlayMode}
                  mode={disPlayMode}
                  products={showProducts}
                  currentPage={currentPage}
                  onPageChange={setCurrentPage}
                  onPageSize={setPageSize}
                  pageSize={pageSize}
                  onFilter={(key) => handleFilter(key, setShowProducts, showProducts)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shop;
