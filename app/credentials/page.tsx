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
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="section-label mb-4">Verified Credentials</p>
              <h1
                className="heading-display mb-4"
                style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
              >
                29{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Certifications
                </span>
              </h1>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                }}
              >
                A curated portfolio of verified credentials across AI &amp; ML,
                Web3 &amp; Blockchain, Marketing, Cloud &amp; Tech, and
                Business.
              </p>
            </div>
            <a
              href="https://credentials.net/profile/amranirich/wallet"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold flex items-center gap-2"
              style={{ alignSelf: "flex-start" }}
            >
              <Award size={14} />
              credential.net wallet
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap gap-8 mt-10 pt-10" style={{ borderTop: "1px solid rgba(201,168,76,0.1)" }}>
            {[
              { count: "8", label: "AI & ML" },
              { count: "7", label: "Web3 & Blockchain" },
              { count: "5", label: "Marketing" },
              { count: "4", label: "Cloud & Tech" },
              { count: "5", label: "Business" },
            ].map((s) => (
              <div key={s.label}>
                <p
                  style={{
                    color: "var(--gold-primary)",
                    fontFamily: "var(--font-playfair, serif)",
                    fontSize: "24px",
                    fontWeight: 700,
                  }}
                >
                  {s.count}
                </p>
                <p
                  className="section-label"
                  style={{ fontSize: "9px", color: "var(--text-secondary)" }}
                >
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {certCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="transition-all duration-200"
                style={{
                  padding: "7px 16px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  border:
                    active === cat
                      ? "1px solid var(--gold-primary)"
                      : "1px solid rgba(201, 168, 76, 0.2)",
                  background:
                    active === cat ? "rgba(201, 168, 76, 0.1)" : "transparent",
                  color:
                    active === cat
                      ? "var(--gold-light)"
                      : "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-jetbrains, monospace)",
                }}
              >
                {cat}
                {active !== cat && (
                  <span
                    style={{
                      marginLeft: "6px",
                      opacity: 0.5,
                      fontSize: "9px",
                    }}
                  >
                    (
                    {cat === "All"
                      ? certificates.length
                      : certificates.filter((c) => c.category === cat).length}
                    )
                  </span>
                )}
              </button>
            ))}
          </div>

          <div className="gold-divider mb-10" />

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((cert) => (
              <CertificateCard key={cert.id} cert={cert} />
            ))}
          </div>
        </div>
      </section>

      {/* Wallet CTA */}
      <section
        style={{
          background: "var(--bg-primary)",
          padding: "80px 0",
          borderTop: "1px solid rgba(201,168,76,0.1)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Award
            size={36}
            style={{ color: "var(--gold-primary)", margin: "0 auto 20px" }}
          />
          <h2
            className="heading-serif mb-4"
            style={{ fontSize: "clamp(20px, 3vw, 30px)" }}
          >
            Verify All Credentials
          </h2>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "14px",
              marginBottom: "28px",
            }}
          >
            All 29 certifications are publicly verifiable on credential.net
          </p>
          <a
            href="https://credentials.net/profile/amranirich/wallet"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold-fill inline-flex"
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
