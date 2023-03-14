import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div>
      <Link to={"/"}>
        <img
          src="https://casa.7uptheme.net/wp-content/uploads/2019/10/logo2.jpg"
          alt="logo"
          className="inline-block"
        />
        <span className=" text-black-#303030 font-bold align-middle ml-[7px] font-poppins text-[36px] uppercase">
          Casa
        </span>
      </Link>
    </div>
  );
};

export default Logo;
