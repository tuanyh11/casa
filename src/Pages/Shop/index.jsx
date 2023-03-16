import React from "react";
import { Breadcrumb } from "../../Components";

const Shop = () => {
  return (
    <div>
      <Breadcrumb label={"Shop"} />
      <div className="my-[100px]">
        <div className="container">
          <div className="row">
            <div className=" screen-991:w-3/12 px-15">
              <div>
                <div
                  id="woocommerce_price_filter-1"
                  className="sidebar-widget widget woocommerce widget_price_filter"
                >
                  <h3 className="widget-title">Filter by price</h3>
                  <div className="widget-inner">
                    <form >
                      <div className="price_slider_wrapper">
                        <div className="price_slider ui-slider ui-corner-all ui-slider-horizontal ui-widget ui-widget-content">
                          <div
                            className="ui-slider-range ui-corner-all ui-widget-header"
                          ></div>
                          <span
                            tabindex="0"
                            className="ui-slider-handle ui-corner-all ui-state-default"
                          ></span>
                          <span
                            tabindex="0"
                            className="ui-slider-handle ui-corner-all ui-state-default"
                          ></span>
                        </div>
                      
                      </div>
                    </form>
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
