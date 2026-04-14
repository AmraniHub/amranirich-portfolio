"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

function PlaceholderImage({ name }: { name: string }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div
      className="w-full h-full flex items-center justify-center"
      style={{
        background: "radial-gradient(ellipse at 40% 40%, rgba(201,168,76,0.07) 0%, rgba(2,8,15,0.95) 70%)",
      }}
    >
      <div className="text-center">
        <div
          style={{
            width: "60px",
            height: "60px",
            border: "1px solid rgba(201, 168, 76, 0.3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 10px",
            background: "rgba(2,8,15,0.8)",
            boxShadow: "0 0 20px rgba(201,168,76,0.08)",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair, serif)",
              fontSize: "20px",
              fontWeight: 700,
              color: "var(--gold-primary)",
              filter: "drop-shadow(0 0 8px rgba(201,168,76,0.4))",
            }}
          >
            {initials}
          </span>
        </div>
        <p
          style={{
            fontSize: "9px",
            color: "var(--gold-muted)",
            letterSpacing: "0.2em",
            fontFamily: "var(--font-jetbrains, monospace)",
          }}
        >
          {name.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: Project["status"] }) {
  const cls =
    status === "Active"
      ? "status-active"
      : status === "In Development"
      ? "status-dev"
      : "status-completed";

  return <span className={`status-badge ${cls}`}>{status}</span>;
}

export default function ProjectCard({ project }: { project: Project }) {
  const [hovered, setHovered] = useState(false);

  const inner = (
    <div
      className="glass-card overflow-hidden h-full flex flex-col"
      style={{
        borderColor: hovered
          ? "rgba(201, 168, 76, 0.45)"
          : "rgba(201, 168, 76, 0.1)",
        transform: hovered ? "translateY(-6px)" : "translateY(0)",
        transition: "transform 0.35s cubic-bezier(0.16,1,0.3,1), border-color 0.3s ease, box-shadow 0.35s ease",
        boxShadow: hovered
          ? "0 24px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(201,168,76,0.2), 0 0 40px rgba(201,168,76,0.06)"
          : "0 4px 20px rgba(0,0,0,0.3)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{ height: "190px", background: "var(--bg-surface)" }}
      >
        <PlaceholderImage name={project.title} />

        {/* Gold shimmer overlay on hover */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "linear-gradient(135deg, transparent 40%, rgba(201,168,76,0.04) 100%)",
            opacity: hovered ? 1 : 0,
            transition: "opacity 0.4s ease",
          }}
          aria-hidden="true"
        />

        {/* Hover CTA overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{
            background: "rgba(2,8,15,0.8)",
            opacity: hovered ? 1 : 0,
            backdropFilter: hovered ? "blur(4px)" : "blur(0px)",
            transition: "opacity 0.3s ease, backdrop-filter 0.3s ease",
          }}
        >
          <div
            className="flex items-center gap-2"
            style={{
              padding: "8px 18px",
              fontSize: "11px",
              border: "1px solid rgba(201,168,76,0.5)",
              color: "var(--gold-light)",
              letterSpacing: "0.08em",
              fontFamily: "var(--font-jetbrains, monospace)",
              background: "rgba(201,168,76,0.06)",
              transform: hovered ? "translateY(0)" : "translateY(8px)",
              transition: "transform 0.3s ease",
            }}
          >
            View Details <ArrowUpRight size={12} />
          </div>
        </div>

        {/* Category pill */}
        <div className="absolute top-3 left-3">
          <span className="tag-pill">{project.category}</span>
        </div>

        {/* Featured glow top edge */}
        {project.featured && (
          <div
            className="absolute top-0 left-0 right-0"
            style={{
              height: "2px",
              background: "linear-gradient(90deg, transparent, var(--gold-primary), var(--gold-light), var(--gold-primary), transparent)",
            }}
            aria-hidden="true"
          />
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-3">
          <h3
            className="heading-serif"
            style={{ fontSize: "17px", flex: 1, marginRight: "8px", lineHeight: 1.3 }}
          >
            {project.title}
          </h3>
          <StatusBadge status={project.status} />
        </div>

        <p
          className="mb-4 flex-1"
          style={{
            color: "var(--text-secondary)",
            fontSize: "13px",
            lineHeight: 1.7,
          }}
        >
          {project.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, rgba(201,168,76,0.15), transparent)",
            marginBottom: "12px",
          }}
        />

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5">
          {project.tags.slice(0, 4).map((tag) => (
            <span key={tag} className="tag-pill">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  if (project.href) {
    return (
      <Link href={project.href} className="block h-full" aria-label={project.title}>
        {inner}
      </Link>
    );
  }

  return <div className="h-full">{inner}</div>;
}
