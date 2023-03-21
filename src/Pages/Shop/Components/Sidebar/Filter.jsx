import React, { useEffect, useState } from "react";
import "react-range-slider-input/dist/style.css";

import RangeSlider from "react-range-slider-input";
import { Link } from "react-router-dom";
const Filter = ({ data }) => {
  const [rangePrice, setRangePrice] = useState([0, 100]);

  useEffect(() => {
    setRangePrice(data);
  }, [data]);

  return (
    <div className="sidebar-widget widget woocommerce widget_price_filter">
      <h3 className="widget-title">Filter by price</h3>
      <div className="widget-inner">
        <form>
          <div className="price_slider_wrapper">
            <RangeSlider
              className="shop-price"
              min={data?.[0]}
              max={data?.[1]}
              onInput={(range) => setRangePrice(range)}
            />
            <div className="price_slider_amount">
              <Link to={`/shop?min=${rangePrice[0]}&max=${rangePrice[1]}`}  className="button">
                Filter
              </Link>
              <div className="price_label">
                Price: <span className="from">${rangePrice?.[0]}</span> —{" "}
                <span className="to">${rangePrice?.[1]}</span>
              </div>

              <div className="clear"></div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Filter;
