import React, { useMemo, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useClickInsideOutside, useDebounce } from "../../../../hooks";
import { useQuery } from "@tanstack/react-query";
import { searchProduct } from "../../../../api";
import CardlistSmall from "../../../Ui/Product/CardlistSmall";
import LoginForm from "../../../Ui/Form/LoginForm";
import { socialMedia } from "../../../../assets/data";
import Cart from "./Cart";
import Logo from "./Logo";

const Body = () => {
  const resultRef = useRef(null);

  const [openSearch, setOpenSearch] = useState(false);

  const [openResultSearch, setOpenResultSearch] = useState(false);

  const [text, setText] = useState(null);

  const { value: debounceValue, isDebounced } = useDebounce(text, 3000);

  const { data, isFetching } = useQuery({
    queryKey: ["search-product", debounceValue],
    queryFn: () => searchProduct(debounceValue),
    refetchOnWindowFocus: false,
    enabled: Boolean(debounceValue),
  });


  const handleOnBlur = (e) => {
    setText(text || null);
  };

  const handleOnFocus = () => {
    setOpenResultSearch(true);
    setText(text || "");
  };

  function handleClickOutside() {
    setOpenResultSearch(false);
  }

  useClickInsideOutside(resultRef, () => {}, handleClickOutside);

  const listProduct = useMemo(() => {
    return data?.map((item) => {
      return <CardlistSmall key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <div>
      <div className="pt-[30px] px-[50px]">
        <div className="grid grid-cols-12">
          <div className="pt-[21px] pb-[19px] col-span-4 ">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${item.icon} text-lg leading-6 px-[13px] first:pl-0`}
              ></a>
            ))}
          </div>
          <div className="py-[10px] col-span-4 flex justify-center ">
              <Logo/>
          </div>
          <div className="col-span-4 ">
            <div className="flex justify-end">
              <div className="relative text-[18px] px-4 pt-5 pb-[15px] text-black">
                <div>
                  {openSearch ? (
                    <i
                      onClick={() => setOpenSearch(false)}
                      className="fa-sharp fa-regular fa-xmark !transition transition-main hover:text-main text-[22px] cursor-pointer "
                    ></i>
                  ) : (
                    <i
                      onClick={() => setOpenSearch(true)}
                      className="fa-light transition-main !transition hover:text-main  fa-magnifying-glass cursor-pointer"
                    ></i>
                  )}
                </div>
                <div
                  className={`search-form-wrap ${
                    openSearch ? "!mt-0 !opacity-100 !visible" : ""
                  }`}
                >
                  <div className="overlay-fixed"></div>
                  <form
                    ref={resultRef}
                    className={`search-form live-search-on ${
                      openResultSearch ? "active" : ""
                    }`}
                  >
                    <input
                      value={text === null ? "Type search text here..." : text}
                      type="text"
                      onChange={(e) => setText(e.target.value)}
                      onFocus={handleOnFocus}
                      onBlur={handleOnBlur}
                      className="text-[14px] !text-black-#303030"
                    />
                    <div className="submit-form">
                      <button
                        type="button"
                        className="fa-light fa-magnifying-glass !text-xl !text-black-#303030"
                      />
                    </div>
                    <div className="list-product-search ">
                      {isDebounced || isFetching ? (
                        <div className="text-center">
                          <i className="fa-solid fa-spinner animate-spin"></i>
                        </div>
                      ) : data?.length > 0 ? (
                        listProduct
                      ) : (
                        <p className="text-center">
                          {data?.length === 0
                            ? "No any results with this keyword."
                            : "Please enter key search to display results."}
                        </p>
                      )}
                    </div>
                  </form>
                </div>
              </div>
              <div className=" text-[18px] px-4 pt-5 pb-[15px] text-black ">
                <Popup
                  trigger={
                    <button>
                      {" "}
                      <i className="fa-light transition-main hover:text-main  fa-user"></i>
                    </button>
                  }
                  position="center center"
                  contentStyle={{
                    width: "100%",
                    maxWidth: "400px",
                    height: "auto",
                    top: 50,
                    // position: "relative",
                  }}
                  arrow={false}
                  overlayStyle={{
                    background: "rgba(0, 0, 0, 0.3)",
                  }}
                >
                  {(close) => <LoginForm onClose={close} />}
                </Popup>
              </div>

              <button className=" text-[18px] px-4 pt-5 pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
                <p className=" relative">
                  <button className="fa-light transition-main hover:text-main  fa-cart-shopping"></button>
                  <span className="mini-cart-number">1</span>
                </p>
                <Cart/>
              </button>
              <button className=" text-[18px] px-4 pt-5 pb-[15px]  text-black">
                <i className="fa-regular fa-bars transition-main hover:text-main "></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
