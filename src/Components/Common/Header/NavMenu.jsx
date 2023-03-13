import React from "react";
import { Link, useLocation } from "react-router-dom";

const menuItems = [
  { name: "HOME", link: "/" },
  { name: "BLOG", link: "/blog" },
  { name: "SHOP", link: "/shop" },
  { name: "ABOUT", link: "/about" },
  { name: "CONTACT", link: "/contact" },
];

const NavMenu = () => {

    const loc = useLocation()

  return (
    <div>
      <div className=" px-[15px] py-[10px] screen-1200:px-[50px] border-t border-[#e5e5e5] screen-991:border-none">
        <div className="  flex screen-991:justify-center">
          <ul className="w-8/12 text-center hidden  screen-991:block">
            {menuItems.map((item) => (
              <li className="inline-block"  key={item.name}>
                <Link className={`h-[70px] leading-[70px] mr-[40px] block font-medium text-black-#303030 uppercase font-poppins tracking-[1.6px]  ${loc.pathname === item.link ? 'slash-left': ''}`}  to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>

          <div className="">
            <button className="toggle-mobile-menu">
              <span></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
