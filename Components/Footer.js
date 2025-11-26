"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ArrowUp,
} from "lucide-react";

export default function Footer() {
  const [showButton, setShowButton] = useState(false);
  const [isNearFooter, setIsNearFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("main-footer");

      // Show Button
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }

      // Check footer position for dynamic button color
      if (footer) {
        const footerTop = footer.getBoundingClientRect().top;
        setIsNearFooter(footerTop < window.innerHeight - 150);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* MAIN FOOTER */}
      <footer
        id="main-footer"
        className="bg-blue-900 text-white  pt-14 pb-10 px-16"
      >
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
          
          {/* About */}
          <div className="pr-10">
            <Link href="/" className="inline-block mb-4">
              <img src="/logo.png" alt="Company Logo" className="h-15 w-40" />
            </Link>

            <p className="text-gray-200 text-justify text-sm leading-6">
              We provide legal relocation support to Portugal including
              documents, training, travel, and integration assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div className="pl-10">
            <h3 className="text-lg font-semibold  mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li>
                <a href="#who" className="hover:underline">Who We Are</a>
              </li>
              <li>
                <a href="#process" className="hover:underline">Our Process</a>
              </li>
              <li>
                <a href="#what" className="hover:underline">What You Get</a>
              </li>
              <li>
                <a href="#faq" className="hover:underline">FAQ</a>
              </li>
              <li>
                <a href="#contact" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>

            <p className="flex items-center gap-3 text-gray-200 text-sm mb-2">
              <Phone size={18} /> +91 98765 43210
            </p>

            <p className="flex items-center gap-3 text-gray-200 text-sm mb-2">
              <Mail size={18} /> info@company.com
            </p>

            <p className="flex items-center gap-3 text-gray-200 text-sm mb-5">
              <MapPin size={18} /> Lisbon, Portugal
            </p>

            <div className="flex gap-4 mt-4">
              <Link href="#" className="hover:text-blue-300">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="hover:text-blue-300">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="bg-[#1C398E] border-t border-gray-50 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} CompanyName. All rights reserved.
      </div>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 hover:cursor-pointer rounded-full shadow-lg transition-all duration-300 
            ${isNearFooter ? "bg-white text-[#1C398E]" : "bg-[#1C398E] text-white"}
          `}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
