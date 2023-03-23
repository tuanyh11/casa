import { useQueries, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct, getSaleProducts } from "../../api";
import { socialMediaIconsBlog } from "../../assets/data";
import { Breadcrumb, Product } from "../../Components";
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
          <div className="row mb-[100px]">
            <div className="w-full screen-991:w-6/12 px-15">
              <ContentLeft onSetPreviewImage={setPreviewImage} previewImage={previewImage} data={images} />
            </div>
            <div className="w-full screen-991:w-6/12 px-15">
              <ContentRight data={productDetail} />
            </div>
          </div>

          <div>
            <div className="detail-tabs tab-horizontal mt-[-10px]">
              <TabContent />
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

            <ProductRelated data={saleProducts}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
