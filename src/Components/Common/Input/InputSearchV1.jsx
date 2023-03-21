import React, { useState } from "react";

const InputSearchV1 = ({onClick}) => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        className=" h-[50px] border-[1px] border-[#eaeaea] pl-5 text-[#000000]  w-full pr-[84px]  outline-none "
        placeholder="Search..."
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() => onClick(text)}
        className="absolute top-1/2 text-[#333] text-sm right-0 -translate-y-1/2 px-4  "
      >
        <i className="far fa-search"></i>
      </button>
    </div>
  );
};

export default InputSearchV1;
