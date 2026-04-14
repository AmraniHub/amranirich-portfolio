"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import dynamic from "next/dynamic";
import StatsStrip from "./StatsStrip";

const ParticleNetwork = dynamic(() => import("./ParticleNetwork"), {
  ssr: false,
});

const tickerItems = [
  "RWA",
  "Tokenization",
  "DeFi",
  "Real Estate",
  "Web3",
  "Dubai",
  "UHNWI",
  "Family Office",
  "Meta Ads",
  "AI Systems",
  "29 Certifications",
  "Performance Media",
  "Blockchain",
  "Amrania",
  "AmraniAds",
];

export default function Hero() {
  const headlineRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const el = headlineRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    const t = setTimeout(() => {
      el.style.transition = "opacity 0.8s ease, transform 0.8s ease";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }, 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative flex flex-col"
      style={{
        minHeight: "100vh",
        background: "var(--bg-primary)",
        paddingTop: "80px",
      }}
    >
      {/* Grain texture */}
      <div className="grain-overlay" />

      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 40%, rgba(201,168,76,0.06) 0%, transparent 70%)",
          zIndex: 0,
        }}
        aria-hidden="true"
      />

      {/* Main content */}
      <div className="relative flex-1 flex items-center z-10">
        <div className="max-w-7xl mx-auto w-full px-6 py-16 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left — Text */}
          <div>
            {/* Label */}
            <p className="section-label mb-6" style={{ letterSpacing: "0.25em" }}>
              ◆ &nbsp;RWA · Tokenization · Web3
            </p>

            {/* Headline */}
            <h1
              ref={headlineRef}
              className="heading-display mb-4"
              style={{ fontSize: "clamp(36px, 5.5vw, 68px)" }}
            >
              Abdelali{" "}
              <span
                style={{
                  background:
                    "linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 50%, var(--gold-primary) 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                El Amrani
              </span>
            </h1>

            {/* Sub-headline */}
            <p
              className="heading-serif mb-2"
              style={{
                fontSize: "clamp(16px, 2vw, 22px)",
                color: "var(--gold-light)",
                opacity: 0.9,
              }}
            >
              RWA &amp; Tokenization Strategist
            </p>
            <p
              className="mb-6"
              style={{
                fontSize: "14px",
                color: "var(--text-secondary)",
                letterSpacing: "0.04em",
              }}
            >
              Founder of Amrania · Performance Media Buyer · AI Systems Builder
            </p>

            {/* Description */}
            <p
              className="mb-10 leading-relaxed"
              style={{
                color: "var(--text-secondary)",
                fontSize: "15px",
                maxWidth: "520px",
              }}
            >
              Building tokenized real estate and Web3 wealth architecture for
              UHNWIs and family offices. Proven operator in performance media
              buying and AI-powered product development. Dubai-focused.
              Operator-first.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Link href="/ventures" className="btn-gold-fill">
                Explore Amrania
                <ArrowRight size={14} />
              </Link>
              <Link href="/projects" className="btn-gold">
                View Work
                <ArrowRight size={14} />
              </Link>
            </div>

            {/* Social proof row */}
            <div className="mt-10 flex items-center gap-6 flex-wrap">
              <a
                href="https://www.linkedin.com/in/amranirich/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: "var(--text-secondary)", fontSize: "12px" }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--gold-primary)",
                    display: "inline-block",
                  }}
                />
                6,800+ LinkedIn Followers
              </a>
              <a
                href="https://credentials.net/profile/amranirich/wallet"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-opacity hover:opacity-80"
                style={{ color: "var(--text-secondary)", fontSize: "12px" }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "var(--gold-primary)",
                    display: "inline-block",
                  }}
                />
                29 Verified Certifications
              </a>
            </div>
          </div>

          {/* Right — Particle Network */}
          <div
            className="relative hidden lg:flex items-center justify-center"
            style={{ height: "480px" }}
          >
            {/* Outer ring */}
            <div
              className="absolute"
              style={{
                width: "400px",
                height: "400px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.12)",
              }}
            />
            <div
              className="absolute"
              style={{
                width: "280px",
                height: "280px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.08)",
              }}
            />

            {/* Canvas */}
            <div
              className="relative rounded-full overflow-hidden"
              style={{
                width: "440px",
                height: "440px",
                border: "1px solid rgba(201, 168, 76, 0.15)",
                background: "rgba(10, 22, 40, 0.4)",
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
                    width: "72px",
                    height: "72px",
                    border: "1px solid rgba(201, 168, 76, 0.35)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(5, 12, 26, 0.8)",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      fontSize: "20px",
                      fontWeight: 700,
                      color: "var(--gold-primary)",
                    }}
                  >
                    AR
                  </span>
                </div>
                <p
                  className="mt-3 section-label"
                  style={{
                    fontSize: "9px",
                    color: "var(--gold-muted)",
                    letterSpacing: "0.3em",
                  }}
                >
                  RWA NETWORK
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ticker */}
      <div
        className="relative z-10 py-4"
        style={{
          background: "var(--bg-secondary)",
          borderTop: "1px solid rgba(201, 168, 76, 0.1)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="ticker-wrapper">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, i) => (
              <span key={i} className="inline-flex items-center gap-4 mx-6">
                <span
                  style={{
                    color: "var(--gold-primary)",
                    fontSize: "11px",
                    letterSpacing: "0.15em",
                    fontFamily: "var(--font-jetbrains, monospace)",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
                <span
                  style={{
                    color: "var(--gold-muted)",
                    fontSize: "8px",
                  }}
                >
                  ✦
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Strip */}
      <StatsStrip />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-[200px] left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10 hidden md:flex"
        style={{ color: "var(--gold-muted)", opacity: 0.5 }}
      >
        <span style={{ fontSize: "9px", letterSpacing: "0.2em" }}>SCROLL</span>
        <ChevronDown
          size={14}
          className="animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </div>
    </section>
  );
}
