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
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Portfolio</p>
          <h1
            className="heading-display mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Projects &amp; Ventures
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "540px",
              lineHeight: 1.7,
            }}
          >
            From tokenized real estate platforms and performance media systems
            to AI automation pipelines and e-commerce operations.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          {/* Filter tabs */}
          <div className="flex flex-wrap gap-2 mb-10">
            {projectCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className="transition-all duration-200"
                style={{
                  padding: "7px 16px",
                  borderRadius: "4px",
                  fontSize: "11px",
                  letterSpacing: "0.08em",
                  fontWeight: 500,
                  border:
                    active === cat
                      ? "1px solid var(--gold-primary)"
                      : "1px solid rgba(201, 168, 76, 0.2)",
                  background:
                    active === cat
                      ? "rgba(201, 168, 76, 0.1)"
                      : "transparent",
                  color:
                    active === cat ? "var(--gold-light)" : "var(--text-secondary)",
                  cursor: "pointer",
                  fontFamily: "var(--font-jetbrains, monospace)",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="gold-divider mb-10" />

          {/* Projects grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p
              className="text-center py-16"
              style={{ color: "var(--text-secondary)" }}
            >
              No projects in this category yet.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
