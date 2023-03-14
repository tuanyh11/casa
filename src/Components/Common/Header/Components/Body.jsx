import React, { useMemo, useRef, useState } from "react";
import Popup from "reactjs-popup";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import Logo from "./Logo";
import { useDebounce } from "../../../../hooks";
import { searchProduct } from "../../../../api";
import CardlistSmall from "../../../Ui/Product/CardlistSmall";
import LoginForm from "../../../Ui/Form/LoginForm";
import { socialMedia } from "../../../../assets/data";
import Search from "./Search";
import Cart from "./Cart";
import Sidebar from "./Sidebar";

const Body = () => {

  const [openSearch, setOpenSearch] = useState(false);

  const [text, setText] = useState(null);

  const [openSidebar, setOpenSidebar] = useState(false);

  const { value: debounceValue, isDebounced } = useDebounce(text, 3000);

  const { data, isFetching } = useQuery({
    queryKey: ["search-product", debounceValue],
    queryFn: () => searchProduct(debounceValue),
    refetchOnWindowFocus: false,
    enabled: Boolean(debounceValue),
  });

  const listProduct = useMemo(() => {
    return data?.map((item) => {
      return <CardlistSmall key={item.id} {...item} />;
    });
  }, [data]);

  return (
    <div>
      <div className="px-[15px] screen-1200:pt-[30px] screen-1200:px-[50px]">
        <div className="grid grid-cols-12 items-center relative">
          <div className="pt-[21px] pb-[19px] col-span-4 hidden screen-567:block">
            {socialMedia.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className={`${item.icon} text-lg leading-6 px-2 screen-1200:px-[13px] first:pl-0 `}
              ></a>
            ))}
          </div>
          <div className="py-[10px] col-span-6 screen-567:col-span-4 flex justify-center ">
            <Logo />
          </div>
          <div className="mx-[-10px]  col-span-6 screen-567:col-span-4 ">
            <div className="flex justify-end">
              <div className="static screens-520:relative  text-[18px] px-4 pt-5 pb-[15px] text-black">
                <Search
                  onOpenSearch={setOpenSearch}
                  onTextSearch={setText}
                  isFetching={isFetching}
                  isDebounced={isDebounced}
                  isOpenSearch={openSearch}
                  data={data}
                  textSearch={text}
                  listProduct={listProduct}
                />
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

              <div className=" text-[18px] px-4 pt-5 pb-[15px]  text-black  mini-cart-box  mini-cart1 dropdown-box  relative">
                <p className=" relative  ">
                  <button className="fa-light transition-main hover:text-main  fa-cart-shopping"></button>
                  <span className="mini-cart-number screen-567:block hidden">
                    1
                  </span>
                </p>
                <Cart/>
              </div>

              <div className=" text-[18px] px-4 pt-5 pb-[15px]  text-black">
                <button
                  onClick={() => setOpenSidebar(!openSidebar)}
                  className="fa-regular fa-bars transition-main hover:text-main cursor-pointer"
                ></button>

                {/* sidebar header */}
                  <Sidebar openSidebar={openSidebar} onOpenSidebar={setOpenSidebar}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
