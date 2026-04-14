"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel?: string;
}

const stats: Stat[] = [
  { value: 29, suffix: "", label: "Certifications", sublabel: "Verified credentials" },
  { value: 6800, suffix: "+", label: "LinkedIn Followers", sublabel: "Industry network" },
  { value: 3, suffix: "", label: "Active Ventures", sublabel: "Operating entities" },
  { value: 500, suffix: "+", label: "Network Connections", sublabel: "Global reach" },
];

function Counter({
  value,
  suffix,
  prefix,
  trigger,
}: {
  value: number;
  suffix: string;
  prefix?: string;
  trigger: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [trigger, value]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatsStrip() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative grid grid-cols-2 md:grid-cols-4"
      style={{
        borderTop: "1px solid rgba(201,168,76,0.12)",
        background: "linear-gradient(180deg, rgba(6,14,26,0.95) 0%, rgba(2,8,15,0.98) 100%)",
      }}
    >
      {/* Subtle top shimmer line */}
      <div
        className="absolute top-0 left-0 right-0"
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4) 20%, rgba(240,208,128,0.7) 50%, rgba(201,168,76,0.4) 80%, transparent)",
        }}
        aria-hidden="true"
      />

      {stats.map((stat, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center justify-center py-10 px-6 text-center group"
          style={{
            borderRight: i < stats.length - 1 ? "1px solid rgba(201,168,76,0.07)" : "none",
          }}
        >
          {/* Hover glow */}
          <div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 70%)",
            }}
            aria-hidden="true"
          />

          {/* Number */}
          <p
            className="stat-number mb-1"
            style={{ fontSize: "clamp(30px, 4vw, 44px)" }}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              trigger={triggered}
            />
          </p>

          {/* Label */}
          <p
            className="section-label"
            style={{ color: "var(--text-primary)", fontSize: "11px", marginBottom: "3px" }}
          >
            {stat.label}
          </p>

          {/* Sublabel */}
          {stat.sublabel && (
            <p
              style={{
                color: "var(--text-dim)",
                fontSize: "9px",
                letterSpacing: "0.1em",
                fontFamily: "var(--font-jetbrains, monospace)",
              }}
            >
              {stat.sublabel}
            </p>
          )}
        </div>
      ))}
    </div>
  );
}
