"use client";

import Link from "next/link";
import { Instagram, Twitter, Facebook, Linkedin } from "lucide-react";
import React from "react"; // Explicit import

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#111111] text-white border-t border-[#333] mt-12">
      <div className="max-w-7xl mx-auto px-6 py-10 
                      grid gap-10 
                      sm:grid-cols-2 
                      md:grid-cols-3 
                      lg:grid-cols-4 lg:py-14"> 
        
        {/* Logo + About */}
        <div className="sm:col-span-2 md:col-span-1 lg:col-span-1">
          <h2 className="text-2xl font-bold text-white mb-3 tracking-wide">
            Bagddas
          </h2>

          <p className="text-sm text-[#CCCCCC] leading-relaxed max-w-xs">
            The best place to buy trending fashion, accessories & shoes.
          </p>

          <div className="flex gap-4 mt-5">
            <Link href="#" className="hover:text-[#CC071E] transition" aria-label="Facebook link">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#CC071E] transition" aria-label="Instagram link">
              <Instagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#CC071E] transition" aria-label="Twitter link">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="hover:text-[#CC071E] transition" aria-label="LinkedIn link">
              <Linkedin className="h-5 w-5" />
            </Link>
          </div>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-2 gap-8 sm:gap-12 md:col-span-1">
          {/* Shop */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-white tracking-wide">
              Shop
            </h3>
            <ul className="space-y-2 text-sm text-[#CCCCCC]">
              <li><Link href="#" className="hover:text-white transition">Men</Link></li>
              <li><Link href="#" className="hover:text-white transition">Women</Link></li>
              <li><Link href="#" className="hover:text-white transition">Kids</Link></li>
              <li><Link href="#" className="hover:text-white transition">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-sm mb-3 text-white tracking-wide">
              Company
            </h3>
            <ul className="space-y-2 text-sm text-[#CCCCCC]">
              <li><Link href="#" className="hover:text-white transition">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition">Contact</Link></li>
              <li><Link href="#" className="hover:text-white transition">Blog</Link></li>
              <li><Link href="#" className="hover:text-white transition">Careers</Link></li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="sm:col-span-2 md:col-span-1">
          <h3 className="font-semibold text-sm mb-3 text-white tracking-wide">
            Newsletter
          </h3>

          <p className="text-sm text-[#CCCCCC] mb-4 max-w-xs">
            Subscribe to get latest updates and offers.
          </p>

          <form className="flex flex-col sm:flex-row gap-3 sm:gap-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email subscription field"
              className="w-full border border-[#444] bg-[#1A1A1A] text-white rounded-md px-3 py-2
                         focus:outline-none focus:ring-2 focus:ring-[#CC071E] placeholder-[#888]"
              required
            />

            <button 
              type="submit" 
              className="bg-[#CC071E] text-white px-5 py-2 rounded-md 
                         hover:bg-[#990514] transition w-full sm:w-auto"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-[#333] mt-6 py-4 text-center text-xs text-[#AAAAAA] tracking-wide">
        &copy; {new Date().getFullYear()} Bagddas. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;