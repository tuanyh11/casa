import React from "react";
import { Link } from "react-router-dom";

const Tags = ({data}) => {
  return (
    <div
      id="woocommerce_product_tag_cloud-1"
      className="sidebar-widget widget woocommerce widget_product_tag_cloud"
    >
      <h3 className="widget-title">Tags</h3>
      <div className="widget-inner">
        <div className="tagcloud">
          {data?.map(({ node: tag }) => {
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
  );
};

export default Tags;
