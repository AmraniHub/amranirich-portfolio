"use client";

import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import { certificates, certCategories } from "@/data/certificates";
import type { CertCategory } from "@/data/certificates";
import { ExternalLink, Award } from "lucide-react";

export default function CredentialsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? certificates
      : certificates.filter((c) => c.category === (active as CertCategory));

  return (
    <>
      {/* Header */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "70px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        {/* Ambient blooms */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-10%", right: "-5%",
            width: "55vw", height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.08) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "0", left: "-5%",
            width: "35vw", height: "35vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.06) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div style={{ width: 28, height: 1, background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)" }} />
                <p className="section-label" style={{ color: "var(--gold-primary)", letterSpacing: "0.25em" }}>Verified Credentials</p>
              </div>
              <h1
                className="heading-display mb-5"
                style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
              >
                29{" "}
                <span className="text-glow-gold">Certifications</span>
              </h1>
              <p style={{ color: "var(--text-secondary)", fontSize: "14px", maxWidth: "520px", lineHeight: 1.8 }}>
                A curated portfolio of verified credentials across AI &amp; ML,
                Web3 &amp; Blockchain, Marketing, Cloud &amp; Tech, and Business.
              </p>
            </div>
            <a
              href="https://credentials.net/profile/amranirich/wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
              style={{ alignSelf: "flex-start" }}
            >
              <Award size={13} />
              credential.net wallet
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap gap-8 mt-10 pt-10"
            style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}
          >
            {[
              { count: "8", label: "AI & ML", color: "rgba(139, 92, 246, 0.8)" },
              { count: "7", label: "Web3 & Blockchain", color: "var(--gold-primary)" },
              { count: "5", label: "Marketing", color: "rgba(59, 130, 246, 0.8)" },
              { count: "4", label: "Cloud & Tech", color: "rgba(16, 185, 129, 0.8)" },
              { count: "5", label: "Business", color: "rgba(251, 146, 60, 0.8)" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  className="stat-number"
                  style={{
                    fontSize: "28px",
                    color: s.color,
                    marginBottom: "4px",
                  }}
                >
                  {s.count}
                </p>
                <p className="section-label" style={{ fontSize: "9px", color: "var(--text-secondary)" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="relative section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-secondary) 0%, rgba(2,8,15,0.98) 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 18px",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  border: active === cat
                    ? "1px solid rgba(201,168,76,0.7)"
                    : "1px solid rgba(201, 168, 76, 0.18)",
                  background: active === cat ? "rgba(201, 168, 76, 0.1)" : "transparent",
                  color: active === cat ? "var(--gold-light)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-jetbrains, monospace)",
                  boxShadow: active === cat ? "0 0 20px rgba(201,168,76,0.1)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
                {active !== cat && (
                  <span style={{ marginLeft: "6px", opacity: 0.4, fontSize: "9px" }}>
                    ({cat === "All" ? certificates.length : certificates.filter((c) => c.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
              marginBottom: "40px",
            }}
          />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {filtered.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Wallet CTA */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          padding: "90px 0",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        {/* Center bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "50vw", height: "50vh",
            background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />
        <div className="relative max-w-3xl mx-auto px-6 text-center">
          <div
            style={{
              width: "60px", height: "60px",
              border: "1px solid rgba(201,168,76,0.3)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 24px",
              background: "rgba(201,168,76,0.04)",
              boxShadow: "0 0 30px rgba(201,168,76,0.1)",
            }}
          >
            <Award size={24} style={{ color: "var(--gold-primary)" }} />
          </div>
          <h2 className="heading-serif mb-4" style={{ fontSize: "clamp(20px, 3vw, 32px)" }}>
            Verify All Credentials
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "14px", marginBottom: "32px", lineHeight: 1.7 }}>
            All 29 certifications are publicly verifiable on credential.net
          </p>
          <a
            href="https://credentials.net/profile/amranirich/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex border-glow-animated"
          >
            <Award size={14} />
            Open Credential Wallet
            <ExternalLink size={12} />
          </a>
        </div>
      </section>
    </>
  );
}
