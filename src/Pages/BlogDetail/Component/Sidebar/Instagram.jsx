import React from "react";
import { instagramImg } from "../../../../assets/data";
import ImageHover from "../../../../Components/Ui/ImageHover/ImageHover";

const Instagram = () => {
  return (
    <div>
        <h3 class="widget-title">INSTAGRAM</h3>
      <ul className="flex flex-wrap  relative -mx-[1px]">
        {instagramImg.map((item, index) => (
          <li key={index} className="w-4/12 pr-[1px] pb-[1px]">
            <ImageHover link={item.link} url={item.image} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Instagram;
