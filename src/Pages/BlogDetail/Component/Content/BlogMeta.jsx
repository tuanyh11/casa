import React from "react";
import { Link } from "react-router-dom";
import { socialMediaIconsBlog } from "../../../../assets/data";

const BlogMeta = ({tags}) => {
  return (
    <div className="single_post_meta">
      <div className="row">
        <div className="md:w-6/12 px-15 sm-social">
          {tags?.map((tag, index) => (
            <Link
              key={tag.databaseId}
              to={`/blog?tag=${tag.slug}`}
              className="mr-[6px] font-poppins"
            >
              {tag.name} {tags.length - 1 === index ? "" : ","}
            </Link>
          ))}
        </div>

        <div className="md:w-6/12 px-15 sm-social">
          <div className="flex justify-end -mx-[14px] ">
            {socialMediaIconsBlog.map((item, index) => (
              <a
                key={index}
                href={item.link}
                title={item.name}
                className={`  leading-6  first:pl-0 `}
              >
                <span className="share-icon">
                  <i className={item.icon}></i>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogMeta;
