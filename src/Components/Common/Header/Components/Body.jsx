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
import Action from "./Action";

const Body = () => {



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
              <Action/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
