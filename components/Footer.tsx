"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGithub,
  FaDribbble,
  FaCcVisa,
  FaCcMastercard,
  FaPaypal,
} from "react-icons/fa";
import { SiApple, SiGoogleplay } from "react-icons/si";

export default function EcommerceFooter() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">

        {/* Subscribe Section */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            Stay Updated. Shop Smart.
          </h2>
          <p className="mt-3 text-gray-500 dark:text-gray-400">
            Get exclusive offers, big discounts & latest product launches.
          </p>

          <div className="mt-6 flex items-center justify-center gap-2 flex-wrap">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-700 w-64 sm:w-80 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 focus:ring-2 focus:ring-black focus:outline-none"
            />
            <button className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-800 transition">
              Subscribe
            </button>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-12 text-sm">

          {/* Shop */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Shop</h3>
            <ul className="space-y-2">
              {["Men Fashion", "Women Fashion", "Electronics", "Accessories", "Shoes"].map((item, i) => (
                <li key={i}>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Help</h3>
            <ul className="space-y-2">
              {["Track Order", "Returns", "Shipping", "FAQs", "Payments"].map((item, i) => (
                <li key={i}>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Company</h3>
            <ul className="space-y-2">
              {["About Us", "Careers", "Press", "Blog"].map((item, i) => (
                <li key={i}>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              {["Privacy Policy", "Terms & Conditions", "Cookies", "Refund Policy"].map((item, i) => (
                <li key={i}>
                  <a className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div>
            <h3 className="font-bold text-gray-900 dark:text-white mb-4">Download App</h3>
            <div className="flex flex-col gap-3">
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition w-36">
                <SiApple className="text-2xl" /> App Store
              </a>
              <a href="#" className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition w-36">
                <SiGoogleplay className="text-2xl" /> Google Play
              </a>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-16 flex justify-center gap-6 text-gray-600 dark:text-gray-400 text-xl">
          <a href="#" className="hover:text-blue-600 transition"><FaFacebookF /></a>
          <a href="#" className="hover:text-pink-500 transition"><FaInstagram /></a>
          <a href="#" className="hover:text-blue-400 transition"><FaTwitter /></a>
          <a href="#" className="hover:text-gray-800 dark:hover:text-white transition"><FaGithub /></a>
          <a href="#" className="hover:text-pink-400 transition"><FaDribbble /></a>
        </div>

        {/* Payment Icons */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 text-gray-600 dark:text-gray-400 text-3xl">
          <FaCcVisa />
          <FaCcMastercard />
          <FaPaypal />
        </div>

        {/* Bottom Text */}
        <div className="mt-12 pt-6 border-t border-gray-200 dark:border-gray-700 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} YourStore — All rights reserved.
        </div>
      </div>
    </footer>
  );
}
