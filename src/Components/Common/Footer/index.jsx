import React from "react";
import { Link } from "react-router-dom";
import { instagramImg, payments, quickLinks, socialMedia } from "../../../assets/data";
import ImageHover from "../../Ui/ImageHover/ImageHover";
import "./style.css";

const Footer = () => {
  return (
    <footer>
      <div
        className="bg-overlay relative bg-no-repeat  bg-center bg-cover bg-fixed "
        style={{
          backgroundImage: `url(http://casa.7uptheme.net/wp-content/uploads/2019/06/obc-banner-registry.jpg?id=1663)`,
        }}
      >
        <div className="container-custom max-[1366px]:!max-w-[1200px]">
          <div className="footer-newsletter2 text-white flex-wrap">
            <div className="title-box px-[15px] max-[1199px]:w-full max-[1199px]:text-center max-[1199px]:mb-[30px]">
              <h3 className="title-block title36 font-medium text-uppercase text-white">
                Newsletter
              </h3>
              <p className="desc-block">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod.
              </p>
            </div>
            <div className="w-6/12 px-15 form-newsletter max-[1199px]:w-full">
              <form id="mc4wp-form-3" className="mc4wp-form mc4wp-form-482">
                <div className=" max-[1199px]:flex justify-center table w-full">
                  <input
                    type="email"
                    name="EMAIL"
                    placeholder="ENTER YOUR EMAIL"
                    required=""
                    className="w-full placeholder:text-white"
                  />
                  <div className="submit-form">
                    <button type="submit">SUBCRIBE</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-[45px] pb-[50px] md:pt-[65px] md:pb-[70px] screen-1200:pt-[112px] screen-1200:pb-[113px] bg-[#211f1f] ">
      
        <div className=" container-custom max-[1366px]:!max-w-[1200px]">
          <div className="flex flex-wrap mx-[-15px]">
            <div className="w-full md:w-6/12 mb-10 lg:mb-0  lg:w-3/12 px-15">
              <div className="">
                <Link to={"/"} className="mb-[27px] -mt-1 block">
                  <img
                    src="https://casa.7uptheme.net/wp-content/uploads/2019/10/lgopng.png"
                    alt="logo"
                    className="inline-block"
                  />
                  <span className=" text-white font-bold align-middle ml-[7px] font-poppins text-[36px] uppercase">
                    Casa
                  </span>
                </Link>

                <div className="max-w-[280px]">
                  <p className="text-[#999] leading-6">
                    Lorem ipsum dolor sit amet, consec tetur a elit. Inutark
                    ullamcorper leo, ege euismod orci natoquepen etma.
                  </p>
                </div>

                <div className="flex mt-[23px] -mx-2">
                  {payments.map(({ link, icon }) => (
                    <div key={link} className="px-2">
                      <a href={link} className=" text-black-#222222">
                        <i
                          className={`${icon} text-[#999] text-[24px] hvr-wobble-skew`}
                        ></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full screens-425:w-6/12  mb-10 lg:mb-0 lg:w-3/12 px-15">
              <div>
                <h3 className=" uppercase text-white font-medium mb-[26px] text-[16px] leading-7 ">
                  QUICK LINKS
                </h3>
                {quickLinks.map((link) => (
                  <Link
                    className="block text-[#999] mb-[11px] last:mb-0"
                    key={link.path}
                    to={link.path}
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
            </div>
            <div className="w-full screens-425:w-6/12  mb-10 lg:mb-0 lg:w-3/12 px-15">
              <div>
                <h3 className=" uppercase text-white font-medium mb-[26px] leading-7 text-[16px] ">
                  FIND A STORE
                </h3>
                <div className="text-[#999]">
                  <div className="mb-[11px]">
                    <i class="fa-regular fa-location-dot mr-[7px]"></i>
                    Hemlock, Brooklyn, NY 11208
                  </div>

                  <div className="mb-[11px]">
                    <i class="fa-regular fa-location-dot mr-[7px]"></i>5 Bridge,
                    Brooklyn, NY 11201
                  </div>

                  <div className="mb-[11px]">
                    <i class="fa-light fa-phone mr-[7px]"></i>
                    +101329621999
                  </div>
                </div>

                <div className="text-[#999] mt-[23px]">
                  {socialMedia.map((item, index) => (
                    <a
                      key={index}
                      href={item.link}
                      className={`${item.icon} text-lg leading-6 px-2 screen-1200:px-[13px] first:pl-0 `}
                    ></a>
                  ))}
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12  mb-10 lg:mb-0 lg:w-3/12 px-15">
              <div className="flex flex-wrap -mx-[0.5px] max-w-[300px] ">
                {instagramImg.concat(instagramImg.slice(0, 2)).map((item, index) => (
                  <div key={index} className="w-4/12 p-[0.5px]">
                    <ImageHover link={item.link} url={item.image} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-[#2f316f]">

        <div className="container-custom  text-center py-[25px] lg:py-[37px]">
                  <p className="text-white">Copyright © 2019 7uptheme Ltd. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
