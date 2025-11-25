'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';

const navItems = [
  { name: 'Dashboard', href: '/dashboard', icon: '📊' },
  { name: 'Orders', href: '/dashboard/orders', icon: '🛒' },
  { name: 'Products', href: '/dashboard/products', icon: '📦' },
  { name: 'Create', href: '/dashboard/create', icon: '➕' },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 bg-gray-800 text-white">
      
      {/* Logo */}
      <Link
        href="/"
        className="mb-6 flex h-20 items-end justify-start rounded-md p-4"
      >
        <div className="w-32 text-2xl font-bold">E-Shop Admin</div>
      </Link>

      {/* Menu Items */}
      <div className="flex grow flex-col space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex h-12 items-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ${
                isActive ? 'bg-sky-100 text-blue-600' : 'text-white'
              }`}
            >
              <span className="hidden md:block">{item.icon}</span>
              <span className="hidden md:block">{item.name}</span>
            </Link>
          );
        })}

        {/* Logout Button */}
        <button
          onClick={() => signOut({ callbackUrl: "/login" })}
          className="mt-5 flex h-12 items-center gap-2 rounded-md p-3 text-sm font-medium bg-red-500 hover:bg-red-600 text-white"
        >
          🚪 Logout
        </button>
      </div>
    </div>
  );
}
