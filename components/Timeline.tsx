"use client";

import { useEffect, useRef } from "react";

interface Milestone {
  year: string;
  title: string;
  description: string;
  tag?: string;
}

const milestones: Milestone[] = [
  {
    year: "2019",
    title: "First E-Commerce Operation",
    description:
      "Launched first COD e-commerce business in Morocco, running Meta and Google Ads campaigns. Learned performance marketing from first principles.",
    tag: "E-Commerce",
  },
  {
    year: "2021",
    title: "Media Buying Mastery",
    description:
      "Scaled to managing significant ad spend across Meta and Google. Started working with clients across MENA for lead generation and e-commerce campaigns.",
    tag: "Media Buying",
  },
  {
    year: "2022",
    title: "AmraniAds Founded",
    description:
      "Formalized performance media buying operations as AmraniAds — a boutique agency serving e-commerce brands and lead gen clients across Morocco, UAE, and MENA.",
    tag: "Agency",
  },
  {
    year: "2023",
    title: "Web3 & Blockchain Deep Dive",
    description:
      "Began intensive study of blockchain infrastructure, DeFi protocols, and smart contract development. Earned multiple certifications in Web3 and crypto.",
    tag: "Web3",
  },
  {
    year: "2023",
    title: "AI Systems Development",
    description:
      "Built first AI automation pipelines using Claude and LangChain. Deployed internal tools automating research, content, and media buying reporting workflows.",
    tag: "AI Systems",
  },
  {
    year: "2024",
    title: "RWA Tokenization Strategy",
    description:
      "Pivoted focus to real-world asset tokenization. Deep research into institutional-grade RWA platforms, security token frameworks, and Dubai DIFC regulatory landscape.",
    tag: "RWA",
  },
  {
    year: "2024",
    title: "Android & Shopify Apps Published",
    description:
      "Shipped two production applications: an Android app on Google Play and a Shopify app on the App Store — validating the builder mindset beyond marketing.",
    tag: "Product",
  },
  {
    year: "2025",
    title: "Amrania — Dubai Launch",
    description:
      "Building Amrania — a tokenized luxury real estate and Web3 wealth advisory firm for UHNWIs and family offices. Dubai is the target market. Operator-first execution.",
    tag: "Amrania",
  },
];

export default function Timeline() {
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="relative">
      {/* Vertical line */}
      <div
        className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px"
        style={{
          background:
            "linear-gradient(180deg, transparent, var(--gold-muted) 10%, var(--gold-primary) 50%, var(--gold-muted) 90%, transparent)",
          transform: "translateX(-50%)",
          opacity: 0.4,
        }}
        aria-hidden="true"
      />

      <div className="flex flex-col gap-0">
        {milestones.map((m, i) => (
          <div
            key={i}
            ref={(el) => { itemRefs.current[i] = el; }}
            className={`animate-on-scroll relative flex flex-col md:flex-row gap-6 md:gap-12 pb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
            style={{ transitionDelay: `${i * 80}ms` }}
          >
            {/* Content side */}
            <div
              className={`flex-1 pl-16 md:pl-0 ${
                i % 2 === 0 ? "md:text-right md:pr-12" : "md:text-left md:pl-12"
              }`}
            >
              <div
                className="glass-card p-5"
                style={{ display: "inline-block", width: "100%", maxWidth: "420px" }}
              >
                <div className="flex items-center gap-2 mb-2 flex-wrap">
                  <span
                    style={{
                      color: "var(--gold-primary)",
                      fontFamily: "var(--font-jetbrains, monospace)",
                      fontSize: "11px",
                      fontWeight: 600,
                    }}
                  >
                    {m.year}
                  </span>
                  {m.tag && <span className="tag-pill">{m.tag}</span>}
                </div>
                <h3
                  className="heading-serif mb-2"
                  style={{ fontSize: "16px" }}
                >
                  {m.title}
                </h3>
                <p
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "13px",
                    lineHeight: 1.65,
                  }}
                >
                  {m.description}
                </p>
              </div>
            </div>

            {/* Dot on the line */}
            <div
              className="absolute left-6 md:left-1/2 top-5"
              style={{
                transform: "translateX(-50%)",
                width: "12px",
                height: "12px",
                borderRadius: "50%",
                background: "var(--gold-primary)",
                border: "2px solid var(--bg-secondary)",
                boxShadow: "0 0 12px rgba(201,168,76,0.4)",
                zIndex: 1,
              }}
              aria-hidden="true"
            />

            {/* Empty side */}
            <div className="flex-1 hidden md:block" />
          </div>
        ))}
      </div>
    </div>
  );
}
