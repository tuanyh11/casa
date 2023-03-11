import React from "react";
import "./style.css";

const LoginForm = ({ onClose }) => {
  console.log(onClose);

  return (
    <div>
      <div className="py-[50px] popup-form">
        <button className="close-login-form transition-main hover:text-main ">
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

          <div className="">
            <button className=" button uppercase block ">
                log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
