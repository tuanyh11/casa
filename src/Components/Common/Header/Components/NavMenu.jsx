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
      <div className="px-[50px]">
        <div className="flex justify-center">
          <ul className="w-8/12 text-center ">
            {menuItems.map((item) => (
              <li className="inline-block"  key={item.name}>
                <Link className={`h-[70px] leading-[70px] mr-[40px] block font-medium text-black-#303030 uppercase font-poppins tracking-[1.6px]  ${loc.pathname === item.link ? 'slash-left': ''}`}  to={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavMenu;
