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
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          height: scrolled ? "62px" : "82px",
          background: scrolled
            ? "rgba(2,8,15,0.92)"
            : "rgba(2,8,15,0.55)",
          backdropFilter: "blur(24px)",
          WebkitBackdropFilter: "blur(24px)",
          borderBottom: scrolled
            ? "1px solid rgba(201,168,76,0.15)"
            : "1px solid transparent",
          boxShadow: scrolled ? "0 4px 40px rgba(0,0,0,0.5), 0 1px 0 rgba(201,168,76,0.08)" : "none",
        }}
      >
        {/* Top gold line */}
        <div
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5) 30%, rgba(240,208,128,0.8) 50%, rgba(201,168,76,0.5) 70%, transparent)",
            opacity: scrolled ? 1 : 0,
            transition: "opacity 0.5s",
          }}
          aria-hidden="true"
        />

        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              style={{
                width: "38px", height: "38px",
                border: "1px solid rgba(201,168,76,0.5)",
                display: "flex", alignItems: "center", justifyContent: "center",
                background: "rgba(201,168,76,0.04)",
                transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                boxShadow: "0 0 0 rgba(201,168,76,0)",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(201,168,76,0.25)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.9)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(201,168,76,0)";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.5)";
              }}
            >
              <span
                style={{
                  color: "var(--gold-primary)",
                  fontFamily: "var(--font-playfair, serif)",
                  fontSize: "13px", fontWeight: 700,
                  filter: "drop-shadow(0 0 6px rgba(201,168,76,0.5))",
                }}
              >
                AR
              </span>
            </div>
            <div className="hidden sm:block">
              <p style={{ color: "var(--text-primary)", fontSize: "13px", fontFamily: "var(--font-playfair, serif)", fontWeight: 600, lineHeight: 1 }}>
                amranirich
              </p>
              <p style={{ color: "var(--gold-muted)", fontSize: "9px", letterSpacing: "0.2em", fontFamily: "var(--font-jetbrains, monospace)", marginTop: "2px" }}>
                RWA · TOKENIZATION
              </p>
            </div>
          </Link>

          {/* Desktop nav */}
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

          {/* CTA */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="btn-gold hidden sm:inline-flex"
              style={{ padding: "8px 20px", fontSize: "10px" }}
            >
              Book a Call
            </Link>
            <button
              onClick={() => setMenuOpen(true)}
              className="md:hidden flex items-center justify-center w-9 h-9"
              style={{ color: "var(--text-secondary)", border: "1px solid rgba(201,168,76,0.2)", borderRadius: "4px" }}
              aria-label="Open menu"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      <div
        className="fixed inset-0 z-[60] md:hidden"
        style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? "auto" : "none", transition: "opacity 0.3s ease" }}
      >
        <div
          className="absolute inset-0"
          style={{ background: "rgba(2,8,15,0.85)", backdropFilter: "blur(8px)" }}
          onClick={() => setMenuOpen(false)}
        />
        <div
          className="absolute top-0 right-0 h-full w-76 flex flex-col"
          style={{
            width: "300px",
            background: "linear-gradient(180deg, rgba(6,14,26,0.98) 0%, rgba(2,8,15,0.99) 100%)",
            borderLeft: "1px solid rgba(201,168,76,0.15)",
            transform: menuOpen ? "translateX(0)" : "translateX(100%)",
            transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1)",
            boxShadow: "-20px 0 80px rgba(0,0,0,0.7)",
          }}
        >
          {/* Gold top accent */}
          <div style={{ height: "2px", background: "linear-gradient(90deg, transparent, var(--gold-primary), var(--gold-light), var(--gold-primary), transparent)" }} />

          <div className="flex items-center justify-between p-6">
            <span className="section-label" style={{ color: "var(--gold-primary)" }}>Navigation</span>
            <button
              onClick={() => setMenuOpen(false)}
              style={{ color: "var(--text-secondary)", padding: "6px" }}
              aria-label="Close menu"
            >
              <X size={18} />
            </button>
          </div>

          <div className="gold-divider mx-6" />

          <nav className="flex flex-col p-6 mt-2 gap-1">
            {navLinks.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: "12px 8px",
                  fontSize: "11px",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  borderBottom: "1px solid rgba(201,168,76,0.07)",
                  color: pathname === link.href ? "var(--gold-light)" : "var(--text-secondary)",
                  textDecoration: "none",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-inter, sans-serif)",
                  animationDelay: `${i * 60}ms`,
                }}
              >
                {pathname === link.href && (
                  <span style={{ width: 4, height: 4, borderRadius: "50%", background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)", flexShrink: 0 }} />
                )}
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="mt-auto p-6">
            <Link href="/contact" className="btn-gold-fill w-full justify-center">
              Book a Call
            </Link>
            <p style={{ color: "var(--text-dim)", fontSize: "10px", textAlign: "center", marginTop: "12px", fontFamily: "var(--font-jetbrains, monospace)", letterSpacing: "0.08em" }}>
              amranirich · RWA Strategist
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
