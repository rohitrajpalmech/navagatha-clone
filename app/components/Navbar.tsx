"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

type NavItem = {
  label: string;
  href?: string;
  children?: { label: string; href: string; description?: string }[];
};

const NAV: NavItem[] = [
  { label: "Home", href: "/" },
  {
    label: "Collections",
    children: [
      { label: "Living Room", href: "/collections/living", description: "Sofas, sectionals, TV units, coffee tables" },
      { label: "Bedroom", href: "/collections/bedroom", description: "Beds, wardrobes, dressers, side tables" },
      { label: "Dining", href: "/collections/dining", description: "Dining sets, chairs, bar stools, benches" },
      { label: "Office", href: "/collections/office", description: "Desks, ergonomic chairs, storage solutions" },
      { label: "Storage", href: "/collections/storage", description: "Shelving, cabinets, shoe racks, bookshelves" },
      { label: "Kids", href: "/collections/kids", description: "Compact, colorful, study desks & storage" },
    ],
  },
  { label: "3D Configurator", href: "/configurator" },
  { label: "Custom Furniture", href: "/custom" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [collectionsOpen, setCollectionsOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Sticky/shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Theme initialization
  useEffect(() => {
    const stored = window.localStorage.getItem("theme");
    if (stored === "dark" || (!stored && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    if (next === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    window.localStorage.setItem("theme", next);
  };

  // Basic icons (inline SVG, no extra deps)
  const IconSun = (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="12" cy="12" r="4" strokeWidth="2" />
      <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.07 6.07-1.41-1.41M8.34 8.34 6.93 6.93m10.14 0-1.41 1.41M8.34 15.66l-1.41 1.41" strokeWidth="2" />
    </svg>
  );
  const IconMoon = (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />
    </svg>
  );
  const IconSearch = (
    <svg className="h-5 w-5 text-gray-500 dark:text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="11" cy="11" r="7" strokeWidth="2" />
      <path d="M21 21l-4.35-4.35" strokeWidth="2" />
    </svg>
  );
  const IconMenu = (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M3 6h18M3 12h18M3 18h18" strokeWidth="2" />
    </svg>
  );
  const IconClose = (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <path d="M6 6l12 12M6 18L18 6" strokeWidth="2" />
    </svg>
  );
  const IconCart = (
    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
      <circle cx="9" cy="20" r="1.5" />
      <circle cx="17" cy="20" r="1.5" />
      <path d="M3 4h2l3 12h10l2-8H7" strokeWidth="2" />
    </svg>
  );

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      {/* Skip link for a11y */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 bg-black text-white dark:bg-white dark:text-black px-3 py-2 rounded"
      >
        Skip to content
      </a>

      <nav
        className={`border-b transition-all ${
          scrolled
            ? "bg-white/80 dark:bg-black/60 backdrop-blur border-gray-200/70 dark:border-gray-800"
            : "bg-white/50 dark:bg-black/40 backdrop-blur border-transparent"
        }`}
        aria-label="Global"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <Link href="/" className="flex items-center gap-2">
              {/* Optional logo image */}
              {/* <Image src="/images/logo.svg" alt="Laxmi Furnitures" width={32} height={32} /> */}
              <span className="text-xl font-extrabold tracking-tight text-black dark:text-white">
                Laxmi Furnitures
              </span>
            </Link>
          </div>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV.map((item) =>
              item.children ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setCollectionsOpen(true)}
                  onMouseLeave={() => setCollectionsOpen(false)}
                >
                  <button
                    className="flex items-center gap-1 text-sm font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                    aria-haspopup="true"
                    aria-expanded={collectionsOpen}
                    onClick={() => setCollectionsOpen((v) => !v)}
                  >
                    {item.label}
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M6 9l6 6 6-6" strokeWidth="2" />
                    </svg>
                  </button>

                  {/* Mega menu */}
                  {collectionsOpen && (
                    <div
                      className="absolute left-1/2 z-40 mt-3 w-[720px] -translate-x-1/2 rounded-xl border border-gray-200 bg-white/90 p-6 shadow-2xl backdrop-blur dark:border-gray-800 dark:bg-black/80"
                      onMouseEnter={() => setCollectionsOpen(true)}
                      onMouseLeave={() => setCollectionsOpen(false)}
                      role="menu"
                    >
                      <div className="grid grid-cols-2 gap-6">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className="group rounded-lg p-4 hover:bg-gray-50 dark:hover:bg-white/5"
                            role="menuitem"
                          >
                            <div className="flex items-start gap-3">
                              <div className="mt-0.5 h-8 w-8 flex-shrink-0 rounded-md bg-gray-100 ring-1 ring-gray-200 dark:bg-white/10 dark:ring-white/10" />
                              <div>
                                <p className="font-semibold text-gray-900 group-hover:text-black dark:text-white">
                                  {child.label}
                                </p>
                                {child.description && (
                                  <p className="text-sm text-gray-600 dark:text-gray-400">{child.description}</p>
                                )}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href!}
                  className="text-sm font-medium text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white"
                >
                  {item.label}
                </Link>
              )
            )}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-3">
            {/* Search (desktop) */}
            <div className="relative hidden lg:block">
              <input
                type="search"
                placeholder="Search furniture…"
                className="w-64 rounded-full border border-gray-300 bg-white/60 px-9 py-2 text-sm text-gray-800 placeholder:text-gray-500 outline-none transition focus:border-gray-400 dark:border-gray-700 dark:bg-black/50 dark:text-gray-100"
              />
              <span className="pointer-events-none absolute left-3 top-2.5">{IconSearch}</span>
            </div>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-full border border-gray-300 bg-white/60 p-2 text-gray-700 hover:bg-white dark:border-gray-700 dark:bg-black/50 dark:text-gray-200"
            >
              {theme === "dark" ? IconSun : IconMoon}
            </button>

            {/* Cart placeholder */}
            <button
              aria-label="Open cart"
              className="hidden rounded-full border border-gray-300 bg-white/60 p-2 text-gray-700 hover:bg-white dark:border-gray-700 dark:bg-black/50 dark:text-gray-200 sm:inline-flex"
            >
              {IconCart}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-white/10 md:hidden"
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? IconClose : IconMenu}
            </button>
          </div>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-black/80 backdrop-blur">
            <div className="px-6 py-4 space-y-2">
              {NAV.map((item) =>
                item.children ? (
                  <details key={item.label} className="group">
                    <summary className="flex cursor-pointer list-none items-center justify-between py-2 text-gray-800 dark:text-gray-200">
                      <span className="text-sm font-semibold">{item.label}</span>
                      <svg className="h-4 w-4 transition group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <path d="M6 9l6 6 6-6" strokeWidth="2" />
                      </svg>
                    </summary>
                    <div className="pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block rounded py-2 text-sm text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-white/10"
                          onClick={() => setMobileOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </details>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href!}
                    className="block rounded py-2 text-sm font-semibold text-gray-800 hover:bg-gray-50 dark:text-gray-200 dark:hover:bg-white/10"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}

              {/* Mobile search */}
              <div className="relative pt-2">
                <input
                  type="search"
                  placeholder="Search furniture…"
                  className="w-full rounded-md border border-gray-300 bg-white/80 px-9 py-2 text-sm text-gray-800 placeholder:text-gray-500 outline-none focus:border-gray-400 dark:border-gray-700 dark:bg-black/50 dark:text-gray-100"
                />
                <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2">
                  {IconSearch}
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}