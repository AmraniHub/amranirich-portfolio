"use client";

import { useState } from "react";
import { ExternalLink, Brain, TrendingUp, Cpu, Briefcase, Globe } from "lucide-react";
import type { Certificate } from "@/data/certificates";

function CategoryIcon({ category }: { category: Certificate["category"] }) {
  const style = { color: "var(--gold-primary)", width: 18, height: 18 };
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
  "AI & ML": "rgba(139, 92, 246, 0.15)",
  "Web3 & Blockchain": "rgba(201, 168, 76, 0.1)",
  Marketing: "rgba(59, 130, 246, 0.12)",
  "Cloud & Tech": "rgba(16, 185, 129, 0.1)",
  Business: "rgba(251, 146, 60, 0.1)",
};

const categoryBorder: Record<Certificate["category"], string> = {
  "AI & ML": "rgba(139, 92, 246, 0.3)",
  "Web3 & Blockchain": "rgba(201, 168, 76, 0.3)",
  Marketing: "rgba(59, 130, 246, 0.3)",
  "Cloud & Tech": "rgba(16, 185, 129, 0.3)",
  Business: "rgba(251, 146, 60, 0.3)",
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
      className="glass-card h-full flex flex-col transition-all duration-300"
      style={{
        padding: "20px",
        borderColor: hovered
          ? categoryBorder[cert.category]
          : "rgba(201, 168, 76, 0.12)",
        transform: hovered ? "translateY(-3px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Icon row */}
      <div className="flex items-start justify-between mb-4">
        <div
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "8px",
            background: categoryColors[cert.category],
            border: `1px solid ${categoryBorder[cert.category]}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CategoryIcon category={cert.category} />
        </div>
        <span className="tag-pill" style={{ fontSize: "9px" }}>
          {cert.category}
        </span>
      </div>

      {/* Name */}
      <h3
        className="heading-serif flex-1 mb-2"
        style={{ fontSize: "14px", lineHeight: 1.4 }}
      >
        {cert.name}
      </h3>

      {/* Issuer */}
      <p
        style={{
          color: "var(--gold-muted)",
          fontSize: "12px",
          marginBottom: "4px",
          fontFamily: "var(--font-jetbrains, monospace)",
        }}
      >
        {cert.issuer}
      </p>

      {/* Date */}
      <p
        style={{
          color: "var(--text-secondary)",
          fontSize: "11px",
          marginBottom: "16px",
        }}
      >
        Issued {formattedDate}
      </p>

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
        Verify
        <ExternalLink size={10} />
      </a>
    </div>
  );
}
