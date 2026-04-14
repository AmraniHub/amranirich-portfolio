"use client";

import { useState } from "react";
import { ExternalLink, Brain, TrendingUp, Cpu, Briefcase, Globe } from "lucide-react";
import type { Certificate } from "@/data/certificates";

function CategoryIcon({ category }: { category: Certificate["category"] }) {
  const style = { color: "var(--gold-primary)", width: 16, height: 16 };
  switch (category) {
    case "AI & ML":
      return <Brain style={style} />;
    case "Web3 & Blockchain":
      return <Globe style={style} />;
    case "Marketing":
      return <TrendingUp style={style} />;
    case "Cloud & Tech":
      return <Cpu style={style} />;
    case "Business":
      return <Briefcase style={style} />;
    default:
      return <Briefcase style={style} />;
  }
}

const categoryColors: Record<Certificate["category"], string> = {
  "AI & ML": "rgba(139, 92, 246, 0.12)",
  "Web3 & Blockchain": "rgba(201, 168, 76, 0.1)",
  Marketing: "rgba(59, 130, 246, 0.1)",
  "Cloud & Tech": "rgba(16, 185, 129, 0.1)",
  Business: "rgba(251, 146, 60, 0.1)",
};

const categoryBorder: Record<Certificate["category"], string> = {
  "AI & ML": "rgba(139, 92, 246, 0.35)",
  "Web3 & Blockchain": "rgba(201, 168, 76, 0.35)",
  Marketing: "rgba(59, 130, 246, 0.35)",
  "Cloud & Tech": "rgba(16, 185, 129, 0.35)",
  Business: "rgba(251, 146, 60, 0.35)",
};

const categoryGlow: Record<Certificate["category"], string> = {
  "AI & ML": "rgba(139, 92, 246, 0.08)",
  "Web3 & Blockchain": "rgba(201, 168, 76, 0.06)",
  Marketing: "rgba(59, 130, 246, 0.08)",
  "Cloud & Tech": "rgba(16, 185, 129, 0.06)",
  Business: "rgba(251, 146, 60, 0.06)",
};

export default function CertificateCard({ cert }: { cert: Certificate }) {
  const [hovered, setHovered] = useState(false);

  const formattedDate = new Date(cert.issueDate + "-01").toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  );

  return (
    <div
      className="glass-card h-full flex flex-col relative overflow-hidden"
      style={{
        padding: "20px",
        borderColor: hovered
          ? categoryBorder[cert.category]
          : "rgba(201, 168, 76, 0.1)",
        transform: hovered ? "translateY(-5px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.35s ease",
        boxShadow: hovered
          ? `0 20px 50px rgba(0,0,0,0.5), 0 0 30px ${categoryGlow[cert.category]}`
          : "0 4px 20px rgba(0,0,0,0.25)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Subtle category-colored top edge */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "2px",
          background: `linear-gradient(90deg, transparent, ${categoryBorder[cert.category]}, transparent)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.3s ease",
        }}
        aria-hidden="true"
      />

      {/* Background glow on hover */}
      <div
        className="absolute top-0 right-0 pointer-events-none"
        style={{
          width: "120px",
          height: "120px",
          borderRadius: "50%",
          background: `radial-gradient(circle, ${categoryGlow[cert.category]} 0%, transparent 70%)`,
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s ease",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {/* Icon row */}
      <div className="flex items-start justify-between mb-4">
        <div
          style={{
            width: "38px",
            height: "38px",
            borderRadius: "6px",
            background: categoryColors[cert.category],
            border: `1px solid ${categoryBorder[cert.category]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <CategoryIcon category={cert.category} />
        </div>
        <span
          className="tag-pill"
          style={{
            fontSize: "8px",
            borderColor: categoryBorder[cert.category],
            color: hovered ? "var(--text-primary)" : "var(--text-secondary)",
            transition: "color 0.2s",
          }}
        >
          {cert.category}
        </span>
      </div>

      {/* Name */}
      <h3
        className="heading-serif flex-1 mb-2"
        style={{
          fontSize: "13px",
          lineHeight: 1.45,
          color: hovered ? "var(--text-primary)" : "var(--text-primary)",
        }}
      >
        {cert.name}
      </h3>

      {/* Issuer */}
      <p
        style={{
          color: "var(--gold-muted)",
          fontSize: "11px",
          marginBottom: "3px",
          fontFamily: "var(--font-jetbrains, monospace)",
          letterSpacing: "0.03em",
        }}
      >
        {cert.issuer}
      </p>

      {/* Date */}
      <p
        style={{
          color: "var(--text-dim)",
          fontSize: "10px",
          marginBottom: "16px",
          fontFamily: "var(--font-jetbrains, monospace)",
        }}
      >
        Issued {formattedDate}
      </p>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background: `linear-gradient(90deg, ${categoryBorder[cert.category]}40, transparent)`,
          marginBottom: "14px",
        }}
      />

      {/* Verify button */}
      <a
        href={
          cert.credentialUrl ||
          "https://credentials.net/profile/amranirich/wallet"
        }
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold flex items-center justify-center gap-2 mt-auto"
        style={{ padding: "7px 14px", fontSize: "10px" }}
        aria-label={`Verify ${cert.name}`}
      >
        Verify Credential
        <ExternalLink size={9} />
      </a>
    </div>
  );
}
