"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Absolute hrefs so section links work from any page and don't stack hashes
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Services", href: "/#services" },
    { name: "Our Homes", href: "/homes" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
    { name: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
      }`}>
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div>
            <p className="text-2xl font-bold text-[#4F6F52]">
              AAAPendo AFH
            </p>
            <p className="text-xs text-gray-500">
              Compassionate Care Home
            </p>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} className="font-medium text-[#252525] transition duration-300 hover:text-[#4F6F52]">
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA Button */}
        <div className="hidden lg:block">
            <Link href="/#contact" className="rounded-full bg-[#C89B3C] px-6 py-3 font-semibold text-white shadow-sm transition duration-300 hover:bg-[#A67C2E]">
              Schedule Tour
            </Link>
          </div>

        {/* Mobile Button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          className="lg:hidden -mr-2 p-2 text-[#4F6F52]" >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>

      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white shadow-md">
          <ul className="flex flex-col gap-5 px-6 py-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link href={link.href} onClick={() => setOpen(false)} className="font-medium text-[#252525] hover:text-[#4F6F52]">
                {link.name}
              </Link>
            </li>
          ))}

          <li>
            <Link href="/#contact" onClick={() => setOpen(false)} className="inline-block rounded-full bg-[#C89B3C] px-6 py-3 font-semibold text-white">
              Schedule Tour
            </Link>
          </li>
        </ul>
        </div>
      )}
    </header>
  );
}