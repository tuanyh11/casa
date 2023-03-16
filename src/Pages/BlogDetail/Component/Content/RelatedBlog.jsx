import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

const RelatedPost = () => {
  return (
    <div>
      <h2 className=" font-bold  text-[24px] inline-block relative title-single-related-post mb-[45px]">
        RELATED POTS
      </h2>
      <div className="-mx-[15px]">
        <Slider slidesToShow={3}>
          {new Array(3).fill(0).map((_, i) => (
            <div key={i}>
              <div className="mx-[15px] item-post item-post-style2">
                <div className="post-thumb banner-advs zoom-image overlay-image relative">
                  <a
                    href="https://casa.7uptheme.net/2019/05/15/the-key-to-victory-was-creating-routines/"
                    className="adv-thumb-link after:inset-0 after:absolute"
                  >
                    <img
                      width="280"
                      height="155"
                      src="https://casa.7uptheme.net/wp-content/uploads/2019/05//Blog-1-280x155.jpg"
                      className="attachment-280x155 size-280x155 wp-post-image"
                      alt=""
                      decoding="async"
                      loading="lazy"
                    />{" "}
                  </a>
                </div>
                <div className="post-info mt-3">
                  <h3 className="title16 text-[16px] uppercase post-title font-medium text-uppercase">
                    <Link to={`/blog/${123}`}>
                      The key to victory was creating routines.
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
                          admin
                        </Link>
                      </li>
                      <li className="meta-date after:!hidden">May 15, 2019</li>
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
