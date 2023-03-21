import React from "react";

const InputV3 = ({ label, register = {}, error, offLabel, ...rest }) => {
  return (
    <div className="flex flex-wrap">
      {!offLabel && (
        <label className="mb-[8px] font-normal">
          {label} &nbsp;
          <span
            className="text-main-color"
            style={{ textDecoration: "underline dotted" }}
          >
            *
          </span>
        </label>
      )}
      {error && <span className="text-main-color  ">{error}</span>}
      <input
        {...register}
        {...rest}
        className="w-full border-[1px] border-[#eaeaea] h-[50px] px-[20px] mb-[15px] focus:outline-none text-[#000]"
      />
    </div>
  );
};

export default InputV3;
