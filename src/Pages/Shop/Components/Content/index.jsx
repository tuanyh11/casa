import React, { useState } from "react";
import { itemToShow, sortTypes } from "../../../../assets/data";
import { Pagination, Product, ProductList } from "../../../../Components";

const index = ({
  onSetMode,
  mode,
  products,
  onPageChange,
  currentPage,
  onPageSize,
  pageSize,
  onFilter,
}) => {
  const [filterMode, setFilterMode] = useState(sortTypes[0].name);

  return (
    <div>
      <div className="top-filter clearfix mb-[30px] screen-1200:!mb-[60px] ">
        <div className="flex justify-between flex-wrap !mx-[-5px] !my-[-5px]">
          <div className="pull-left ">
            <div className="view-type   ">
              <button
                onClick={() => onSetMode("grid")}
                className={`grid-view load-shop-ajax active mr-1 ${
                  mode === "grid" ? "!text-[#222]" : ""
                }`}
              >
                <i class="la la-table"></i>
              </button>
              <button
                onClick={() => onSetMode("list")}
                className={`grid-view load-shop-ajax active ${
                  mode === "list" ? "!text-[#222]" : ""
                }`}
              >
                <i class="la la-list-ul"></i>
              </button>
            </div>
          </div>

          <div className="pull-right sort-pagi-bar list-inline-block !mr-0 md:!mr-[5px] !m-0 ">
            <div className="dropdown-box show-by !hidden md:!inline-block">
              <button className="dropdown-link !flex justify-between">
                <span>{pageSize}</span>
                <i className=" absolute right-6 top-1/2 -translate-y-1/2 fa-light fa-chevron-down"></i>
              </button>
              <ul className="dropdown-list list-none ">
                {itemToShow.map((item) => (
                  <li onClick={() => onPageSize(item)} key={item} className="">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="dropdown-box show-by show-order  ">
              <button className="dropdown-link  ">
                <i className="fas fa-sort-alpha-down mr-3"></i>
                {filterMode}
                <i className=" absolute right-6 top-1/2 -translate-y-1/2 fa-light fa-chevron-down"></i>
              </button>
              <ul className="dropdown-list list-none">
                {sortTypes.map((item) => (
                  <li
                    className={`${
                      filterMode === item.name ? "!text-main" : ""
                    }`}
                    onClick={() => {
                      onFilter(item.key);
                      setFilterMode(item.name);
                    }}
                    key={item.key}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          {mode === "grid"
            ? products?.map((product) => {
                return (
                  <div
                    key={product?.id}
                    className="w-6/12 screen-991:w-4/12 px-15 mb-[30px]"
                  >
                    <Product data={product} />
                  </div>
                );
              })
            : products?.map((product) => {
                return (
                  <div key={product?.id} className="w-full px-15 mb-[30px]">
                    <ProductList data={product} />
                  </div>
                );
              })}
        </div>
      </div>

      <div className="  screen-1200:mt-[95px] mt-[-40px]">
        <Pagination
          totalCount={30}
          currentPage={currentPage + 1}
          pageSize={pageSize}
          onPageChange={(item) => onPageChange(item - 1)}
        />
      </div>
    </div>
  );
};

export default index;
