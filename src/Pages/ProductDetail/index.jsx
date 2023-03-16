import React from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../Components";

const ProductDetail = () => {
  const loc = useLocation();

  console.log(loc.pathname.split("/").slice(1, 3))

  return (
    <div>
      <Breadcrumb customPathname={<div><Link to={"/"} >Home</Link> </div>} label={"product"} />
    </div>
  );
};

export default ProductDetail;
