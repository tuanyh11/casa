import React from "react";
import Body from "./Components/Body";
import Top from "./Components/Top";
import './style.css';
import NavMenu from "./Components/NavMenu";

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
