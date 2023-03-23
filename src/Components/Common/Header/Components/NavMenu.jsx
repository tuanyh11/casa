import React, { useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { useClickInsideOutside, useWindowScroll } from "../../../../hooks";
import Action from "./Action";
import Logo from "./Logo";
import NavMobile from "./NavMobile";

const menuItems = [
  { name: "HOME", link: "/" },
  { name: "BLOG", link: "/blog" },
  { name: "SHOP", link: "/shop" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

const NavMenu = () => {
  const loc = useLocation();

  const { showButton } = useWindowScroll();

  return (
    <div>
      <div
        className={`px-[15px] ${
          showButton ? "py-0" : " "
        } screen-1200:px-[50px]  border-t screen-991:py-0 py-[10px] border-[#e5e5e5] screen-991:border-none relative fixed-header ${
          showButton ? "active-menu" : ""
        }`}
      >
        <div
          className={`flex  ${
            showButton ? "justify-between" : "screen-991:justify-center"
          }`}
        >
          <div className="  screen-991:hidden flex justify-center items-center ">
            <NavMobile menuItems={menuItems} />
          </div>
          {showButton && (
            <div className="py-[2px] hidden screen-991:block">
              <Logo />
            </div>
          )}
          <ul className="w-8/12 text-center hidden  screen-991:block">
            {menuItems.map((item) => (
              <li className="inline-block" key={item.name}>
                <Link
                  className={`h-[70px] leading-[70px] mr-[40px] block font-medium text-black-#303030 uppercase font-poppins tracking-[1.6px]  ${
                    loc.pathname === item.link ? "slash-left" : ""
                  }`}
                  to={item.link}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
          {showButton && (
            <div className="">
              <Action />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
