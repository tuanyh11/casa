import React from "react";
import { CardListSmallV2 } from "../../../../Components";

const TrendingProduct = ({data}) => {
  return (
    <div className="sidebar-widget widget widget-products mb-0">
      <h3 className="widget-title">TRENDING PRODUCTS</h3>{" "}
      <div className="widget-inner">
        <div className="widget-product">
          <div className="widget-product-list">
            {data?.map((product) => (
              <div key={product?.id} className=" last:mb-0  mb-[30px]">
                <CardListSmallV2 {...product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingProduct;
