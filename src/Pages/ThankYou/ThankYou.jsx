import React from "react";
import { Link } from "react-router-dom";
import { Breadcrumb } from "../../Components";

const ThankYou = () => {
  return (
    <div>
        <Breadcrumb/>
      <div className="flex items-center justify-center h-screen">
        <div className="container">
          <div className="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 className="text-4xl font-bold">Thank You !</h1>
            <p className="!mt-4 text-center">
              Thank you for your interest! Check your email for a link to the
              guide.
            </p>
            <Link to={"/"} className="!mt-4 inline-flex items-center px-4 text-white hover:bg-black hover:text-white   bg-main py-3 focus:outline-none focus:ring">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <button to="/" className="text-sm font-medium ">Back To Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
