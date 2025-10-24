import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTopButton = () => {
  // State to track visibility
  const [visible, setVisible] = useState(false);

  // Effect to toggle button visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setVisible(true);  // Show button after scrolling 300px
      } else {
        setVisible(false); // Hide button near top
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    // Cleanup event listener on unmount
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed bottom-8 right-8 z-50
        bg-blue-600 text-white p-3 rounded-full shadow-lg
        transition-all duration-300 transform
        hover:bg-blue-700 hover:scale-110
        ${visible ? "opacity-100" : "opacity-0 pointer-events-none"}
      `}
    >
      <FaArrowUp className="text-xl" />
    </button>
  );
};

export default ScrollToTopButton;
