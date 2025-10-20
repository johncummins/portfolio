"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="flex justify-center space-x-8">
      {navItems.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`transition-colors duration-200 ${
            pathname === item.href
              ? "text-black font-medium"
              : "text-black hover:text-gray-600"
          }`}>
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
