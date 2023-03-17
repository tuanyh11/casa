import React from "react";
import "react-range-slider-input/dist/style.css";

import RangeSlider from "react-range-slider-input";
const Filter = () => {
  return (
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
  );
};

export default Filter;
