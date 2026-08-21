"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavItem {
  readonly label: string;
  readonly href: string;
}

const NAV_ITEMS: readonly NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Early Life", href: "/early-life" },
  { label: "Bijapur Conflict", href: "/bijapur-conflict" },
  { label: "Mughal Conflict", href: "/mughal-conflict" },
  { label: "Coronation", href: "/coronation" },
  { label: "Legacy", href: "/legacy" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 40);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shellClasses =
    scrolled || menuOpen
      ? "border-b border-gold/15 bg-black/75 shadow-[0_10px_40px_-15px_rgba(212,175,55,0.25)] backdrop-blur-xl"
      : "border-b border-transparent bg-transparent";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${shellClasses}`}
    >
      <nav
        aria-label="Primary"
        className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8"
      >
        {/* Royal seal + wordmark */}
        <Link
          href="/"
          onClick={() => setMenuOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="relative flex h-12 w-12 items-center justify-center rounded-full ring-1 ring-gold/40 transition-shadow duration-300 group-hover:shadow-[0_0_22px_rgba(212,175,55,0.5)] sm:h-14 sm:w-14">
            <Image
              src="/images/royal-seal-rajmudra.png"
              alt="Rajmudra — royal seal of Chhatrapati Shivaji Maharaj"
              fill
              sizes="(max-width: 640px) 48px, 56px"
              className="rounded-full object-contain p-1"
            />
          </span>
          <span className="font-display text-sm font-semibold leading-tight tracking-wider text-white drop-shadow-[0_0_14px_rgba(212,175,55,0.35)] sm:text-base lg:text-lg">
            Chhatrapati <span className="text-kesari">Shivaji</span> Maharaj
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-6 lg:flex xl:gap-9">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group relative py-2 text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:text-brightgold focus-visible:text-brightgold"
              >
                {item.label}
                <span
                  aria-hidden
                  className="absolute inset-x-0 bottom-0 h-[2px] origin-left scale-x-0 rounded-full bg-gradient-to-r from-kesari via-brightgold to-gold transition-transform duration-300 ease-out group-hover:scale-x-100 group-focus-visible:scale-x-100"
                />
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 flex-col items-center justify-center gap-[7px] rounded-full border border-gold/30 transition-all duration-300 hover:border-gold hover:shadow-[0_0_18px_rgba(212,175,55,0.4)] lg:hidden"
        >
          <span
            className={`h-[2px] w-5 rounded-full bg-gold transition-transform duration-300 ${
              menuOpen ? "translate-y-[4.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 rounded-full bg-gold transition-transform duration-300 ${
              menuOpen ? "-translate-y-[4.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      {/* Mobile panel */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out lg:hidden ${
          menuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-1 border-t border-gold/10 px-6 pb-6 pt-3">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-lg px-3 py-3 text-sm font-medium tracking-wide text-white/85 transition-colors duration-200 hover:bg-white/5 hover:text-brightgold"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
