import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';

const ContentLeft = ({ previewImage = '', onSetPreviewImage = () => { }, data = [] }) => {
    const [{ x, y }, setMousePosition] = useState({ x: 0, y: 0 });
    const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
    const settings = {
      dots: false,
      slidesToShow: 4,
      slidesToScroll: 1,
      arrow: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
    };
  
    const ref = useRef();
    const innerRef = useRef();
  
    const [isZoomed, setIsZoomed] = useState(false);
  


    const handleMouseMove = (e) => {
        const { left, top, width: w, height: h } = ref.current.getBoundingClientRect();
       if(innerRef.current) {
        const { width, height } = innerRef.current.getBoundingClientRect();
        setMousePosition({ x: e.pageX - left - width / 2, y: e.clientY - top - height / 2 });
        const x = (e.clientX - left) ;
        const y = (e.clientY - top);
        const backgroundPosX = ((x / w) * 100);
        const backgroundPosY = ((y / h) * 100);
        setBackgroundPosition(`${backgroundPosX}% ${backgroundPosY}%`);
       }
      };
  
  
    const handleZoomIn = () => {
      setIsZoomed(true);
    };
  
    const handleZoomOut = () => {
      setIsZoomed(false);
    };

  
    return (
      <div>
        <div>
          <div
            ref={ref}
            onMouseLeave={handleZoomOut}
            onMouseEnter={handleZoomIn}
            onMouseMove={handleMouseMove}
            className="relative  overflow-hidden"
          >
            <img src={previewImage} alt="" className="w-full block" loading="lazy" decoding="async" />
            {isZoomed && (
              <div
                ref={innerRef}
                className="image-magnifying z-[99]"
                style={{
                  backgroundImage: `url(${previewImage})`,
                  backgroundPosition,
                  left: `${x}px`,
                  top: `${y}px`,
                }}
              ></div>
            )}
          </div>

          <div className="mx-[-5px] mt-[10px]">
                    <Slider {...settings} className="product-detail-slider group">
                        {data?.map((item) => {
                            return (
                                <div key={item?.imageUrlProduct} className="px-[5px]">
                                    <div
                                        className="cursor-pointer"
                                        onClick={() =>
                                            onSetPreviewImage(item.imageUrlProduct)
                                        }
                                    >
                                        <img
                                            src={item?.imageUrlProduct}
                                            loading="lazy"
                                            alt=""
                                            srcset=""
                                            decoding="async"
                                            className={`${previewImage === item.imageUrlProduct
                                                ? "active"
                                                : ""
                                                }`}
                                        />
                                    </div>
                                </div>
                            );
                        })}
                    </Slider>
                </div>
        </div>
      </div>
    );
  };

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={
                "absolute top-1/2 -translate-y-[60%] right-[-25px] group-hover:right-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0 "
            }
            onClick={onClick}
        >
            <button className=" w-10 h-10 text-[#111] text-xl z-[9999] ">
            <i className="lni lni-chevron-right"></i>
            </button>
        </div>
    );
}

function PrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={
                "absolute top-1/2 -translate-y-[60%]  z-[9999] left-[-25px] group-hover:left-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0"
            }
            onClick={onClick}
        >
            <button className=" w-10 h-10 text-[#111] text-xl">
            <i className="lni lni-chevron-left"></i>
            </button>
        </div>
    );
}

export default ContentLeft