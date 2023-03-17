import React from "react";
import { itemToShow, sortTypes } from "../../../../assets/data";
import { Pagination, Product, ProductList } from "../../../../Components";

const index = ({ onSetMode, mode, products }) => {
  return (
    <div>
      <div className="top-filter clearfix flex justify-between flex-wrap ">
        <div className="pull-left">
          <div className="view-type  ">
            <button
              onClick={() => onSetMode("grid")}
              className={`grid-view load-shop-ajax active mr-2 md:mr-4 ${
                mode === "grid" ? "!text-[#222]" : ""
              }`}
            >
              <i className="fa-light fa-table-cells"></i>
            </button>
            <button
              onClick={() => onSetMode("list")}
              className={`grid-view load-shop-ajax active md:mr-4 ${
                mode === "list" ? "!text-[#222]" : ""
              }`}
            >
              <i className="fa-regular fa-list"></i>
            </button>
          </div>
        </div>

        <div className="pull-right sort-pagi-bar list-inline-block">
          <div className="dropdown-box show-by !hidden md:!inline-block">
            <button className="dropdown-link !flex justify-between">
              <span>12</span>
              <i className=" absolute right-6 top-1/2 -translate-y-1/2 fa-light fa-chevron-down"></i>
            </button>
            <ul className="dropdown-list list-none">
              {itemToShow.map((item) => (
                <li key={item} className="">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="dropdown-box show-by show-order">
            <button className="dropdown-link  ">
              <i className="fas fa-sort-alpha-down mr-3"></i>
              Relevance{" "}
              <i className=" absolute right-6 top-1/2 -translate-y-1/2 fa-light fa-chevron-down"></i>
            </button>
            <ul className="dropdown-list list-none">
              {sortTypes.map((item) => (
                <li key={item.key}>{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <div className="row">
          {/* {products?.map(product => {
                    return <div key={product?.id} className="w-6/12 screen-991:w-4/12 px-15 mb-[30px]">
                        <Product data={product}/>
                    </div>
                })} */}

          {products?.map((product) => {
            return (
              <div key={product?.id} className="w-full px-15 mb-[30px]">
                <ProductList data={product} />
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-[95px]">
        <Pagination
          totalCount={30}
          currentPage={1}
          pageSize={12}
          onPageChange={(item) => console.log(item)}
        />
      </div>
    </div>
  );
};

export default index;
