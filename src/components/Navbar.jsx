import React, { useState } from "react";

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="bg-[#1e3a8a] shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tight text-[#fff] hover:text-indigo-700 transition-colors duration-200"
        >
         TRIGNOSYS
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-10">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setActive(link.name)}
              className={`relative text-lg font-medium transition-colors duration-200 
                ${
                  active === link.name
                    ? "text-[#fff] after:content-[''] after:absolute after:w-full after:h-[2px] after:bg-[#fff] after:bottom-[-4px] after:left-0"
                    : "text-[#fff] hover:text-[yellow]"
                }`}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:[#1c6bdd]"
        >
          {isOpen ? (
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-7 h-7 text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white  shadow-md">
          <nav className="flex flex-col space-y-3 p-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActive(link.name);
                  setIsOpen(false);
                }}
                className={`text-base font-medium transition-colors duration-200 ${
                  active === link.name
                    ? "text-[#fff] underline underline-offset-4"
                    : "text-[#fff ] hover:text-[#1c6bdd]"
                }`}
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
