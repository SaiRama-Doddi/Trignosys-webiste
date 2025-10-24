import React from "react";
import {
  FaTwitter,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
   FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

import {
  FaCode,
  FaRocket,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";


const Footer = () => {
  return (
    <footer className="bg-[#1e3a8a] text-[#fff] py-14">
      <div className="container mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Brand Info */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-[#fff]">
            Trignosys Software Solutions
          </h2>
          <p className="text-sm text-[#fff] leading-relaxed mb-6">
            Crafting modern web experiences with React, Tailwind, and GSAP.
            Empowering innovation through technology and design excellence.
          </p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            <a
              href="#"
              className="hover:text-[#fff] transition-transform transform hover:scale-110"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#fff] transition-transform transform hover:scale-110"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#fff] transition-transform transform hover:scale-110"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="hover:text-[#fff] transition-transform transform hover:scale-110"
            >
              <FaInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fff]">
            Quick Links
          </h3>
          <ul className="space-y-2 text-[#fff]">
            <li>
              <a href="#home" className="hover:text-blue-500 transition-colors">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-blue-500 transition-colors">
                About
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-blue-500 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-blue-500 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Our Mission (optional column) */}
   <div>
  <h3 className="text-lg font-semibold mb-4 text-[#fff]">Our Focus</h3>
  <ul className="space-y-3 text-[#fff] text-sm leading-relaxed">
    <li className="flex items-center gap-3">
      <FaCode className="text-[#fff] text-lg" />
      <span>Delivering top-notch software solutions</span>
    </li>
    <li className="flex items-center gap-3">
      <FaRocket className="text-[#fff] text-lg" />
      <span>Empowering startups & enterprises</span>
    </li>
    <li className="flex items-center gap-3">
      <FaLightbulb className="text-[#fff] text-lg" />
      <span>Innovative design & development</span>
    </li>
    <li className="flex items-center gap-3">
      <FaHandshake className="text-[#fff] text-lg" />
      <span>Customer-first approach</span>
    </li>
  </ul>
</div>


        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-[#fff]">
            Contact Us
          </h3>
          <ul className="space-y-4 text-[#fff]">
            <li className="flex items-start gap-3">
       <FaMapMarkerAlt size={22} className="text-[#fff] mt-1 " />
              <span className="hover:text-[yellow]">
                59-61-3/1, Complex, Dwaraka Nagar, Beside Dr. K. Murali Mohan
                Hospital,
                Visakhapatnam - 530016
              </span>
            </li>
            <li className="flex items-center gap-3">
              <FaEnvelope className="text-[#fff]" />
              <a
                href="mailto:info@trignosys.com"
                className="hover:text-[#fff] transition-colors hover:text-[yellow]"
              >
                info@trignosys.com
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#fff]" />
              <a
                href="tel:6303130025"
                className="hover:text-[yellow] transition-colors"
              >
                +91 63031 30025
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-blue-100 pt-6 text-center text-[#fff] text-sm">
        © {new Date().getFullYear()} Trignosys Software Solutions. All rights
        reserved.
      </div>
    </footer>
  );
};

export default Footer;
