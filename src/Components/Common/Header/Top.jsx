import React from "react";
import { Link } from "react-router-dom";

const Top = () => {
  return (
    <div>
      <div className="bg-blue-#2f316f px-[50px] py-2 ">
        <div className="flex items-center justify-center ">
          <div className=" w-6/12 md:text-start text-center">
            <p className="desc !text-white">Free Shipping on orders over $200*</p>
          </div>
          <div className="w-6/12 hidden md:block  ">
            <div >
              <ul className="flex justify-end item-center  ">
                <li className="text-white px-[10px]">
                  <Link to={"/about"} >About Us</Link>
                </li>
                <li className="text-white px-[10px]">
                  <a href="#">FAQ</a>
                </li>
                <li className="text-white px-[10px]">
                  <a href="#">Support</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
