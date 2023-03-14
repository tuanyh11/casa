import React from "react";
import { socialMedia } from "../../../../assets/data";

const Author = () => {
  return (
    <div>
      <div
        id="s7upf_info_author-1"
        className="sidebar-widget widget widget_s7upf_info_author mb-[60px]"
      >
        <div className="wg-info-author text-center ">
          <div className="author-avatar mb-[27px] relative banner-advs zoom-image overlay-image">
            <a href="#" className="adv-thumb-link rounded-full after:hidden">
              <img
                width="300"
                height="300"
                src="https://casa.7uptheme.net/wp-content/uploads/2019/06//team02-300x300.jpg"
                className="attachment-300x300 size-300x300"
                alt=""
                decoding="async"
                loading="lazy"
              />{" "}
            </a>
          </div>
          <div className="author-info">
            <h3 className="title16 font-medium text-uppercase tracking-[1.6px] text-black-#333333 mb-[14px]">
              <a href="#" className="black wobble-top">
                ANIVIA LAURA{" "}
              </a>
            </h3>
            <div className="title14 email">
              <a href="mailto:anivialaura@email.com" className="text-main ">
                anivialaura@email.com
              </a>
            </div>
            <div className="list-inline-block wg-list-social ">
              {socialMedia.map((item, index) => {
                return (
                  <a key={index} href="#" className="title18 silver text-gray-#999">
                    <i className={item.icon}></i>
                  </a>
                );
              })}

             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Author;
