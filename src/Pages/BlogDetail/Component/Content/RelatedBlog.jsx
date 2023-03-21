import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useDate } from "../../../../hooks";

const RelatedPost = ({data}) => {

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 990,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const getDate = useDate()

  return (
    <div>
      <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
        RELATED POTS
      </h2>
      <div className="-mx-[15px]">
        <Slider {...settings}>
          {data?.map((blog) => (
            <div key={blog?.id}>
              <div className="mx-[15px] item-post item-post-style2">
                <div className="post-thumb banner-advs zoom-image overlay-image relative">
                  <Link
                    to={`/blog/${blog?.slug}`}
                    className="adv-thumb-link after:inset-0 after:absolute"
                  >
                    <img
                      width="280"
                      height="155"
                      src={blog.post.imagePost}
                      className="attachment-280x155 size-280x155 wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />{" "}
                  </Link>
                </div>
                <div className="post-info mt-3">
                  <h3 className="title16 text-[16px] uppercase post-title font-medium text-uppercase">
                  <Link  
                    to={`/blog/${blog?.slug}`}>
                      {blog.title}
                    </Link>
                  </h3>
                  <div className="meta-post text-capitalize">
                    <ul className="list-inline-block capitalize">
                      <li className="meta-author">
                        <span>By</span>{" "}
                        <Link
                          className=" text-main"
                          to={`/blog?author=${"tuanleo"}`}
                        >
                          {blog.author.node.name}
                        </Link>
                      </li>
                      <li className="meta-date after:!hidden">{getDate()}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default RelatedPost;
