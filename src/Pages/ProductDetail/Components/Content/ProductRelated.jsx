import React from 'react'
import Slider from 'react-slick';
import { Product } from '../../../../Components';

const ProductRelated = ({data= []}) => {

    const productSaleSetting = {
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 4,
        arrow: true,
        nextArrow: <NextSaleArrow />,
        prevArrow: <PrevSaleArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                    arrow: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrow: false,
                },
            },
        ],
    };
    return (
        <div>
            <div className="-mx-[15px]">
                <Slider
                    {...productSaleSetting}
                    className="product-detail-slider group"
                >
                    {data?.map((product) => {
                        return (
                            <div key={product.id}>
                                <div className=" mx-[15px] mb-[30px]">
                                    <Product data={{ ...product }} />
                                </div>
                            </div>
                        );
                    })}
                </Slider>
            </div>
        </div>
    )
}

function NextSaleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={
                "absolute top-1/2 -translate-y-[60%]  right-[15px] group-hover:right-2 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0 "
            }
            onClick={onClick}
        >
            <button className="fas fa-chevron-right  w-[60px] h-[60px] text-[36px] w-10 h-10 text-[#111] text-xl z-[9999] "></button>
        </div>
    );
}

function PrevSaleArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={
                "absolute top-1/2 -translate-y-[60%]  z-[9999] left-[15px]  group-hover:left-0 group-hover:opacity-100 transition-all duration-[0.4s] ease-out opacity-0"
            }
            onClick={onClick}
        >
            <button className="fas fa-chevron-left w-[60px] h-[60px] text-[36px] text-[#111] text-xl"></button>
        </div>
    );
}

export default ProductRelated