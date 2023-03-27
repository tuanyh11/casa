import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct, getSaleProducts } from "../../api";
import { socialMediaIconsBlog } from "../../assets/data";
import { Breadcrumb, Product } from "../../Components";
import { useCartStore } from "../../Components/Store";
import ContentLeft from "./Components/Content/ContentLeft";
import ContentRight from "./Components/Content/ContentRight";
import ProductRelated from "./Components/Content/ProductRelated";
import TabContent from "./Components/Content/TabContent";
import "./style.css";

const ProductDetail = () => {
  const loc = useLocation();

  const pathname = loc.pathname.substring(1).split("/");

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  const [previewImage, setPreviewImage] = useState();

  const [{ data: productDetail }, { data: saleProducts }] = useQueries({
    queries: [
      {
        queryKey: ["product-detail", pathname[1]],
        queryFn: () => getProduct({ ...obj, slug: pathname?.[1] }),
        refetchOnWindowFocus: false,
      },
      {
        queryKey: ["product-sale", pathname[1]],
        queryFn: () => getSaleProducts(),
        refetchOnWindowFocus: false,
      },
    ],
  });

  console.log(saleProducts);

  useEffect(() => {
    setPreviewImage(
      productDetail?.acf_product?.imageProduct?.[0]?.imageUrlProduct
    );
  }, [productDetail]);

  const productCate = productDetail?.productCategories?.nodes;

  const images = productDetail?.acf_product?.imageProduct;

  const { items, addItem } = useCartStore();

  const isInCartStore = items?.find((item) => item.id === productDetail?.id);

  return (
    <div>
      <Breadcrumb
        customPathname={
          <div>
            <Link to={"/"}>Home</Link>{" "}
            {productCate?.map((item) => (
              <Link key={item.id} to={`/shop?cate=${item?.slug}`}>
                {item.name}
              </Link>
            ))}
            <span className="">{pathname?.[1]}</span>
          </div>
        }
        label={"product"}
      />

      <div className="content-page product-detail  my-[50px] md:!my-[70px]  screen-1200:!my-[100px]">
        <div className="container">
          {isInCartStore && (
            <div
              className=" mb-7 py-[18px] pl-[65px] pr-[30px] border-l-[2px] bg-[rgba(76,175,80,0.1)] border-[#4CAF50] relative flex  justify-between "
              role="alert"
            >
              <div>
                <button className="w-5 h-5 left-8 top-5 rounded-full bg-[#4CAF50] text-white absolute ">
                  <i className="fa-duotone fa-check"></i>
                </button>
                “{productDetail?.name}” has been added to your cart.{" "}
              </div>
              <Link
                to={`/cart`}
                tabindex="1"
                className="leading-[46px] h-[46px] px-[25px] bg-main text-white font-poppins text-[14px] uppercase font-medium tracking-[1.6px] hover:bg-black-#222222 hover:text-white "
              >
                View cart
              </Link>{" "}
            </div>
          )}
          <div className="row mb-[100px]">
            <div className="w-full screen-991:w-6/12 px-15">
              <ContentLeft
                onSetPreviewImage={setPreviewImage}
                previewImage={previewImage}
                data={images}
              />
            </div>
            <div className="w-full screen-991:w-6/12 px-15">
              <ContentRight data={productDetail} onAddToCart={() => addItem(productDetail)} />
            </div>
          </div>

          <div>
            <div className="detail-tabs tab-horizontal mt-[-10px]">
              <TabContent data={productDetail} />
            </div>
          </div>

          <div>
            <div className="mt-[90px]">
              <div className="title-related-product flex items-center justify-between">
                <h2 className="title36 font-bold text-uppercase single-title  relative mb-[60px]">
                  On Sale Now{" "}
                </h2>
                <Link
                  className="title14 color poppins-font font-medium text-capitalize pull-right mb-[60px] font-poppins text-main"
                  to={"/shop"}
                >
                  Shop Full Collection
                </Link>
              </div>
            </div>

            <ProductRelated data={saleProducts} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
