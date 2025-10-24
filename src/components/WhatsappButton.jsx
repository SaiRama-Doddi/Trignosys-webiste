import React, { useState, useEffect } from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const [showButton, setShowButton] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    if (window.scrollY > lastScrollY) {
      // Scrolling down
      setShowButton(false);
    } else {
      // Scrolling up
      setShowButton(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <a
      href="https://wa.me/918500734632?text=Hello%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services."
      target="_blank"
      rel="noopener noreferrer"
      className={`
        fixed bottom-6 right-6 z-50 flex items-center justify-center
        w-12 h-12 bg-green-500 text-white rounded-full shadow-lg
        transition-transform duration-300 ease-in-out
        ${showButton ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"}
      `}
    >
      <FaWhatsapp size={28} />
    </a>
  );
}
