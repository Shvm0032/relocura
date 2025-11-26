"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // top bar height (for smooth animation)
  const TOP_BAR_HEIGHT = 40; // px, adjust as needed

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setShowTopBar(false); // scrolling down
      } else {
        setShowTopBar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div className="bg-white">
      {/* ---------- TOP BAR ---------- */}
      <div
        className={`hidden md:flex fixed w-full bg-[#1C398E] text-white text-sm py-2 px-6 justify-between z-50 transition-transform duration-300`}
        style={{ transform: `translateY(${showTopBar ? 0 : -TOP_BAR_HEIGHT}px)` }}
      >
        <div className="flex items-center gap-6">
          <div className="flex items-center gap-2">
            <Phone size={16} /> +91 9876543210
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} /> info@company.com
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Link href="#"><Facebook size={18} /></Link>
          <Link href="#"><Instagram size={18} /></Link>
          <Link href="#"><Linkedin size={18} /></Link>
        </div>
      </div>

      {/* ---------- MAIN NAVBAR ---------- */}
      <div
        className={`fixed w-full bg-white py-3 px-6 flex items-center justify-between shadow-md z-50 transition-transform duration-300`}
        style={{
          transform: `translateY(${showTopBar ? TOP_BAR_HEIGHT : 0}px)`
        }}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <img src="/logo.png" alt="Logo" className="h-15 w-40" />
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-6 font-medium text-gray-700">
          <Link href="/who-we-are" className="hover:text-[#1C398E] transition-colors">Who We Are</Link>
          <Link href="/process" className="hover:text-[#1C398E] transition-colors">Process</Link>
          <Link href="/what-you-get" className="hover:text-[#1C398E] transition-colors">What You Get</Link>
          <Link href="/faq" className="hover:text-[#1C398E] transition-colors">FAQ</Link>
          <Link href="/contact" className="hover:text-[#1C398E] transition-colors">Contact</Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* ---------- MOBILE MENU ---------- */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-sm" style={{ marginTop: TOP_BAR_HEIGHT + 48 }}>
          <nav className="flex flex-col p-4 space-y-4 text-gray-700 font-medium">
            <Link href="/who-we-are" onClick={() => setOpen(false)} className="hover:text-[#1C398E] transition-colors">Who We Are</Link>
            <Link href="/process" onClick={() => setOpen(false)} className="hover:text-[#1C398E] transition-colors">Process</Link>
            <Link href="/what-you-get" onClick={() => setOpen(false)} className="hover:text-[#1C398E] transition-colors">What You Get</Link>
            <Link href="/faq" onClick={() => setOpen(false)} className="hover:text-[#1C398E] transition-colors">FAQ</Link>
            <Link href="/contact" onClick={() => setOpen(false)} className="hover:text-[#1C398E] transition-colors">Contact</Link>
          </nav>
        </div>
      )}
    </div>
  );
}
