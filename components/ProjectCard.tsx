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
      style={{ background: "rgba(201, 168, 76, 0.04)" }}
    >
      <div className="text-center">
        <div
          style={{
            width: "56px",
            height: "56px",
            border: "1px solid rgba(201, 168, 76, 0.25)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-playfair, serif)",
              fontSize: "18px",
              fontWeight: 700,
              color: "var(--gold-primary)",
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
      className="glass-card overflow-hidden h-full flex flex-col transition-all duration-300"
      style={{
        borderColor: hovered
          ? "rgba(201, 168, 76, 0.4)"
          : "rgba(201, 168, 76, 0.12)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Thumbnail */}
      <div
        className="relative overflow-hidden"
        style={{ height: "180px", background: "var(--bg-surface)" }}
      >
        <PlaceholderImage name={project.title} />

        {/* Hover overlay */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{
            background: "rgba(5, 12, 26, 0.75)",
            opacity: hovered ? 1 : 0,
            backdropFilter: "blur(2px)",
          }}
        >
          <div className="flex items-center gap-2 btn-gold" style={{ padding: "8px 16px", fontSize: "11px" }}>
            View Details <ArrowUpRight size={12} />
          </div>
        </div>

        {/* Category pill top-left */}
        <div className="absolute top-3 left-3">
          <span className="tag-pill">{project.category}</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-start justify-between mb-2">
          <h3
            className="heading-serif"
            style={{ fontSize: "17px", flex: 1, marginRight: "8px" }}
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
            lineHeight: 1.65,
          }}
        >
          {project.description}
        </p>

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
