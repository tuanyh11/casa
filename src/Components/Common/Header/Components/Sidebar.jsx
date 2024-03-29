import { AnimatePresence, motion } from "framer-motion";
import React, { useRef } from "react";
import { instagramImg, socialMedia } from "../../../../assets/data";
import { useClickInsideOutside } from "../../../../hooks";
import ImageHover from "../../../Ui/ImageHover/ImageHover";

const Sidebar = ({ openSidebar, onOpenSidebar }) => {

  

  const containerRef = useRef()
  
  const handleClickInside = () => {
    onOpenSidebar(false)
  }
  useClickInsideOutside(containerRef, handleClickInside)

  return (
    <>

      <AnimatePresence>
        { openSidebar ? (
          <div >
            <motion.div
              transition="all 0.4s ease-out 0s"
              animate={{opacity: [0, 1]}}
              exit={{opacity: 0}}
              className=" fixed inset-0 z-[999999] bg-[rgba(0,0,0,0.3)] "
              ref={containerRef}
            ></motion.div>

            <motion.div
              animate={{x: [660, 0]}}
              transition={{duration: 0.6, ease: [0.77, 0, 0.175, 1]}}
              className={`aside-box-content  z-[9999999] scrollbar-none`}
              exit={{x: 800}}
            >
              <button
                onClick={() => onOpenSidebar(false)}
                className="close-login-form transition-main absolute top-6 right-6 flex justify-center items-center font-bold w-[30px] !text-black-#303030 h-[30px] transition-main hover:text-main "
              >
              <i class="lni lni-close text-base font-bold flex-1 "></i>
              </button>
              <div className="md:-mx-[17px]">
                <div className="mb-[54px]">
                  <div className="mt-[74px] text-[14px] text-black-#303030 mb-[18px]">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </div>

                  <div className="">
                    <div className="mb-[2px] text-[14px] text-black-#303030">
                      <i className="mr-[10px] fa-light fa-phone text-main"></i>
                      +1123456789
                    </div>

                    <div className="mb-[2px] text-[14px] text-black-#303030">
                      <i className="mr-[10px] fa-light fa-location-dot text-main"></i>
                      433-447 San Pedro St, Los Angeles, CA 90013
                    </div>

                    <div className="mb-[2px] text-[14px] text-black-#303030">
                      <i className="mr-[10px] fa-light fa-envelope text-main"></i>
                      Support@obachan.com
                    </div>
                  </div>
                </div>

                <div className="mb-[54px]">
                  <div className="mb-[27px]">
                    <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                      NEWSLETTER
                    </h3>
                  </div>

                  <form className="mt-5 mb-[15px] relative">
                    <input
                      required
                      placeholder="Email"
                      className=" placeholder-white  block h-[46px] leading-[46px] text-white px-5 border-none  bg-main  outline-none text-[14px] w-full font-poppins"
                    />
                    <button
                      type="submit"
                      className="fa-regular fa-arrow-right w-[46px] px-[6px] absolute top-0 right-0 bottom-0 leading-[46px] text-center text-white cursor-pointer"
                    ></button>
                  </form>
                </div>

                <div className="mb-[54px]">
                  <div className="mb-[27px]">
                    <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                      FOLLOW US
                    </h3>
                  </div>

                  <div className="mt-5 mb-[15px] relative">
                    {socialMedia.map((item, index) => (
                      <a
                        key={index}
                        href={item.link}
                        className={`${item.icon} text-lg leading-6 px-[13px] first:pl-0`}
                      ></a>
                    ))}
                  </div>
                </div>

                <div className="mb-[54px]">
                  <div className="mb-[27px]">
                    <h3 className=" font-medium text-[14px] font-poppins leading-[1.1] text-black-#222222">
                      INSTAGRAM
                    </h3>
                  </div>

                  <ul className="mt-5 mb-[15px] flex flex-wrap relative">
                    {instagramImg.map((item, index) => (
                      <li key={index} className="w-1/2">
                        <ImageHover link={item.link} url={item.image} />
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;
