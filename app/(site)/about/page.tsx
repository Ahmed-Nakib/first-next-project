"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShoppingBag, Star, ShieldCheck, Headphones } from "lucide-react";

export default function AboutBagddash() {
  return (
    <div className="w-full bg-gray-50 pb-20">
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold tracking-wide"
        >
          About Bagddash
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto opacity-90"
        >
          Your Style • Your Choice • Your Marketplace
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-6xl mx-auto px-6 mt-16 grid md:grid-cols-2 gap-10">
        <Card className="rounded-2xl shadow-md border-none">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              To become one of the most trusted and customer‑focused ecommerce brands in Bangladesh—
              where people shop confidently, comfortably, and with joy.
            </p>
          </CardContent>
        </Card>

        <Card className="rounded-2xl shadow-md border-none">
          <CardContent className="p-8">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600 text-lg leading-relaxed">
              Delivering quality-first products, seamless online experiences, and modern, trendy, affordable collections for everyone.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Why Choose Us */}
      <section className="max-w-6xl mx-auto px-6 mt-20">
        <h2 className="text-4xl font-bold text-center text-gray-900">Why Shop From Bagddash?</h2>
        <p className="text-center text-gray-600 mt-3 mb-10 max-w-xl mx-auto">
          We focus on providing a premium and trustworthy shopping experience.
        </p>

        <div className="grid md:grid-cols-4 gap-8 mt-10">
          <Card className="rounded-2xl shadow-sm border-none text-center p-6">
            <ShoppingBag className="mx-auto h-12 w-12 text-blue-600" />
            <h3 className="font-semibold text-lg mt-4">Premium Products</h3>
            <p className="text-gray-600 text-sm mt-2">Hand‑picked quality items you can rely on.</p>
          </Card>

          <Card className="rounded-2xl shadow-sm border-none text-center p-6">
            <Star className="mx-auto h-12 w-12 text-blue-600" />
            <h3 className="font-semibold text-lg mt-4">Top‑Rated Service</h3>
            <p className="text-gray-600 text-sm mt-2">Customer-first, always.</p>
          </Card>

          <Card className="rounded-2xl shadow-sm border-none text-center p-6">
            <ShieldCheck className="mx-auto h-12 w-12 text-blue-600" />
            <h3 className="font-semibold text-lg mt-4">Secure Shopping</h3>
            <p className="text-gray-600 text-sm mt-2">Your trust and safety come first.</p>
          </Card>

          <Card className="rounded-2xl shadow-sm border-none text-center p-6">
            <Headphones className="mx-auto h-12 w-12 text-blue-600" />
            <h3 className="font-semibold text-lg mt-4">24/7 Support</h3>
            <p className="text-gray-600 text-sm mt-2">We are always here for your help.</p>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center mt-20">
        <h2 className="text-3xl font-bold text-gray-800">Need Any Help?</h2>
        <p className="text-gray-600 mt-2 max-w-md mx-auto">
          Our support team is always ready to assist you. Feel free to reach out anytime!
        </p>

        <Button className="mt-6 px-10 py-5 rounded-full text-lg">Contact Support</Button>
      </section>
    </div>
  );
}
