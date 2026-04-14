"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { X, Menu } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ventures", label: "Ventures" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          height: scrolled ? "60px" : "80px",
          background: scrolled
            ? "rgba(5, 12, 26, 0.92)"
            : "rgba(5, 12, 26, 0.6)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          borderBottom: scrolled
            ? "1px solid rgba(201, 168, 76, 0.12)"
            : "1px solid transparent",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="w-9 h-9 border flex items-center justify-center"
              style={{ borderColor: "var(--gold-primary)" }}
            >
              <span
                className="text-xs font-bold tracking-widest"
                style={{
                  color: "var(--gold-primary)",
                  fontFamily: "var(--font-playfair, serif)",
                }}
              >
                AR
              </span>
            </div>
            <span
              className="text-sm font-medium hidden sm:block"
              style={{
                color: "var(--text-secondary)",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-jetbrains, monospace)",
                fontSize: "11px",
              }}
            >
              amranirich
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${pathname === link.href ? "active" : ""}`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className="flex items-center gap-4">
            <a
              href="/contact"
              className="btn-gold hidden sm:inline-flex"
              style={{ padding: "8px 20px", fontSize: "11px" }}
            >
              Book a Call
            </a>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9"
              style={{ color: "var(--text-secondary)" }}
              aria-label="Open menu"
            >
              <Menu size={20} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-[60] md:hidden transition-opacity duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "auto" : "none",
        }}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0"
          style={{ background: "rgba(5, 12, 26, 0.8)" }}
          onClick={() => setMenuOpen(false)}
        />
        {/* Drawer */}
        <div
          className="absolute top-0 right-0 h-full w-72 flex flex-col transition-transform duration-300"
          style={{
            background: "var(--bg-secondary)",
            borderLeft: "1px solid rgba(201, 168, 76, 0.15)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
          }}
        >
          <div className="flex items-center justify-between p-6">
            <span
              className="section-label"
              style={{ color: "var(--gold-primary)" }}
            >
              Menu
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text-secondary)" }}
              aria-label="Close menu"
            >
              <X size={20} />
            </button>
          </div>
          <div className="gold-divider mx-6" />
          <nav className="flex flex-col gap-1 p-6 mt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`py-3 px-2 text-sm font-medium tracking-widest uppercase transition-colors duration-200 border-b`}
                style={{
                  color:
                    pathname === link.href
                      ? "var(--gold-light)"
                      : "var(--text-secondary)",
                  borderColor: "rgba(201, 168, 76, 0.08)",
                  fontFamily: "var(--font-inter, sans-serif)",
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto p-6">
            <a href="/contact" className="btn-gold-fill w-full justify-center">
              Book a Call
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
