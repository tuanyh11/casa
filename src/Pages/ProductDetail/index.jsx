import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { getProduct } from "../../api";
import { Breadcrumb } from "../../Components";

const ProductDetail = () => {
  const loc = useLocation();

  const pathname = loc.pathname.substring(1).split("/");

  console.log(pathname?.[1]);

  const params = new URLSearchParams(loc.search);

  const obj = Object.fromEntries(Array.from(params.entries()));
  const [previewImage, setPreviewImage] = useState()

  const { data } = useQuery({
    queryKey: ["product-detail", pathname[1]],
    queryFn: () => getProduct({ ...obj, slug: pathname?.[1] }),
  });

  console.log(data);

  useEffect(() => {
    setPreviewImage(data?.acf_product?.imageProduct?.[0]?.imageUrlProduct)
  }, [data])

  const productCate = data?.productCategories?.nodes

  const images = data?.acf_product?.imageProduct

  const settings = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1
  };

  return (
    <div>
      <Breadcrumb
        customPathname={
          <div>
            <Link to={"/"}>Home</Link>{" "}
            {
              productCate?.map((item) => <Link key={item.id} to={`/shop/${item?.slug}`}>{item.name}</Link>)
            }

            <span className="">{pathname?.[1]}</span>
            
          </div>
        }
        label={"product"}
      />

      <div className="content-page">
        <div className="container">
          <div className="row">
            <div className=" screen-991:w-6/12 px-15">
              <div className="">
                <div >
                  <img src={previewImage} alt="" className="w-full block" loading="lazy" decoding="async" />
                </div>

                <div className="mx-[-5px]">
                  <Slider {...settings}>
                    {images?.map((item) => {
                      return (
                        <div key={item?.imageUrlProduct} className="px-[5px]">
                          <div >
                            <img src={item?.imageUrlProduct} loading="lazy" alt="" srcset="" decoding="async" />
                          </div>
                        </div>
                      )
                    })}
                  </Slider>
                </div>
              </div>
            </div>
            <div className=" screen-991:w-6/12 px-15"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
