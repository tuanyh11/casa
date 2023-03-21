import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getProducts, getSidebarProduct } from "../../api";
import { Breadcrumb, InputV1, SelectorV3 } from "../../Components";
import Sidebar from "../Shop/Components/Sidebar";
import "./style.css";
import { getData } from "./utils";

const Checkout = () => {
  const {
    productsTrending: { data: products },
    sidebar: { data: sidebarData },
    countries: { data: countries },
  } = getData();

  const [search, setSearch] = useState("");

  const [openCoupon, setOpenCoupon] = useState(false);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  return (
    <div>
      <Breadcrumb label={"Check Out"} />
      <div className="my-[100px] checkout">
        <div className="container">
          <div className="row">
            <div className="w-full md:w-4/12 screen-991:w-3/12 px-15 ">
              <Sidebar
                cateProduct={cateProduct}
                tagProduct={tagProduct}
                trendingProducts={products}
                search={search}
                onSearch={(e) => setSearch(e.target.value)}
                offFilter={true}
                offColor={true}
              />
            </div>

            <div className="w-full md:w-8/12 screen-991:w-9/12 px-15 ">
              <div className="">
                <p className=" border-l-[3px] border-l-[#5aa1e3] bg-[rgba(90,161,227,0.1)] p-[18px_30px_18px_65px] relative text-[#515151]">
                  <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute top-1/2 -translate-y-1/2 left-7"></i>
                  Have a coupon?
                  <button
                    onClick={() => setOpenCoupon(!openCoupon)}
                    class="showcoupon ml-1"
                  >
                    Click here to enter your code
                  </button>{" "}
                </p>

                <form
                  class={` woocommerce-form-coupon transition-all duration-500 ease-out  !px-5   ${
                    openCoupon
                      ? "max-h-[200px] h-full checkout_coupon !py-5"
                      : "max-h-0 overflow-hidden !py-0  "
                  }`}
                >
                  <p>If you have a coupon code, please apply it below.</p>

                  <div className="flex ">
                    <p class="form-row form-row-first !mb-[15px] w-[47%]">
                      <input
                        type="text"
                        name="coupon_code"
                        class="input-text px-15 leading-[46px] h-[46px] w-full"
                        placeholder="Coupon code"
                        id="coupon_code"
                        value=""
                      />
                    </p>

                    <p class="!mb-[15px] ml-[55px]">
                      <button
                        type="submit"
                        class="button wp-element-button"
                        name="apply_coupon"
                        value="Apply coupon"
                      >
                        Apply coupon
                      </button>
                    </p>
                  </div>

                  <div class="clear"></div>
                </form>

                <div className="">
                  <div className="row">
                    <div className=" screen-991:w-6/12 px-15">
                      <div className="">
                        <div className="h3"></div>
                        <div className="">
                          <div className="flex gap-[30px]">
                            <InputV1 label={"First name"} />
                            <InputV1 label={"Last name"} />
                          </div>

                          <div className="">
                            <InputV1
                              label={"Company name (optional)"}
                              offRequired={true}
                            />
                          </div>

                          <div className="mb-[15px]">
                            <SelectorV3
                              data={countries}
                              disPlayKey={(item) => item?.country_name}
                              onSelect={(item) => setValue(field.name, item)}
                              // title={watch(field.name)?.country_name}
                              label="Country / Region"
                              onSearch={(e) =>
                                countries.filter((country) =>
                                  e.target.value
                                    ? country.country_name
                                        .toLowerCase()
                                        .indexOf(
                                          e.target.value.toLowerCase()
                                        ) >= 0
                                    : true
                                )
                              }
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
