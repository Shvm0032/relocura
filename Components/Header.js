"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Menu,
  X,
} from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hideTopBar, setHideTopBar] = useState(false);

  // Hide Topbar on scroll
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setHideTopBar(true); // Scroll down → hide
      } else {
        setHideTopBar(false); // Scroll up → show
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="w-full fixed top-0 z-50">
      {/* ---------- TOP BAR (Hidden on mobile) ---------- */}
      <div
        className={`hidden md:flex justify-between items-center px-6 py-2 bg-[#1C398E] text-white transition-all duration-300 ${
          hideTopBar ? "-translate-y-full" : "translate-y-0"
        }`}
      >
        {/* LEFT */}
        <div className="flex items-center gap-6 text-sm">
          <span className="flex items-center gap-1">
            <Phone size={16} /> +91 9876543210
          </span>
          <span className="flex items-center gap-1">
            <Mail size={16} /> info@example.com
          </span>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-4">
          <Facebook className="cursor-pointer" size={18} />
          <Instagram className="cursor-pointer" size={18} />
          <Linkedin className="cursor-pointer" size={18} />
        </div>
      </div>

      {/* ---------- MAIN HEADER (LOGO + MENU) ---------- */}
      <div
        className={`w-full md:bg-white bg-blue-600 shadow-sm transition-all duration-300 ${
          hideTopBar ? "top-0" : "md:top-8"
        } fixed`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center py-4">
          {/* LOGO */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png" 
              alt="Logo"
              width={40} 
              height={40} 
              className="md:h-16 md:w-28 h-14 w-20"
            />
          
          </Link>

          {/* DESKTOP MENU */}
          <nav className="hidden md:flex items-center gap-8 text-gray-700">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/services">Services</Link>
            <Link href="/services">Process</Link>
            <Link href="/services">Testimonial</Link>
            <Link href="/contact-us">Contact</Link>
          </nav>

          {/* MOBILE MENU BUTTON */}
          <button
            className="md:hidden text-gray-100"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {open && (
          <div className="md:hidden bg-white text-gray-700 shadow-lg px-6 py-4 flex flex-col gap-4">
            <Link href="/" onClick={() => setOpen(false)}>
              Home
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              About
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Services
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Process
            </Link>
            <Link href="/" onClick={() => setOpen(false)}>
              Testimonial
            </Link>
            <Link href="/contact-us" onClick={() => setOpen(false)}>
              Contact
            </Link>
            <div className="flex items-center gap-4">
              <Facebook className="cursor-pointer" size={18} />
              <Instagram className="cursor-pointer" size={18} />
              <Linkedin className="cursor-pointer" size={18} />
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
