import React from "react";
import { Link } from "react-router-dom";
import { useDate } from "../../../../hooks";

const RelateProduct = ({ data }) => {

  const getDate = useDate()

  return (
    <div>
      <div
        id="s7upf_list_posts_widget-1"
        className="sidebar-widget widget widget-posts"
      >
        <h3 className="widget-title">RELATED POSTS</h3>
        <div className="widget-inner">
          <div className="widget-post-list ">
            {data?.map((blog) => {
              return (
                <div key={blog.id} className="table-custom">
                  <div className="post-thumb banner-advs zoom-image overlay-image">
                    <Link to={`/blog/123`} className="adv-thumb-link w-[100px] h-[100px]" >
                      <img
                       
                        src={blog.post.imagePost}
                        className="attachment-100x100 size-100x100 wp-post-image w-full h-full object-cover"
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
                        {blog.title}
                      </Link>
                    </h3>
                    <span className="title14">{getDate()}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelateProduct;
