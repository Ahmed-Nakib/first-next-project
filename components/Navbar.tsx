"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

const categories = ["Men", "Women", "Kids"];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Prevent hydration mismatch
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  // Redux cart
  const cart = useSelector((state: RootState) => state.cart.cart);
  const cartCount = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);

  const isActive = (href: string) => pathname === href;

  return (
    <header className="sticky top-0 z-50 w-full shadow-md" style={{ backgroundColor: "#F5F5F5" }}>
      <div className="flex h-16 items-center justify-between px-4 md:px-8">

        {/* Left: Mobile menu + Logo */}
        <div className="flex items-center gap-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {mobileOpen ? (
                  <X className="h-6 w-6 text-[#111111]" />
                ) : (
                  <Menu className="h-6 w-6 text-[#111111]" />
                )}
              </Button>
            </SheetTrigger>

            <SheetContent side="left" className="w-64 p-4 pt-10" style={{ backgroundColor: "#F5F5F5" }}>
              <SheetHeader>
                <SheetTitle className="text-xl font-bold" style={{ color: "#990514" }}>
                  Bagddas
                </SheetTitle>
              </SheetHeader>

              <nav className="mt-6 space-y-2">
                <Link
                  href="/"
                  className={`block px-3 py-2 rounded transition-colors ${
                    isActive("/") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>

                <Link
                  href="/products"
                  className={`block px-3 py-2 rounded transition-colors ${
                    isActive("/products") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"
                  }`}
                  onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>

                {categories.map((cat) => (
                  <Link
                    key={cat}
                    href={`/shop/${cat.toLowerCase()}`}
                    className={`block px-3 py-2 rounded transition-colors ${
                      isActive(`/shop/${cat.toLowerCase()}`)
                        ? "bg-[#990514]/20"
                        : "hover:bg-[#990514]/10"
                    }`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="text-2xl font-bold" style={{ color: "#990514" }}>
            Bagddas
          </Link>
        </div>

        {/* Center Desktop Menu */}
        <nav className="hidden md:flex gap-4">
          <Link
            href="/"
            className={`px-3 py-2 rounded transition-colors ${
              isActive("/") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"
            }`}
          >
            Home
          </Link>

          <Link
            href="/products"
            className={`px-3 py-2 rounded transition-colors ${
              isActive("/products") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"
            }`}
          >
            Products
          </Link>

          {categories.map((cat) => (
            <Link
              key={cat}
              href={`/shop/${cat.toLowerCase()}`}
              className={`px-3 py-2 rounded transition-colors ${
                isActive(`/shop/${cat.toLowerCase()}`)
                  ? "bg-[#990514]/20"
                  : "hover:bg-[#990514]/10"
              }`}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {/* Right: Cart + User */}
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative">
            <Button asChild variant="ghost" size="icon">
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5 text-[#111111]" />
              </Link>
            </Button>

            {/* Hydration-safe cart badge */}
            {mounted && cartCount > 0 && (
              <span className="absolute -top-1 -right-1 inline-flex items-center justify-center px-2 py-1 text-xs font-bold text-white bg-red-600 rounded-full">
                {cartCount}
              </span>
            )}
          </div>

          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-[#111111]" />
          </Button>
        </div>
      </div>
    </header>
  );
}
