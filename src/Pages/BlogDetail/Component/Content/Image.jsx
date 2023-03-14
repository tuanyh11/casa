import React from "react";

const Image = ({ url }) => {
  return (
    <div className="mb-[35px] relative">
      <img
        src={url}
        className=" aspect-[auto_900/490] w-[900px] h-[490px]"
        alt=""
        decoding="async"
      />
    </div>
  );
};

export default Image;
