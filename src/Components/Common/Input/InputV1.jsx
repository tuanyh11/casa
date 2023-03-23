import React from "react";

const InputV1 = ({ label, register = {},  offRequired, validate={color: '', labelColor: false}, className, ...rest }) => {
  return (
    <div className={`flex flex-wrap mb-[15px] ${className || ''}`}>
      {label && (
        <label className={`block w-full mb-[5px] capitalize font-semibold leading-[2]`} style={{color: validate?.labelColor &&  validate?.color}}>
          {label}  {!offRequired && <abbr className="text-[red] font-bold">*</abbr>}{" "}
        </label>
      )}
      <input
        style={{
          borderColor: validate?.color
        }}
        {...register}
        {...rest}
        className="w-full outline-none h-[46px] leading-[44px] px-[20px] py-0 border-[1px] border-[#ccc]"
      />
    </div>
  );
};

export default InputV1;
