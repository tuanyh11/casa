import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Country, State } from "country-state-city";
import { getData } from "../../utils";
import { InputV1, SelectorV3 } from "../../../../Components";
import Sidebar from "../../../Shop/Components/Sidebar";
import FormCoupon from "./FormCoupon";
import InputGroup from "./InputGroup";
import AdditionalInfo from "./AdditionalInfo";
import OrderInfo from "./OrderInfo";
import { useCartStore } from "../../../../Components/Store";

const Content = () => {
  const methods = useForm({
    mode: "onBlur",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    setError,
    reset,
  } = methods;

  const {
    productsTrending: { data: products },
    sidebar: { data: sidebarData },
  } = getData({
    countries: {
      onSuccess: (data) => {
        setValue("country", data?.[0]);
      },
    },
  });
  const [search, setSearch] = useState("");

  const [openCoupon, setOpenCoupon] = useState(false);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  const {items: listCartItems, totalCart} = useCartStore()

  const errorMessage = Object.entries(errors).map(([k, v]) => v);

  console.log(listCartItems);

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="w-full order-2 md:order-1  md:w-4/12 screen-991:w-3/12 px-15 ">
            <div className="mt-[50px] md:mt-0">
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
          </div>

          <div className="w-full order-1 md:order-2 md:w-8/12 screen-991:w-9/12 px-15  ">
            <div className="">
              <FormCoupon
                onOpenCoupon={setOpenCoupon}
                openCoupon={openCoupon}
                register={(name, validate) => register(name, validate)}
              />

              <div className="woocommerce">
                <form
                  className="checkout_form "
                  onSubmit={(e) => {
                    setValue("startChecked.infoExtra", true);
                    setValue("startChecked.company", true);
                    setValue("startChecked.infoExtra", true);
                    handleSubmit((data) => console.log(data))(e);
                  }}
                >
                  {errorMessage.length > 0 && (
                    <ul class="woocommerce-error" role="alert">
                      <li className="text-[#c31d11] absolute text-xl top-3 left-8">
                        <i class="fa-sharp fa-solid fa-circle-exclamation"></i>
                      </li>
                      {errorMessage.map((error) => error.message)}
                    </ul>
                  )}

                  <div className="row">
                    <div className="w-full md:w-6/12 px-15">
                      <div className="pb-[15px]">
                        <h3 className="mb-[10px]">BILLING DETAILS</h3>

                        <FormProvider {...methods}>
                          <InputGroup />
                        </FormProvider>
                      </div>

                      <div className="">
                        <AdditionalInfo />
                      </div>
                    </div>

                    <div className="w-full md:w-6/12 px-15">
                      <OrderInfo data={listCartItems} />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
