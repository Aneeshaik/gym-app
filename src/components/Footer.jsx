import React, { useState, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import "../../globals.css"; // Corrected import path

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

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
      className="bg-gray-800 bg-glow-gradient neon-border-purple text-white flex justify-between items-center py-4 px-6 rounded-t-md shadow-lg"
    >
      <p className="max-sm:text-center neon-text-pink">
        &copy; 2024 Gym App.
        <span className="text-center mx-6 max-sm:hidden">All rights reserved.</span>
      </p>
      <p className="flex items-center">
        <span className="neon-text-purple-intense">Back to the top</span>
        {isVisible && (
          <button
            className="ml-2 p-1 neon-border hover:scale-110 transform transition duration-300 ease-in-out rounded-full"
            onClick={scrollToTop}
            aria-label="Scroll to Top"
          >
            <BsFillArrowUpSquareFill className="text-3xl neon-text-purple-intense" />
          </button>
        )}
      </p>
    </footer>
  );
}
