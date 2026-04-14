"use client";

import { ExternalLink } from "lucide-react";
import { LinkedinIcon } from "./SocialIcons";

export default function LinkedInFeed() {
  return (
    <section
      className="section-pad"
      style={{ background: "var(--bg-secondary)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <p className="section-label mb-3">Latest Thinking</p>
            <h2
              className="heading-serif"
              style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
            >
              Posts &amp; Insights
            </h2>
          </div>
          <a
            href="https://www.linkedin.com/in/amranirich/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold flex items-center gap-2"
            style={{ padding: "8px 20px", fontSize: "11px", alignSelf: "flex-end" }}
          >
            <LinkedinIcon size={13} />
            Follow on LinkedIn
            <ExternalLink size={11} />
          </a>
        </div>

        <div className="gold-divider mb-12" />

        {/* LinkedIn embed container */}
        <div
          className="glass-card overflow-hidden"
          style={{
            padding: "0",
            borderColor: "rgba(201, 168, 76, 0.2)",
            background: "rgba(10, 22, 40, 0.5)",
          }}
        >
          {/* Gold top bar */}
          <div
            style={{
              height: "3px",
              background:
                "linear-gradient(90deg, var(--gold-primary), var(--gold-light), var(--gold-primary))",
            }}
          />

          {/* Profile header row */}
          <div
            className="flex items-center gap-4 p-6"
            style={{ borderBottom: "1px solid rgba(201, 168, 76, 0.1)" }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "50%",
                border: "1px solid rgba(201, 168, 76, 0.3)",
                background: "var(--bg-surface)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-playfair, serif)",
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "var(--gold-primary)",
                }}
              >
                AR
              </span>
            </div>
            <div>
              <p
                style={{
                  color: "var(--text-primary)",
                  fontWeight: 600,
                  fontSize: "14px",
                }}
              >
                Abdelali El Amrani
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "12px",
                }}
              >
                RWA &amp; Tokenization Strategist · Founder of Amrania
              </p>
            </div>
            <div className="ml-auto">
              <a
                href="https://www.linkedin.com/in/amranirich/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold"
                style={{ padding: "6px 14px", fontSize: "10px" }}
              >
                <LinkedinIcon size={11} />
                View Profile
              </a>
            </div>
          </div>

          {/* LinkedIn iframe embed */}
          <div className="relative" style={{ minHeight: "520px" }}>
            {/* Fallback content shown while iframe loads or if blocked */}
            <div
              className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center"
              style={{ zIndex: 0 }}
            >
              <LinkedinIcon
                size={40}
                style={{ color: "var(--gold-muted)", marginBottom: "16px" }}
              />
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  maxWidth: "360px",
                  lineHeight: 1.7,
                }}
              >
                Follow Abdelali on LinkedIn for daily insights on RWA
                tokenization, Web3 wealth architecture, and performance media
                buying.
              </p>
              <a
                href="https://www.linkedin.com/in/amranirich/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gold-fill mt-6"
                style={{ fontSize: "12px", padding: "10px 24px" }}
              >
                <LinkedinIcon size={13} />
                Open LinkedIn Feed
              </a>

              {/* Stats row */}
              <div
                className="flex gap-8 mt-8 pt-8"
                style={{ borderTop: "1px solid rgba(201, 168, 76, 0.1)", width: "100%", justifyContent: "center" }}
              >
                <div className="text-center">
                  <p
                    style={{
                      color: "var(--gold-primary)",
                      fontSize: "22px",
                      fontFamily: "var(--font-playfair, serif)",
                      fontWeight: 700,
                    }}
                  >
                    6,800+
                  </p>
                  <p
                    className="section-label"
                    style={{ fontSize: "9px", color: "var(--text-secondary)" }}
                  >
                    Followers
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    background: "rgba(201, 168, 76, 0.15)",
                  }}
                />
                <div className="text-center">
                  <p
                    style={{
                      color: "var(--gold-primary)",
                      fontSize: "22px",
                      fontFamily: "var(--font-playfair, serif)",
                      fontWeight: 700,
                    }}
                  >
                    500+
                  </p>
                  <p
                    className="section-label"
                    style={{ fontSize: "9px", color: "var(--text-secondary)" }}
                  >
                    Connections
                  </p>
                </div>
                <div
                  style={{
                    width: "1px",
                    background: "rgba(201, 168, 76, 0.15)",
                  }}
                />
                <div className="text-center">
                  <p
                    style={{
                      color: "var(--gold-primary)",
                      fontSize: "22px",
                      fontFamily: "var(--font-playfair, serif)",
                      fontWeight: 700,
                    }}
                  >
                    RWA
                  </p>
                  <p
                    className="section-label"
                    style={{ fontSize: "9px", color: "var(--text-secondary)" }}
                  >
                    Focus Area
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
