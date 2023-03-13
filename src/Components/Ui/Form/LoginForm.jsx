import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

const LoginForm = ({ onClose }) => {
  console.log(onClose);

  return (
    <div>
      <div className="py-[50px] popup-form">
        <button onClick={onClose} className="close-login-form transition-main hover:text-main ">
          ×
        </button>
        <div className="p-5">
          <div className="form-header mb-10">
            <h2 className="text-[24px] 2 font-poppins">LOG IN</h2>
            <p className="desc">Become a part of our community!</p>
          </div>
          <div>
            <div className="relative mb-[30px]">
              <input type="text" className="outline-none " placeholder="" />
              <label>Username or Email Address</label>
              <div className="input-focus-line"></div>
            </div>
            <div className="relative mb-[30px]">
              <input type="text" className="outline-none " placeholder="" />
              <label>Password</label>
              <div className="input-focus-line"></div>
            </div>
          </div>

          <div className="mb-7 relative">
            <input
              name="rememberme"
              type="checkbox"
              id="remembermep"
            />
            <label className="rememberme leading-6 !text-[14px] !cursor-pointer" for="remembermep">
              Remember Me
            </label>
          </div>

          <div className="mt-5 mb-[15px]">
            <button className=" button uppercase block ">
                log in
            </button>
          </div>

          <div className="pt-[10px] text-center text-black-#222222  ">
            <Link to={"/lost-password"} className="font-semibold px-[10px] hover:text-main relative hover:after:w-[calc(100%-20px)] hover:after:bg-main after:absolute after:bottom-[-2px] after:w-0 after:left-[10px] after:h-[2px] after:transition-all after:duration-[0.4s] after:ease-out ">Lost your password?</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
