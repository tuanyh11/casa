import React, { useRef, useState } from "react";
import { useClickInsideOutside } from "../../../../hooks";
import { Link } from "react-router-dom";

import { AnimatePresence, motion } from "framer-motion";

const NavMobile = ({ menuItems = [] }) => {
  const [openNav, closeNav] = useState(false);

  const containerRef = useRef();

  const handleClickInside = () => {
    closeNav(false);
  };
  useClickInsideOutside(containerRef, handleClickInside);

  return (
    <div>
      <button onClick={() => closeNav(true)} className="toggle-mobile-menu">
        <span></span>
      </button>

      {/* {transition((style, item) =>
              item ? (
                <animated.div className={"main-nav"}>
                  <animated.div
                    ref={containerRef}
                    style={{ ...style.opacity, transitionDuration: "0.6s" }}
                    className=" fixed inset-0 z-[999999] bg-[rgba(0,0,0,0.3)] "
                  ></animated.div>

                  <animated.nav
                    style={{
                      ...style,
                      transitionTimingFunction:
                        "cubic-bezier(0.77, 0, 0.175, 1)",
                      transitionDuration: "0.4s",
                    }}
                    className={` !z-[999999999999] `}
                  >
                    <button
                      onClick={() => closeNav(false)}
                      className="fa-sharp fa-solid fa-xmark close-mobile-menu  "
                    >
                    </button>
                    <ul >
                      {menuItems.map((item) => (
                        <li className="block" key={item.name}>
                          <Link
                            className={` block `}
                            to={item.link}
                          >
                            {item.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </animated.nav>
                </animated.div>
              ) : null
            )} */}

      <AnimatePresence>
        {openNav && (
          <motion.div className={"main-nav"}>
            <motion.div
              animate={{ opacity: [0, 1] }}
              className=" fixed inset-0 z-[999999] bg-[rgba(0,0,0,0.3)] "
              transition="all 0.4s ease-out 0s"
              exit={{opacity: 0}}
            ></motion.div>

            <motion.nav
              className={` !z-[999999999999] `}
              animate={{ x: [-400, 0]}}
              transition="all 0.3s ease-out 0s"
              exit={{ x: -400 }}
            >
              <button
                onClick={() => closeNav(false)}
                className="fa-sharp fa-solid fa-xmark close-mobile-menu  "
              ></button>
              <ul>
                {menuItems.map((item) => (
                  <li className="block" key={item.name}>
                    <Link className={` block `} to={item.link}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavMobile;
