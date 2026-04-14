"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 29, suffix: "", label: "Certifications" },
  { value: 6800, suffix: "+", label: "LinkedIn Followers" },
  { value: 3, suffix: "", label: "Active Ventures" },
  { value: 500, suffix: "+", label: "Network Connections" },
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
    const duration = 1800;
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
      className="grid grid-cols-2 md:grid-cols-4 gap-px"
      style={{ borderTop: "1px solid var(--border-gold)" }}
    >
      {stats.map((stat, i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center py-8 px-4 text-center"
          style={{
            background: i % 2 === 0 ? "var(--bg-secondary)" : "var(--bg-primary)",
            borderRight:
              i < stats.length - 1
                ? "1px solid rgba(201, 168, 76, 0.08)"
                : "none",
          }}
        >
          <p
            className="heading-display mb-1"
            style={{ fontSize: "clamp(28px, 4vw, 40px)", color: "var(--gold-primary)" }}
          >
            <Counter
              value={stat.value}
              suffix={stat.suffix}
              prefix={stat.prefix}
              trigger={triggered}
            />
          </p>
          <p
            className="section-label"
            style={{ color: "var(--text-secondary)", fontSize: "10px" }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
}
