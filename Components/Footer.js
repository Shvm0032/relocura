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
        className="bg-gray-100 text-[#1C398E] md:pt-14 pt-10 pb-10 px-6 md:px-10"
      >
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-x-12 gap-y-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-block ">
              <img
                src="/atlas-footer-logo.png"
                alt="Company Logo"
                className="h-20 w-36"
              />
            </Link>

            <p className="text-gray-600  text-justify text-sm leading-6 ">
              We provide legal relocation support to Portugal including
              documents, training, travel, and integration assistance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">
              Quick Links
            </h3>

            <ul className="space-y-2 text-gray-600 text-sm text-left">
              <li>
                <a href="#who" className="hover:text-[#1C398E] ">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#1C398E]">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#what" className="hover:text-[#1C398E]">
                  What You Get
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1C398E]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1C398E]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">Services</h3>

            <ul className="space-y-2 text-gray-600 text-sm text-left">
              <li>
                <a href="#who" className="hover:text-[#1C398E]">
                  Who We Are
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#1C398E]">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#what" className="hover:text-[#1C398E]">
                  What You Get
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#1C398E]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#1C398E]">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-left">Contact Us</h3>

            <a
              href="tel:"
              className="flex items-center gap-3 text-gray-600 hover:text-[#1C398E] text-sm mb-2 text-left"
            >
              <Phone size={18} /> +61 563XXXXXX
            </a>

            <a
              href="mailto:atlas.solutionslda@gmail.com"
              className="flex items-center gap-3 hover:text-[#1C398E] text-gray-600 text-sm mb-2 text-left"
            >
              <Mail size={18} /> atlas.solutionslda@gmail.com
            </a>

            <a
              href=""
              className="flex items-center gap-3 hover:text-[#1C398E] text-gray-600 text-sm mb-5 text-left"
            >
              <MapPin size={18} /> Lisbon, Portugal
            </a>

            <div className="flex gap-4 mt-4">
              <Link href="#" className="text-[#1C398E] ">
                <Facebook size={20} />
              </Link>
              <Link href="#" className="text-[#1C398E] ">
                <Instagram size={20} />
              </Link>
              <Link href="#" className="text-[#1C398E] ">
                <Linkedin size={20} />
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom bar */}
      <div className="bg-[#1C398E] border-t border-gray-50 text-center py-4 text-gray-300 text-sm">
        © {new Date().getFullYear()} Atlas Expert Solution. All rights reserved.
      </div>

      {/* Scroll To Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className={`fixed bottom-6 right-6 p-3 hover:cursor-pointer rounded-full shadow-lg transition-all duration-300 z-50
            ${
              isNearFooter
                ? "bg-white text-[#1C398E]"
                : "bg-[#1C398E] text-white"
            }
          `}
        >
          <ArrowUp size={22} />
        </button>
      )}
    </>
  );
}
