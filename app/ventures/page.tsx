import { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Building2,
  TrendingUp,
  Shield,
  Globe,
  Zap,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Ventures — Amrania & AmraniAds | amranirich",
  description:
    "Amrania: tokenized luxury real estate advisory for UHNWIs in Dubai. AmraniAds: performance media buying across MENA.",
};

export default function VenturesPage() {
  return (
    <>
      {/* Page header */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "70px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        {/* Gold bloom top-right */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-5%", right: "-5%",
            width: "55vw", height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.09) 0%, transparent 60%)",
            filter: "blur(90px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ width: 28, height: 1, background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)" }} />
            <p className="section-label" style={{ color: "var(--gold-primary)", letterSpacing: "0.25em" }}>Portfolio Companies</p>
          </div>
          <h1
            className="heading-display mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Active <span className="text-glow-gold">Ventures</span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "520px",
              lineHeight: 1.8,
            }}
          >
            Two operating entities at different stages — one redefining wealth
            architecture, one generating returns through performance marketing.
          </p>
        </div>
      </section>

      {/* ── AMRANIA ──────────────────────────────────────────────────────── */}
      <section
        className="relative overflow-hidden section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-secondary) 0%, rgba(6,14,26,0.98) 100%)",
        }}
        id="amrania"
      >
        {/* Gold ambient */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "20%", left: "-5%",
            width: "45vw", height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-6">
          {/* Feature card */}
          <div
            className="relative glass-card overflow-hidden mb-16"
            style={{
              borderLeft: "4px solid var(--gold-primary)",
              borderRadius: "12px",
              boxShadow: "0 0 80px rgba(201,168,76,0.06), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-8 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "1px solid rgba(201, 168, 76, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(5, 12, 26, 0.7)",
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
                      A
                    </span>
                  </div>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      Amrania
                    </h2>
                    <p
                      className="section-label"
                      style={{ fontSize: "9px", marginTop: "2px" }}
                    >
                      amrania.com
                    </p>
                  </div>
                  <span className="status-badge status-dev ml-auto">
                    In Development — Dubai Launch 2025
                  </span>
                </div>

                <p
                  className="mb-6"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  Amrania is a tokenized luxury real estate and Web3 wealth
                  advisory firm being built for UHNWIs and family offices in
                  Dubai. It operates at the intersection of real-world asset
                  tokenization (RWA), blockchain infrastructure, and
                  institutional wealth management.
                </p>

                <p
                  className="mb-8"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "14px",
                    lineHeight: 1.85,
                  }}
                >
                  The platform enables fractional ownership of prime real estate
                  assets via blockchain-issued security tokens with full
                  regulatory compliance under Dubai DIFC and ADGM frameworks.
                  Target clients: family offices, UHNWI investors, and
                  institutional capital seeking programmable, compliant exposure
                  to premium real estate.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "RWA",
                    "Tokenization",
                    "Dubai",
                    "UHNWI",
                    "Web3",
                    "Family Office",
                    "DIFC",
                    "Security Tokens",
                  ].map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://amrania.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-gold-fill border-glow-animated"
                  >
                    Visit Amrania
                    <ExternalLink size={12} />
                  </a>
                  <Link href="/contact" className="btn-gold">
                    Partner With Us
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right */}
              <div
                className="hidden lg:flex flex-col justify-center p-12"
                style={{
                  background: "rgba(201, 168, 76, 0.03)",
                  borderLeft: "1px solid rgba(201, 168, 76, 0.1)",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Building2 size={20} />,
                      title: "Real Estate",
                      desc: "Prime Dubai properties tokenized as security tokens",
                    },
                    {
                      icon: <Shield size={20} />,
                      title: "Compliance",
                      desc: "DIFC & ADGM regulatory framework",
                    },
                    {
                      icon: <Globe size={20} />,
                      title: "Web3 Native",
                      desc: "Blockchain-issued fractional ownership",
                    },
                    {
                      icon: <TrendingUp size={20} />,
                      title: "UHNWI Focus",
                      desc: "Institutional-grade wealth advisory",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card"
                      style={{ padding: "16px" }}
                    >
                      <div
                        style={{
                          color: "var(--gold-primary)",
                          marginBottom: "8px",
                        }}
                      >
                        {item.icon}
                      </div>
                      <p
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "11px",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Amrania pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Building2 size={24} />,
                title: "RWA Tokenization",
                desc: "Converting prime Dubai real estate into blockchain-native security tokens. Fractional ownership with programmable compliance built in.",
              },
              {
                icon: <Shield size={24} />,
                title: "Institutional Wealth Advisory",
                desc: "Bespoke advisory for family offices and UHNWI clients navigating Web3 wealth architecture and digital asset allocation.",
              },
              {
                icon: <Globe size={24} />,
                title: "Dubai-First Strategy",
                desc: "Leveraging Dubai's DIFC and ADGM regulatory frameworks — the most advanced jurisdictions for institutional crypto and tokenized assets.",
              },
            ].map((pillar, i) => (
              <div key={i} className="glass-card p-6">
                <div
                  style={{ color: "var(--gold-primary)", marginBottom: "12px" }}
                >
                  {pillar.icon}
                </div>
                <h3
                  className="heading-serif mb-3"
                  style={{ fontSize: "16px" }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    lineHeight: 1.7,
                  }}
                >
                  {pillar.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMRANIADS ───────────────────────────────────────────────────── */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-primary)" }}
        id="amraniads"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div
            className="glass-card overflow-hidden mb-14"
            style={{
              borderLeft: "4px solid rgba(59, 130, 246, 0.6)",
              borderRadius: "12px",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-8 md:p-14">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      border: "1px solid rgba(59, 130, 246, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(5, 12, 26, 0.7)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "20px",
                        fontWeight: 700,
                        color: "rgba(59, 130, 246, 0.9)",
                      }}
                    >
                      AA
                    </span>
                  </div>
                  <div>
                    <h2
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "28px",
                        fontWeight: 700,
                        color: "var(--text-primary)",
                      }}
                    >
                      AmraniAds
                    </h2>
                    <p
                      className="section-label"
                      style={{ fontSize: "9px", marginTop: "2px" }}
                    >
                      Performance Media Buying · MENA
                    </p>
                  </div>
                  <span className="status-badge status-active ml-auto">
                    Active
                  </span>
                </div>

                <p
                  className="mb-6"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    lineHeight: 1.85,
                  }}
                >
                  AmraniAds is a performance media buying agency operating
                  across Morocco, UAE, and MENA. Specialized in direct response
                  campaigns across Meta, Google Ads, and TikTok with a focus on
                  measurable ROAS and scalable paid acquisition systems.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "Meta Ads",
                    "Google Ads",
                    "TikTok Ads",
                    "Morocco",
                    "UAE",
                    "MENA",
                    "Performance Marketing",
                    "E-Commerce",
                    "Lead Gen",
                  ].map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <Link href="/contact" className="btn-gold">
                  Work With AmraniAds
                  <ArrowRight size={12} />
                </Link>
              </div>

              <div
                className="hidden lg:flex flex-col justify-center p-12"
                style={{
                  background: "rgba(59, 130, 246, 0.02)",
                  borderLeft: "1px solid rgba(59, 130, 246, 0.1)",
                }}
              >
                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      icon: <Target size={20} />,
                      title: "Meta Ads",
                      desc: "Facebook & Instagram campaigns for e-commerce and lead gen",
                    },
                    {
                      icon: <TrendingUp size={20} />,
                      title: "Google Ads",
                      desc: "Search, Shopping, and Performance Max campaigns",
                    },
                    {
                      icon: <Zap size={20} />,
                      title: "TikTok Ads",
                      desc: "COD and DTC campaigns targeting Morocco and MENA",
                    },
                    {
                      icon: <Globe size={20} />,
                      title: "MENA Focus",
                      desc: "Morocco, UAE, and broader Arab market expertise",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="glass-card"
                      style={{
                        padding: "16px",
                        borderColor: "rgba(59, 130, 246, 0.15)",
                      }}
                    >
                      <div
                        style={{
                          color: "rgba(59, 130, 246, 0.8)",
                          marginBottom: "8px",
                        }}
                      >
                        {item.icon}
                      </div>
                      <p
                        style={{
                          color: "var(--text-primary)",
                          fontSize: "13px",
                          fontWeight: 600,
                          marginBottom: "4px",
                        }}
                      >
                        {item.title}
                      </p>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "11px",
                          lineHeight: 1.5,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          padding: "100px 0",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        {/* Center bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60vw", height: "50vh",
            background: "radial-gradient(ellipse at center, rgba(201,168,76,0.07) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ width: 36, height: 1, background: "rgba(201,168,76,0.4)" }} />
            <p className="section-label" style={{ color: "var(--gold-primary)" }}>Ready to Collaborate</p>
            <div style={{ width: 36, height: 1, background: "rgba(201,168,76,0.4)" }} />
          </div>
          <h2
            className="heading-display mb-6"
            style={{ fontSize: "clamp(24px, 3.5vw, 44px)" }}
          >
            Partner with <span className="text-glow-gold">Amrania</span> or AmraniAds
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              marginBottom: "28px",
              lineHeight: 1.8,
            }}
          >
            Whether you&apos;re an institutional investor exploring RWA
            tokenization or a brand seeking performance media buying — let&apos;s talk.
          </p>
          <Link href="/contact" className="btn-gold-fill inline-flex border-glow-animated">
            Start a Conversation
            <ArrowRight size={14} />
          </Link>
        </div>
      </section>
    </>
  );
}
