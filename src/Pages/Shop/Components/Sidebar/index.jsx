import React from "react";

import { Link } from "react-router-dom";
import { CardListSmallV2 } from "../../../../Components";
import Category from "./Category";
import Color from "./Color";
import Filter from "./Filter";
import Search from "./Search";
import Tags from "./Tags";
import TrendingProduct from "./TrendingProduct";
const Sidebar = ({
  cateProduct,
  tagProduct,
  trendingProducts,
  search,
  onSearch,
  priceRanges,
  offFilter = false,
  offColor = false
}) => {
  return (
    <div>
      {!offFilter && <Filter  data={priceRanges}/>}

      <Category data={cateProduct}/>

      {!offColor && <Color/>}

      <Tags data={tagProduct}/>

      <Search onSearch={onSearch} search={search}/>

      <TrendingProduct data={trendingProducts}/>
    </div>
  );
};

export default Sidebar;
