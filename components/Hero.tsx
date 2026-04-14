"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import StatsStrip from "./StatsStrip";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), { ssr: false });

const tickerItems = [
  "RWA", "Tokenization", "DeFi", "Real Estate", "Web3",
  "Dubai", "UHNWI", "Family Office", "Meta Ads", "AI Systems",
  "29 Certifications", "Performance Media", "Blockchain", "Amrania",
];

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const els = [h1Ref.current, subRef.current, descRef.current, ctaRef.current];
    els.forEach((el, i) => {
      if (!el) return;
      el.style.opacity = "0";
      el.style.transform = "translateY(28px)";
      setTimeout(() => {
        el.style.transition = "opacity 0.9s cubic-bezier(0.16,1,0.3,1), transform 0.9s cubic-bezier(0.16,1,0.3,1)";
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      }, 120 + i * 110);
    });
  }, []);

  return (
    <section
      className="relative flex flex-col"
      style={{ minHeight: "100vh", background: "var(--bg-primary)", paddingTop: "80px" }}
    >
      {/* ── Layered atmospheric background ────────────────────────────── */}
      <div className="ambient-hero" />
      <div className="grid-overlay" />
      <div className="grain-overlay" />

      {/* Extra deep blue glow bottom-left */}
      <div
        className="absolute pointer-events-none"
        style={{
          bottom: "5%", left: "-5%",
          width: "50vw", height: "50vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(15,40,100,0.18) 0%, transparent 65%)",
          filter: "blur(70px)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />
      {/* Soft gold bloom top-right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: "0%", right: "0%",
          width: "55vw", height: "55vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 65%)",
          filter: "blur(90px)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* ── Main content ───────────────────────────────────────────────── */}
      <div className="relative flex-1 flex items-center z-10">
        <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <div>
            {/* Label */}
            <div className="flex items-center gap-3 mb-8">
              <div style={{ width: 32, height: 1, background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)" }} />
              <span className="section-label" style={{ color: "var(--gold-primary)", letterSpacing: "0.3em" }}>
                RWA · Tokenization · Web3
              </span>
            </div>

            {/* Headline */}
            <h1
              ref={h1Ref}
              className="heading-display mb-3"
              style={{ fontSize: "clamp(40px, 5.5vw, 76px)" }}
            >
              Abdelali{" "}
              <br className="hidden sm:block" />
              <span className="text-glow-gold">El Amrani</span>
            </h1>

            {/* Sub title */}
            <p
              ref={subRef}
              className="heading-serif mb-2"
              style={{ fontSize: "clamp(16px, 2vw, 22px)", color: "var(--gold-light)", opacity: 0.9 }}
            >
              RWA &amp; Tokenization Strategist
            </p>
            <p
              style={{ fontSize: "12px", color: "var(--text-secondary)", letterSpacing: "0.06em", marginBottom: "28px", fontFamily: "var(--font-jetbrains, monospace)" }}
            >
              Founder of Amrania · Performance Media Buyer · AI Systems Builder
            </p>

            {/* Description */}
            <p
              ref={descRef}
              className="mb-10 leading-relaxed"
              style={{ color: "var(--text-secondary)", fontSize: "15px", maxWidth: "500px", lineHeight: 1.85 }}
            >
              Building tokenized real estate and Web3 wealth architecture for
              UHNWIs and family offices. Proven operator in performance media
              buying and AI-powered product development.{" "}
              <span style={{ color: "var(--gold-muted)" }}>Dubai-focused. Operator-first.</span>
            </p>

            {/* CTAs */}
            <div ref={ctaRef} className="flex flex-wrap gap-4 mb-10">
              <Link href="/ventures" className="btn-gold-fill border-glow-animated">
                Explore Amrania
                <ArrowRight size={14} />
              </Link>
              <Link href="/projects" className="btn-gold">
                View Work
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Proof row */}
            <div className="flex items-center gap-6 flex-wrap">
              {[
                { label: "6,800+", sub: "LinkedIn Followers", href: "https://www.linkedin.com/in/amranirich/" },
                { label: "29", sub: "Verified Certifications", href: "https://credentials.net/profile/amranirich/wallet" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 group"
                  style={{ textDecoration: "none" }}
                >
                  <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)" }} />
                  <span style={{ color: "var(--gold-primary)", fontSize: "13px", fontWeight: 700, fontFamily: "var(--font-playfair, serif)" }}>
                    {item.label}
                  </span>
                  <span style={{ color: "var(--text-dim)", fontSize: "11px", letterSpacing: "0.04em" }}>
                    {item.sub}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Right — Particle orb */}
          <div className="relative hidden lg:flex items-center justify-center" style={{ height: "520px" }}>
            {/* Outer glow ring */}
            <div
              className="absolute"
              style={{
                width: "420px", height: "420px", borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.1)",
                boxShadow: "0 0 80px rgba(201,168,76,0.06), inset 0 0 80px rgba(201,168,76,0.03)",
                animation: "spin 18s linear infinite",
              }}
              aria-hidden="true"
            />
            <div
              className="absolute"
              style={{
                width: "310px", height: "310px", borderRadius: "50%",
                border: "1px solid rgba(201,168,76,0.07)",
                animation: "spin 28s linear infinite reverse",
              }}
              aria-hidden="true"
            />

            {/* Canvas orb */}
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "460px", height: "460px",
                border: "1px solid rgba(201,168,76,0.18)",
                background: "radial-gradient(circle at 40% 35%, rgba(15,35,70,0.9) 0%, rgba(2,8,15,0.95) 70%)",
                boxShadow: "0 0 100px rgba(201,168,76,0.1), 0 0 200px rgba(201,168,76,0.04), inset 0 0 60px rgba(0,0,0,0.5)",
              }}
            >
              <ParticleNetwork />

              {/* Center emblem */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
                style={{ zIndex: 2 }}
              >
                <div
                  style={{
                    width: "80px", height: "80px",
                    border: "1px solid rgba(201,168,76,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    background: "rgba(2,8,15,0.85)",
                    boxShadow: "0 0 30px rgba(201,168,76,0.15), inset 0 0 20px rgba(201,168,76,0.05)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      fontSize: "22px", fontWeight: 700,
                      color: "var(--gold-primary)",
                      filter: "drop-shadow(0 0 12px rgba(201,168,76,0.6))",
                    }}
                  >
                    AR
                  </span>
                </div>
                <p
                  className="mt-3 section-label"
                  style={{ fontSize: "8px", color: "var(--gold-muted)", letterSpacing: "0.4em" }}
                >
                  RWA NETWORK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Ticker ─────────────────────────────────────────────────────── */}
      <div
        className="relative z-10 py-3"
        style={{
          background: "linear-gradient(90deg, var(--bg-secondary), rgba(10,22,45,0.95), var(--bg-secondary))",
          borderTop: "1px solid rgba(201,168,76,0.1)",
          borderBottom: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-5 mx-5">
                <span style={{ color: "var(--gold-primary)", fontSize: "10px", letterSpacing: "0.18em", fontFamily: "var(--font-jetbrains, monospace)", fontWeight: 500 }}>
                  {item}
                </span>
                <span style={{ color: "rgba(201,168,76,0.3)", fontSize: "7px" }}>◆</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── Stats Strip ────────────────────────────────────────────────── */}
      <StatsStrip />

      {/* Scroll cue */}
      <div
        className="absolute left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1"
        style={{ bottom: "190px", color: "var(--gold-muted)", opacity: 0.45, zIndex: 10 }}
      >
        <span style={{ fontSize: "8px", letterSpacing: "0.25em", fontFamily: "var(--font-jetbrains)" }}>SCROLL</span>
        <ChevronDown size={13} style={{ animation: "bounce 2s infinite" }} />
      </div>

      <style>{`
        @keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes bounce { 0%,100% { transform: translateY(0); } 50% { transform: translateY(5px); } }
      `}</style>
    </section>
  );
}
