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

const socials = [
  { href: "https://www.linkedin.com/in/amranirich/", icon: <LinkedinIcon size={14} />, label: "LinkedIn" },
  { href: "https://github.com/AmraniHub", icon: <GithubIcon size={14} />, label: "GitHub" },
  { href: "https://www.instagram.com/amranirich/", icon: <InstagramIcon size={14} />, label: "Instagram" },
  { href: "https://discord.com/users/1417879237419077727", icon: <DiscordIcon size={14} />, label: "Discord" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "var(--bg-primary)" }}>
      {/* Top gold gradient border */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 20%, rgba(240,208,128,0.6) 50%, rgba(201,168,76,0.3) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none"
        style={{
          width: "60vw",
          height: "40vh",
          background: "radial-gradient(ellipse at center bottom, rgba(201,168,76,0.05) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-6 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-14">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group w-fit">
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  border: "1px solid rgba(201,168,76,0.4)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "rgba(201,168,76,0.04)",
                  transition: "box-shadow 0.3s ease, border-color 0.3s ease",
                  boxShadow: "0 0 0 rgba(201,168,76,0)",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 20px rgba(201,168,76,0.25)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.8)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 0 0 rgba(201,168,76,0)";
                  (e.currentTarget as HTMLElement).style.borderColor = "rgba(201,168,76,0.4)";
                }}
              >
                <span
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "13px",
                    fontWeight: 700,
                    filter: "drop-shadow(0 0 6px rgba(201,168,76,0.5))",
                  }}
                >
                  AR
                </span>
              </div>
              <div>
                <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair, serif)", fontSize: "15px", fontWeight: 600, lineHeight: 1 }}>
                  amranirich
                </p>
                <p style={{ color: "var(--gold-muted)", fontSize: "8px", letterSpacing: "0.2em", fontFamily: "var(--font-jetbrains, monospace)", marginTop: "3px" }}>
                  RWA · TOKENIZATION
                </p>
              </div>
            </Link>
            <p style={{ color: "var(--text-secondary)", fontSize: "13px", lineHeight: 1.75, maxWidth: "260px" }}>
              Building the infrastructure of tokenized wealth. Dubai-focused. Operator-first.
            </p>
          </div>

          {/* Nav */}
          <div>
            <p className="section-label mb-5" style={{ color: "var(--gold-primary)" }}>
              Navigation
            </p>
            <nav className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    textDecoration: "none",
                    letterSpacing: "0.03em",
                    transition: "color 0.2s ease, padding-left 0.2s ease",
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--gold-light)";
                    el.style.paddingLeft = "4px";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.color = "var(--text-secondary)";
                    el.style.paddingLeft = "0px";
                  }}
                >
                  <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(201,168,76,0.4)", flexShrink: 0 }} />
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Connect */}
          <div>
            <p className="section-label mb-5" style={{ color: "var(--gold-primary)" }}>
              Connect
            </p>
            <div className="flex gap-3 mb-6">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: "36px",
                    height: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(201,168,76,0.18)",
                    color: "var(--text-secondary)",
                    transition: "border-color 0.25s, color 0.25s, box-shadow 0.25s, transform 0.25s",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201,168,76,0.6)";
                    el.style.color = "var(--gold-primary)";
                    el.style.boxShadow = "0 0 16px rgba(201,168,76,0.15)";
                    el.style.transform = "translateY(-2px)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.borderColor = "rgba(201,168,76,0.18)";
                    el.style.color = "var(--text-secondary)";
                    el.style.boxShadow = "none";
                    el.style.transform = "translateY(0)";
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p style={{ color: "var(--text-secondary)", fontSize: "12px", lineHeight: 1.75, maxWidth: "240px" }}>
              Available for RWA consulting, media buying, AI systems, and strategic partnerships.
            </p>
          </div>
        </div>

        {/* Gold divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15) 30%, rgba(201,168,76,0.15) 70%, transparent)",
            marginBottom: "24px",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <p style={{ color: "var(--text-dim)", fontSize: "11px", fontFamily: "var(--font-jetbrains, monospace)", letterSpacing: "0.04em" }}>
            © 2025 Abdelali El Amrani · amranirich
          </p>
          <p className="section-label" style={{ color: "var(--gold-muted)", fontSize: "9px", letterSpacing: "0.22em" }}>
            RWA · TOKENIZATION · DUBAI
          </p>
        </div>
      </div>
    </footer>
  );
}
