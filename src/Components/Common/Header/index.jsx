import React from "react";
import Body from "./Body";
import Top from "./Top";
import './style.css';
import NavMenu from "./NavMenu";

const Header = () => {
  return (
    <div>
      <Top/>
      <Body/>
      <NavMenu/>
    </div>
  );
};

export default Header;
