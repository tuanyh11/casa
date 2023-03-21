import React from "react";

const Image = ({ url }) => {
  return (
    <div className="mb-[35px] relative   h-[300px]">
      <img
        src={url}
        className=" aspect-[auto_900/490] w-full h-full object-cover"
        alt=""
        decoding="async"
      />
    </div>
  );
};

export default Image;
