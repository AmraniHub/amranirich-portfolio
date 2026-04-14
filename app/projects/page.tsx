"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, projectCategories } from "@/data/projects";
import type { ProjectCategory } from "@/data/projects";

export default function ProjectsPage() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === (active as ProjectCategory));

  return (
    <>
      {/* Page header */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "70px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.08)",
        }}
      >
        {/* Atmospheric glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "0%", right: "-5%",
            width: "55vw", height: "55vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            filter: "blur(90px)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "0", left: "0",
            width: "40vw", height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(15,40,100,0.1) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-4">
            <div style={{ width: 28, height: 1, background: "var(--gold-primary)", boxShadow: "0 0 8px var(--gold-glow)" }} />
            <p className="section-label" style={{ color: "var(--gold-primary)", letterSpacing: "0.25em" }}>Portfolio</p>
          </div>
          <h1
            className="heading-display mb-5"
            style={{ fontSize: "clamp(32px, 5vw, 64px)" }}
          >
            Projects &amp;{" "}
            <span className="text-glow-gold">Ventures</span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "540px",
              lineHeight: 1.8,
            }}
          >
            From tokenized real estate platforms and performance media systems
            to AI automation pipelines and e-commerce operations.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="relative overflow-hidden section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-secondary) 0%, rgba(2,8,15,0.98) 100%)",
        }}
      >
        <div className="relative max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "8px 18px",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  border: active === cat
                    ? "1px solid rgba(201,168,76,0.7)"
                    : "1px solid rgba(201, 168, 76, 0.18)",
                  background: active === cat
                    ? "rgba(201, 168, 76, 0.1)"
                    : "transparent",
                  color: active === cat ? "var(--gold-light)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-jetbrains, monospace)",
                  boxShadow: active === cat ? "0 0 20px rgba(201,168,76,0.1)" : "none",
                  transition: "all 0.25s ease",
                }}
              >
                {cat}
                {active !== cat && (
                  <span style={{ marginLeft: "6px", opacity: 0.4, fontSize: "9px" }}>
                    ({cat === "All" ? projects.length : projects.filter((p) => p.category === cat).length})
                  </span>
                )}
              </button>
            ))}
          </div>

          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
              marginBottom: "40px",
            }}
          />

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="text-center py-16"
              style={{ color: "var(--text-secondary)", fontFamily: "var(--font-jetbrains, monospace)", fontSize: "13px" }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
