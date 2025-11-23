"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";

const categories: string[] = ["Men", "Women", "Kids"];

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => pathname === href;

  return (
    <header style={{ backgroundColor: "#F5F5F5" }} className="sticky top-0 z-50 w-full shadow-md">
      <div className="flex h-16 items-center justify-between px-4 md:px-8">

        {/* Left: Logo + Mobile */}
        <div className="flex items-center gap-4">
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                {mobileOpen 
                  ? <X className="h-6 w-6 text-[#111111]" /> 
                  : <Menu className="h-6 w-6 text-[#111111]" />}
              </Button>
            </SheetTrigger>

            <SheetContent side="left" style={{ backgroundColor: "#F5F5F5" }} className="w-64 p-4 pt-10">
              <SheetHeader>
                <SheetTitle style={{ color: "#990514" }} className="text-xl font-bold">Bagddas</SheetTitle>
              </SheetHeader>
              <nav className="mt-6 space-y-2">
                <Link 
                  href="/" 
                  className={`block px-3 py-2 rounded transition-colors ${isActive("/") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`} 
                  style={{ color: "#111111" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/products" 
                  className={`block px-3 py-2 rounded transition-colors ${isActive("/products") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`} 
                  style={{ color: "#111111" }}
                  onClick={() => setMobileOpen(false)}
                >
                  Products
                </Link>
                {categories.map((cat, idx) => (
                  <Link
                    key={idx}
                    href={`/shop/${cat.toLowerCase()}`}
                    className={`block px-3 py-2 rounded transition-colors ${isActive(`/shop/${cat.toLowerCase()}`) ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`}
                    style={{ color: "#111111" }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {cat}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" style={{ color: "#990514" }} className="text-2xl font-bold">Bagddas</Link>
        </div>

        {/* Center: Desktop */}
        <nav className="hidden md:flex gap-4">
          <Link 
            href="/" 
            className={`px-3 py-2 rounded transition-colors ${isActive("/") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`} 
            style={{ color: "#111111" }}
          >
            Home
          </Link>
          <Link 
            href="/products" 
            className={`px-3 py-2 rounded transition-colors ${isActive("/products") ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`} 
            style={{ color: "#111111" }}
          >
            Products
          </Link>
          {categories.map((cat, idx) => (
            <Link 
              key={idx} 
              href={`/shop/${cat.toLowerCase()}`} 
              className={`px-3 py-2 rounded transition-colors ${isActive(`/shop/${cat.toLowerCase()}`) ? "bg-[#990514]/20" : "hover:bg-[#990514]/10"}`} 
              style={{ color: "#111111" }}
            >
              {cat}
            </Link>
          ))}
        </nav>

        {/* Right: Cart + User */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button asChild variant="ghost" size="icon">
            <Link href="/cart" aria-label="Cart">
              <ShoppingCart className="h-5 w-5 text-[#111111] hover:text-[#990514] transition-colors" />
            </Link>
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5 text-[#111111] hover:text-[#990514] transition-colors" />
          </Button>
        </div>

      </div>
    </header>
  );
};

export default Navbar;
