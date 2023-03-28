import React from "react";
import "./style.css";
import { Link, useLocation } from "react-router-dom";

const Breadcrumb = ({ image, label, customPathname }) => {
  const loc = useLocation();
  // console.log(loc);
  const pathname = loc.pathname.substring(1).split("/");

  return (
    <div className="wrap-bread-crumb">
      <div className="bg-overlay"> </div>
      <div class="bread-crumb">
        <div class="max-w-[1320px] w-full m-auto px-[15px] text-center">
          <div class="bread-crunb-inner">
            <h2>{label}</h2>

            {customPathname ? (
              <div>
                <div className="relative text-[14px] text-[#222] capitalize">
                  {customPathname}
                </div>
              </div>
            ) : (
              <div>
                <Link to="/">Home</Link>
                <span className="relative text-[14px] text-[#222] capitalize">
                  {pathname}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
