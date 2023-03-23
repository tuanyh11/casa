import React, { useEffect, useRef, useState } from 'react'
import Slider from 'react-slick';

const ContentLeft = ({ previewImage = '', onSetPreviewImage = () => { }, data = [] }) => {
    const [{x, y}, setMousePosition] = useState({ x: 0, y: 0 });
    const settings = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrow: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    const ref = useRef()
    const innerRef = useRef()

    const [isZoomed, setIsZoomed] = useState(false)

    useEffect(() => {
        const handleMouseMove = (e) => {
            const {left, top} = ref.current.getBoundingClientRect()
            const {width, height} = innerRef.current.getBoundingClientRect()
            console.log(e.pageX );
            setMousePosition({x: e.pageX  -left - (width / 2) , y: e.clientY - top - (height / 2) });
        }
    
        window.addEventListener("mousemove", handleMouseMove)
        return () => window.removeEventListener("mousemove", handleMouseMove)
    }, [isZoomed])


    return (
        <div>
            <div>
                <div ref={ref} onMouseLeave={() => setIsZoomed(false)} onMouseOver={() => setIsZoomed(true)} className='relative'>
                    <img
                        src={previewImage}
                        alt=""
                        className="w-full block"
                        loading="lazy"
                        decoding="async"
                    />

                    {isZoomed && <div ref={innerRef} className="image-magnifying" style={{backgroundImage: `url(${previewImage})`, backgroundPosition: `${x}px ${y}px`, left: `${x}px`, top: `${y}px`}}>

                    </div> }
                </div>

                {/* <div className="mx-[-5px] mt-[10px]">
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
                </div> */}
            </div>
        </div>
    )
}

function NextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={
                "absolute top-1/2 -translate-y-[60%] right-[-25px] group-hover:right-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0 "
            }
            onClick={onClick}
        >
            <button className="fas fa-chevron-right w-10 h-10 text-[#111] text-xl z-[9999] "></button>
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
            <button className="fas fa-chevron-left w-10 h-10 text-[#111] text-xl"></button>
        </div>
    );
}

export default ContentLeft