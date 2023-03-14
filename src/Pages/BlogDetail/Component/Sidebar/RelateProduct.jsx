import React from "react";
import { Link } from "react-router-dom";

const RelateProduct = () => {
  return (
    <div>
      <div
        id="s7upf_list_posts_widget-1"
        className="sidebar-widget widget widget-posts"
      >
        <h3 className="widget-title">RELATED POSTS</h3>
        <div className="widget-inner">
          <div className="widget-post-list ">
           
            <div className="table-custom">
              <div className="post-thumb banner-advs zoom-image overlay-image">
                <Link
                  to={`/blog/123`}
                  className="adv-thumb-link"
                >
                  <img
                    width="100"
                    height="100"
                    src="https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-100x100.jpg"
                    className="attachment-100x100 size-100x100 wp-post-image"
                    alt=""
                    decoding="async"
                    loading="lazy"
                  />
                  <span className="als-item-middle fa fa-link"></span>
                </Link>
              </div>
              <div className="post-info">
                <h3 className="post-title title16 font-medium">
                  <Link
                    className=" text-black-#333333"
                    to={`/blog/123`}
                    title="The key to victory was creating routines."
                  >
                    The key to victory was creating routines.
                  </Link>
                </h3>
                <span className="title14">May 15, 2019</span>
              </div>
            </div>

            
      
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelateProduct;
