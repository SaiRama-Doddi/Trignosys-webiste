import React from "react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-blue-800 py-12 shadow-md">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        
        {/* Brand & Description */}
        <div className="flex flex-col items-start">
          <h2 className="text-2xl font-bold mb-2">MyBrand</h2>
          <p className="text-blue-600 max-w-sm">
            Crafting modern web experiences with React, Tailwind, and GSAP. Stay connected and explore our services.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="#" className="hover:text-blue-500 transition-colors">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="hover:text-blue-700 transition-colors">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="hover:text-gray-900 transition-colors">
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-blue-900">Quick Links</h4>
            <a href="#" className="hover:text-blue-500 transition-colors">Home</a>
            <a href="#" className="hover:text-blue-500 transition-colors">About</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Services</a>
            <a href="#" className="hover:text-blue-500 transition-colors">Contact</a>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-2">
            <h4 className="font-semibold text-blue-900">Subscribe</h4>
            <p className="text-blue-600 text-sm">Get the latest updates right in your inbox.</p>
            <div className="flex mt-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-l-md focus:outline-none border border-blue-300 text-blue-800"
              />
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 px-4 py-2 rounded-r-md text-white font-semibold hover:from-blue-600 hover:to-blue-800 transition-all">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-blue-100 pt-6 text-center text-blue-500 text-sm">
        &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
