import { Metadata } from "next";
import {
  MapPin,
  Languages,
  Zap,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, DiscordIcon } from "@/components/SocialIcons";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "About — Abdelali El Amrani | amranirich",
  description:
    "Performance media buyer turned Web3 operator. Building Amrania from Morocco, targeting Dubai. RWA tokenization strategist and AI systems builder.",
};

const stack = [
  "Meta Ads",
  "Google Ads",
  "TikTok Ads",
  "Next.js",
  "TypeScript",
  "Shopify",
  "Claude AI",
  "LangChain",
  "Three.js",
  "Solidity",
  "Web3.js",
  "Ethers.js",
  "Tokenization Protocols",
  "DIFC Regulatory Framework",
  "RWA Infrastructure",
  "Android (Kotlin)",
];

export default function AboutPage() {
  return (
    <>
      {/* Page header */}
      <section
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "80px",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div>
              <p className="section-label mb-4">About</p>
              <h1
                className="heading-display mb-6"
                style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
              >
                Abdelali{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  El Amrani
                </span>
              </h1>
              <p
                className="heading-serif mb-4"
                style={{ color: "var(--gold-light)", fontSize: "18px", opacity: 0.9 }}
              >
                RWA &amp; Tokenization Strategist
              </p>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "15px",
                  lineHeight: 1.8,
                  maxWidth: "520px",
                }}
              >
                Performance media buyer turned Web3 operator. I started in
                e-commerce, scaled through paid social, and built agency
                operations across MENA — now I&apos;m channeling that execution
                mindset into Amrania, a tokenized real estate platform being
                built for UHNWIs and family offices in Dubai.
              </p>
              <div className="flex items-center gap-4 mt-6 flex-wrap">
                <span
                  className="flex items-center gap-1.5"
                  style={{ color: "var(--text-secondary)", fontSize: "13px" }}
                >
                  <MapPin size={13} style={{ color: "var(--gold-primary)" }} />
                  Morocco · Dubai (Target)
                </span>
                <span
                  className="flex items-center gap-1.5"
                  style={{ color: "var(--text-secondary)", fontSize: "13px" }}
                >
                  <Languages size={13} style={{ color: "var(--gold-primary)" }} />
                  Arabic · English · French · Darija
                </span>
              </div>
            </div>

            {/* Photo placeholder */}
            <div className="flex justify-center lg:justify-end">
              <div
                style={{
                  width: "260px",
                  height: "260px",
                  borderRadius: "50%",
                  border: "2px solid rgba(201, 168, 76, 0.3)",
                  background: "var(--bg-surface)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {/* Outer ring */}
                <div
                  style={{
                    position: "absolute",
                    inset: "-12px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201, 168, 76, 0.12)",
                  }}
                />
                <div className="text-center">
                  <p
                    style={{
                      fontFamily: "var(--font-playfair, serif)",
                      fontSize: "52px",
                      fontWeight: 700,
                      color: "var(--gold-primary)",
                      lineHeight: 1,
                    }}
                  >
                    AE
                  </p>
                  <p
                    className="section-label mt-2"
                    style={{ fontSize: "9px", letterSpacing: "0.25em" }}
                  >
                    PHOTO PLACEHOLDER
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section
        style={{
          background: "var(--bg-secondary)",
          padding: "60px 0",
          borderTop: "1px solid rgba(201, 168, 76, 0.1)",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="section-label mb-6">Philosophy</p>
          <blockquote
            className="heading-display"
            style={{
              fontSize: "clamp(24px, 4vw, 44px)",
              background:
                "linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 50%, var(--gold-primary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            &ldquo;I build systems that move capital.&rdquo;
          </blockquote>
          <p
            className="mt-6"
            style={{ color: "var(--text-secondary)", fontSize: "14px" }}
          >
            — Abdelali El Amrani, amranirich
          </p>
        </div>
      </section>

      {/* Bio deep-dive */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Long bio */}
            <div className="lg:col-span-2">
              <p className="section-label mb-4">Biography</p>
              <h2
                className="heading-serif mb-6"
                style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
              >
                Operator-First. System-Driven.
              </h2>
              <div
                className="flex flex-col gap-5"
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "14px",
                  lineHeight: 1.85,
                }}
              >
                <p>
                  I started in performance marketing — running Meta, Google, and
                  TikTok campaigns for e-commerce brands in Morocco. I learned
                  the fundamentals of direct response, paid acquisition, and
                  what it actually takes to build a profitable business from
                  zero.
                </p>
                <p>
                  Over time I built AmraniAds — a boutique performance media
                  buying agency operating across Morocco, UAE, and MENA. I
                  managed campaigns for lead generation clients, e-commerce
                  brands, and COD operations. I understand how capital flows
                  through paid channels at scale.
                </p>
                <p>
                  In parallel, I became deeply interested in Web3, blockchain
                  infrastructure, and real-world asset tokenization. I spent
                  2023–2024 earning 29 certifications, building AI automation
                  tools, and shipping products — an Android app, a Shopify app,
                  and internal Claude-powered pipelines.
                </p>
                <p>
                  Now I&apos;m building Amrania — a tokenized luxury real estate
                  and Web3 wealth advisory firm targeting UHNWIs and family
                  offices in Dubai. The thesis: real estate is the world&apos;s
                  largest asset class, blockchain enables fractional ownership
                  and programmable compliance, and Dubai is the jurisdiction
                  that makes institutional-grade tokenization possible.
                </p>
                <p>
                  I&apos;m fluent in Arabic, English, French, and Moroccan
                  Darija. Operator-first mindset. I don&apos;t delegate
                  understanding.
                </p>
              </div>
            </div>

            {/* Available for */}
            <div>
              <p className="section-label mb-4">Available For</p>
              <div className="flex flex-col gap-3">
                {[
                  { icon: <Zap size={14} />, label: "RWA Consulting" },
                  {
                    icon: <Zap size={14} />,
                    label: "Performance Media Buying",
                  },
                  { icon: <Zap size={14} />, label: "AI Systems Builds" },
                  {
                    icon: <Zap size={14} />,
                    label: "Strategic Partnerships",
                  },
                  {
                    icon: <Zap size={14} />,
                    label: "Web3 Product Advisory",
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="glass-card flex items-center gap-3"
                    style={{ padding: "12px 16px" }}
                  >
                    <span style={{ color: "var(--gold-primary)" }}>
                      {item.icon}
                    </span>
                    <span
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "13px",
                      }}
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <p className="section-label mt-8 mb-4">Connect</p>
              <div className="flex gap-3 flex-wrap">
                {[
                  {
                    href: "https://www.linkedin.com/in/amranirich/",
                    icon: <LinkedinIcon size={14} />,
                    label: "LinkedIn",
                  },
                  {
                    href: "https://github.com/AmraniHub",
                    icon: <GithubIcon size={14} />,
                    label: "GitHub",
                  },
                  {
                    href: "https://www.instagram.com/amranirich/",
                    icon: <InstagramIcon size={14} />,
                    label: "Instagram",
                  },
                  {
                    href: "https://discord.com/users/1417879237419077727",
                    icon: <DiscordIcon size={14} />,
                    label: "Discord",
                  },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="icon-btn"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Tech Stack</p>
          <h2
            className="heading-serif mb-10"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            Tools &amp; Technologies
          </h2>
          <div className="flex flex-wrap gap-3">
            {stack.map((item) => (
              <span
                key={item}
                className="glass-card"
                style={{
                  padding: "8px 16px",
                  fontSize: "12px",
                  color: "var(--text-secondary)",
                  fontFamily: "var(--font-jetbrains, monospace)",
                  borderRadius: "6px",
                  letterSpacing: "0.04em",
                }}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-5xl mx-auto px-6">
          <p className="section-label mb-4">Journey</p>
          <h2
            className="heading-serif mb-16"
            style={{ fontSize: "clamp(22px, 3vw, 32px)" }}
          >
            Key Milestones
          </h2>
          <Timeline />
        </div>
      </section>
    </>
  );
}
