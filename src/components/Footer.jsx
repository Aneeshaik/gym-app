import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";

export default function Footer() {
  const [isVisible, setIsVisible] = useState();

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <footer
      role="contentinfo"
      className=" text-white  flex justify-between items-center p-10  shadow-lg shadow-gray-500 bg-gray-900 "
    >
      <p className="max-sm:text-center text-xl">
        2024 AMyes Fit.
        <span className="text-center mx-6 max-sm:hidden text-sm text-gray-500">
          {" "}<br/>
          &copy; All rights reserved.
        </span>
      </p>
      <p className="flex ">
        Back to the top
        {isVisible && (
          <button className="mx-2" onClick={scrollToTop}>
            <BsFillArrowUpSquareFill />
          </button>
        )}
      </p>
    </footer>
  );
}
