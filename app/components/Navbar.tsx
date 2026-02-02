"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white dark:bg-black border-b border-gray-300 dark:border-gray-700 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6">

        {/* Logo / Title */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          FurnitureCo
        </h1>

        {/* Nav Links */}
        <div className="flex gap-8 text-lg font-medium text-black dark:text-white">

          <Link href="/">Home</Link>
          <Link href="/designs">Our Furniture Designs</Link>
          <Link href="/careers">Careers</Link>
          <Link href="/help">Help</Link>
          <Link href="/contact">Contact Us</Link>

        </div>
      </div>
    </nav>
  );
}