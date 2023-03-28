

function FormCoupon({ onOpenCoupon, openCoupon, register }) {
  return (
    <div className="">
      <p className=" border-l-[3px] mb-7 border-l-[#5aa1e3] bg-[rgba(90,161,227,0.1)] p-[18px_30px_18px_65px] relative text-[#515151]">
        <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute top-1/2 -translate-y-1/2 left-7"></i>
        Have a coupon?
        <button
          onClick={() => onOpenCoupon(!openCoupon)}
          className="showcoupon  text-start text-[#222] screens-525:ml-1 transition-main hover:text-main"
        >
          Click here to enter your code
        </button>{" "}
      </p>

      <form
        className={` woocommerce-form-coupon transition-all duration-500 ease-out  !px-5   ${
          openCoupon
            ? "max-h-[200px] h-full checkout_coupon !py-5"
            : "max-h-0 overflow-hidden !py-0  "
        }`}
      >
        <p>If you have a coupon code, please apply it below.</p>

        <div className="flex ">
          <p className="form-row form-row-first !mb-[15px] w-[47%]">
            <input
              type="text"
              className="  px-15 leading-[46px] !h-[46px] w-full !rounded-none !py-0 !px-[15px] "
              placeholder="Coupon code"
              id="coupon_code"
              {...register("coupon_code")}
            />
          </p>

          <p className="!mb-[15px] ml-[55px]">
            <button
              type="submit"
              className="button wp-element-button"
              name="apply_coupon"
              value="Apply coupon"
            >
              Apply coupon
            </button>
          </p>
        </div>

        <div className="clear"></div>
      </form>
    </div>
  );
}

export default FormCoupon;
