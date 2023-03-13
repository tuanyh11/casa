import React from "react";

const ImageHover = ({ link, url }) => {
  return (
    <div>
      <a className=" relative overflow-hidden group" href={link}>
        <img src={url} alt="" className="w-full object-cover" />
        <div className=" absolute z-[999] inset-0 flex justify-center items-center group-hover:opacity-100 group-hover:scale-100 opacity-0 transition-all duration-[0.4s] text-white bg-[rgba(0,0,0,0.4)] scale-[0.8] ">
          <i className="fa-brands fa-instagram text-[44px] mx-[5px]"></i>
        </div>
      </a>
    </div>
  );
};

export default ImageHover;
