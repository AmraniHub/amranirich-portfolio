"use client";

import Link from "next/link";
import { GithubIcon, LinkedinIcon, InstagramIcon, DiscordIcon } from "./SocialIcons";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Projects" },
  { href: "/ventures", label: "Ventures" },
  { href: "/credentials", label: "Credentials" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg-primary)",
        borderTop: "1px solid rgba(201, 168, 76, 0.15)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top divider */}
        <div className="gold-divider mb-12" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div
                className="w-10 h-10 border flex items-center justify-center"
                style={{ borderColor: "var(--gold-primary)" }}
              >
                <span
                  className="text-sm font-bold"
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-playfair, serif)",
                  }}
                >
                  AR
                </span>
              </div>
              <span
                style={{
                  color: "var(--text-primary)",
                  fontFamily: "var(--font-playfair, serif)",
                  fontSize: "16px",
                  fontWeight: 600,
                }}
              >
                amranirich
              </span>
            </div>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--text-secondary)", maxWidth: "280px" }}
            >
              Building the infrastructure of tokenized wealth.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p
              className="section-label mb-5"
              style={{ color: "var(--gold-primary)" }}
            >
              Navigation
            </p>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm transition-colors duration-200 hover:text-gold-light"
                  style={{ color: "var(--text-secondary)", fontSize: "13px" }}
                  onMouseEnter={(e) =>
                    ((e.target as HTMLElement).style.color = "var(--gold-light)")
                  }
                  onMouseLeave={(e) =>
                    ((e.target as HTMLElement).style.color =
                      "var(--text-secondary)")
                  }
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p
              className="section-label mb-5"
              style={{ color: "var(--gold-primary)" }}
            >
              Connect
            </p>
            <div className="flex gap-4 mb-6">
              <a
                href="https://www.linkedin.com/in/amranirich/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-200"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold-primary)";
                  el.style.color = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                <LinkedinIcon size={15} />
              </a>
              <a
                href="https://github.com/AmraniHub"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-200"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold-primary)";
                  el.style.color = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                <GithubIcon size={15} />
              </a>
              <a
                href="https://www.instagram.com/amranirich/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-200"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold-primary)";
                  el.style.color = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                <InstagramIcon size={15} />
              </a>
              <a
                href="https://discord.com/users/1417879237419077727"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="w-9 h-9 flex items-center justify-center rounded border transition-all duration-200"
                style={{
                  borderColor: "rgba(201, 168, 76, 0.2)",
                  color: "var(--text-secondary)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "var(--gold-primary)";
                  el.style.color = "var(--gold-primary)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement;
                  el.style.borderColor = "rgba(201, 168, 76, 0.2)";
                  el.style.color = "var(--text-secondary)";
                }}
              >
                <DiscordIcon size={15} />
              </a>
            </div>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: "12px",
                lineHeight: 1.7,
              }}
            >
              Available for RWA consulting, media buying, AI systems, and
              strategic partnerships.
            </p>
          </div>
        </div>

        <div className="gold-divider mb-6" />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p
            style={{ color: "var(--text-secondary)", fontSize: "12px" }}
          >
            © 2025 Abdelali El Amrani · amranirich
          </p>
          <p
            className="section-label"
            style={{ color: "var(--gold-muted)", fontSize: "10px" }}
          >
            RWA · Tokenization · Dubai
          </p>
        </div>
      </div>
    </footer>
  );
}
