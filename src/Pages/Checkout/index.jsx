import { useQuery } from "@tanstack/react-query";
import React, { useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { getProducts, getSidebarProduct } from "../../api";
import { Breadcrumb, InputV1, SelectorV3 } from "../../Components";
import Sidebar from "../Shop/Components/Sidebar";
import "./style.css";
import { getData } from "./utils";
import { Country, State } from "country-state-city";

const Checkout = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    getValues,
    watch,
    reset,
  } = useForm();

  const {
    productsTrending: { data: products },
    sidebar: { data: sidebarData },
    // countries: { data: countries },
  } = getData({
    countries: {
      onSuccess: (data) => {
        console.log(data);
        setValue("country", data?.[0]);
      },
    },
  });

  const [search, setSearch] = useState("");

  const [openCoupon, setOpenCoupon] = useState(false);
  const [states, setStates] = useState([]);

  const cateProduct = sidebarData?.[0];
  const tagProduct = sidebarData?.[1];

  const selectedCountry = watch("country");

  const handleFilterCountries = (e, data) =>
    data.filter((country) =>
      e.target.value
        ? country.name.toLowerCase().indexOf(e.target.value.toLowerCase()) >= 0
        : true
    );

  const handleGetState = (item) => {
    return State.getStatesOfCountry(item?.isoCode);
  };

  const SelectCountry = useMemo(() => {
    const countries = Country.getAllCountries();

    return (
      <div className="">
        <SelectorV3
          data={countries}
          disPlayKey={(item) => item?.name}
          onSelect={(item) => {
            setValue("country", item);
            setStates([...handleGetState(item)]);
            setValue("state", "");
          }}
          title={watch("country")?.name || countries?.[0]?.name}
          label="Country / Region"
          onSearch={(e) => handleFilterCountries(e, countries)}
          isSelected={(item) => selectedCountry?.name === item?.name}
        />
      </div>
    );
  }, [selectedCountry]);

  const errorMessage = Object.entries(errors).map(([k, v]) => v);

  return (
    <div>
      <Breadcrumb label={"Check Out"} />
      <div className="my-[100px] checkout">
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
                <p className=" border-l-[3px] mb-7 border-l-[#5aa1e3] bg-[rgba(90,161,227,0.1)] p-[18px_30px_18px_65px] relative text-[#515151]">
                  <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute top-1/2 -translate-y-1/2 left-7"></i>
                  Have a coupon?
                  <button
                    onClick={() => setOpenCoupon(!openCoupon)}
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
                        name="coupon_code"
                        className="input-text px-15 leading-[46px] h-[46px] w-full"
                        placeholder="Coupon code"
                        id="coupon_code"
                        value=""
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

                <div className="woocommerce">
                  <form
                    className="checkout_form "
                    onSubmit={handleSubmit((data) => console.log(data))}
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
                          <div className="">
                            <div className="grid grid-cols-2 screens-525:gap-x-[30px] flex-wrap">
                              <div className="col-span-2 screens-525:col-span-1">
                                <InputV1
                                  label={"First name"}
                                  error={errors?.firstName ? {color: '#a00'} : ''}
                                  register={{
                                    ...register("firstName", {
                                      required: {
                                        value: true,
                                        message: (
                                          <li>
                                            <strong>Billing First name</strong>{" "}
                                            is a required field.{" "}
                                          </li>
                                        ),
                                      },
                                    }),
                                  }}
                                />
                              </div>
                              <div className="col-span-2 screens-525:col-span-1">
                                <InputV1
                                  label={"Last name"}
                                  error={errors?.lastName ? {color: '#a00'} : ''}
                                  register={{
                                    ...register("lastName", {
                                      required: {
                                        value: true,
                                        message: (
                                          <li>
                                            <strong>Billing Last name</strong>{" "}
                                            is a required field.{" "}
                                          </li>
                                        ),
                                      },
                                    }),
                                  }}
                                />
                              </div>
                            </div>

                            <div className="">
                              <InputV1
                                label={"Company name (optional)"}
                                
                                offRequired={true}
                              />
                            </div>

                            <div className="mb-[15px]">{SelectCountry}</div>

                            <div className="">
                              <InputV1
                                label={"Street address"}
                                placeholder="House number and street name"
                                register={{
                                  ...register("streetAddress", {
                                    required: {
                                      value: true,
                                      message: (
                                        <li>
                                          <strong>
                                            Billing Street address
                                          </strong>{" "}
                                          is a required field.{" "}
                                        </li>
                                      ),
                                    },
                                  }),
                                }}
                              />

                              <InputV1 placeholder="Apartment, suite, unit, etc. (optional)" />
                            </div>

                            <div className="">
                              <InputV1
                                label={"Town / City"}
                                register={{
                                  ...register("townAndCity", {
                                    required: {
                                      value: true,
                                      message: (
                                        <li data-id="billing_city">
                                          <strong>Billing Town / City</strong>{" "}
                                          is a required field.{" "}
                                        </li>
                                      ),
                                    },
                                  }),
                                }}
                              />
                            </div>

                            <div className="mb-[15px]">
                              {states.length > 0 && (
                                <SelectorV3
                                  data={states}
                                  disPlayKey={(item) => item?.name}
                                  onSelect={(item) => {
                                    setValue("state", item);
                                  }}
                                  title={
                                    watch("state")?.name ||
                                    "Select an option..."
                                  }
                                  label="State / County"
                                  onSearch={(e) =>
                                    handleFilterCountries(
                                      e,
                                      State.getAllStates()
                                    )
                                  }
                                  isSelected={(item) =>
                                    states?.name === item?.name
                                  }
                                />
                              )}
                            </div>

                            <InputV1
                              label={"Postcode / ZIP"}
                              placeholder="House number and street name"
                              register={{
                                ...register("postcode", {
                                  required: {
                                    value: true,
                                    message: (
                                      <li>
                                        <strong>Billing Postcode / ZIP</strong>{" "}
                                        is a required field.{" "}
                                      </li>
                                    ),
                                  },
                                }),
                              }}
                            />

                            <InputV1
                              label={"Phone"}
                              placeholder="House number and street name"
                              register={{
                                ...register("phone", {
                                  required: {
                                    value: true,
                                    message: (
                                      <li>
                                        <strong>Billing Phone</strong> is a
                                        required field.{" "}
                                      </li>
                                    ),
                                  },
                                }),
                              }}
                            />

                            <InputV1
                              label={"Email address"}
                              placeholder="House number and street name"
                              register={{
                                ...register("email", {
                                  required: {
                                    value: true,
                                    message: (
                                      <li data-id="billing_email">
                                        <strong>Billing Email address</strong>{" "}
                                        is a required field.{" "}
                                      </li>
                                    ),
                                  },
                                }),
                              }}
                            />
                          </div>
                        </div>

                        <div className="">
                          <div className="woocommerce-additional-fields">
                            <h3 className="mb-[10px]">
                              Additional information
                            </h3>

                            <div className="woocommerce-additional-fields__field-wrapper">
                              <p
                                className="form-row notes mb-[13px]"
                                id="order_comments_field"
                                data-priority=""
                              >
                                <label
                                  for="order_comments"
                                  className=" font-semibold  leading-[2] block mb-[5px]"
                                >
                                  Order notes&nbsp;
                                  <span className="optional">(optional)</span>
                                </label>
                                <span className="woocommerce-input-wrapper block w-full">
                                  <textarea
                                    name="order_comments"
                                    className="input-text "
                                    id="order_comments"
                                    placeholder="Notes about your order, e.g. special notes for delivery."
                                    rows={2}
                                    cols={5}
                                  ></textarea>
                                </span>
                              </p>{" "}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="w-full md:w-6/12 px-15">
                        <div className="order-custom mt-[30px] md:mt-0">
                          <h3 id="order_review_heading">Your order</h3>

                          <div
                            id="order_review"
                            className="woocommerce-checkout-review-order"
                          >
                            <div className="order-table-wrap">
                              <table className="shop_table woocommerce-checkout-review-order-table">
                                <thead>
                                  <tr>
                                    <th className="product-name">Product</th>
                                    <th className="product-total">Subtotal</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="cart_item">
                                    <td className="product-name">
                                      Berlage Guest Chair&nbsp;{" "}
                                      <strong className="product-quantity">
                                        ×&nbsp;1
                                      </strong>{" "}
                                    </td>
                                    <td className="product-total">
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          42.00
                                        </bdi>
                                      </span>{" "}
                                    </td>
                                  </tr>
                                </tbody>
                                <tfoot>
                                  <tr className="cart-subtotal">
                                    <th>Subtotal</th>
                                    <td>
                                      <span className="woocommerce-Price-amount amount">
                                        <bdi>
                                          <span className="woocommerce-Price-currencySymbol">
                                            $
                                          </span>
                                          42.00
                                        </bdi>
                                      </span>
                                    </td>
                                  </tr>

                                  <tr className="order-total">
                                    <th>Total</th>
                                    <td>
                                      <strong>
                                        <span className="woocommerce-Price-amount amount">
                                          <bdi>
                                            <span className="woocommerce-Price-currencySymbol">
                                              $
                                            </span>
                                            42.00
                                          </bdi>
                                        </span>
                                      </strong>{" "}
                                    </td>
                                  </tr>
                                </tfoot>
                              </table>
                            </div>
                            <div
                              id="payment"
                              className="woocommerce-checkout-payment"
                            >
                              <ul className="wc_payment_methods payment_methods methods  ">
                                <li className="woocommerce-notice woocommerce-notice--info woocommerce-info leading-[2] relative !mb-0">
                                  <i className="fa-regular fa-calendar text-[#5aa1e3] text-2xl absolute  top-10 -translate-y-1/2 left-7"></i>
                                  Sorry, it seems that there are no available
                                  payment methods for your state. Please contact
                                  us if you require assistance or wish to make
                                  alternate arrangements.
                                </li>{" "}
                              </ul>
                              <div className="form-row place-order mb-[15px]">
                                <div className="woocommerce-terms-and-conditions-wrapper">
                                  <div className="woocommerce-privacy-policy-text">
                                    <p className="mb-[25px] leading-[1.75em]">
                                      Your personal data will be used to process
                                      your order, support your experience
                                      throughout this website, and for other
                                      purposes described in our{" "}
                                      <a
                                        href="https://casa.7uptheme.net/?page_id=3"
                                        className="woocommerce-privacy-policy-link"
                                        target="_blank"
                                      >
                                        privacy policy
                                      </a>
                                      .
                                    </p>
                                  </div>
                                </div>
                                <button
                                  type="submit"
                                  className="button alt wp-element-button w-full block !mb-0 md:!mt-5"
                                  name="woocommerce_checkout_place_order"
                                  id="place_order"
                                  value="Place order"
                                  data-value="Place order"
                                >
                                  Place order
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
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
