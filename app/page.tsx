import Hero from "@/components/Hero";
import LinkedInFeed from "@/components/LinkedInFeed";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Featured Project — Amrania */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-3">Featured Venture</p>
          <h2
            className="heading-serif mb-12"
            style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
          >
            Amrania
          </h2>

          {/* Feature card */}
          <div
            className="glass-card overflow-hidden"
            style={{
              borderLeft: "3px solid var(--gold-primary)",
              borderRadius: "12px",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left content */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6">
                  <div
                    style={{
                      width: "44px",
                      height: "44px",
                      border: "1px solid rgba(201, 168, 76, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(5, 12, 26, 0.6)",
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
                      A
                    </span>
                  </div>
                  <div>
                    <p
                      style={{
                        color: "var(--text-primary)",
                        fontFamily: "var(--font-playfair, serif)",
                        fontWeight: 700,
                        fontSize: "20px",
                      }}
                    >
                      Amrania
                    </p>
                    <p
                      className="section-label"
                      style={{ fontSize: "9px", marginTop: "2px" }}
                    >
                      amrania.com
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="status-badge status-dev">
                      In Development — Dubai Launch 2025
                    </span>
                  </div>
                </div>

                <p
                  className="mb-6 leading-relaxed"
                  style={{
                    color: "var(--text-secondary)",
                    fontSize: "15px",
                    maxWidth: "580px",
                  }}
                >
                  Amrania is a tokenized luxury real estate and Web3 wealth
                  advisory firm being built for UHNWIs and family offices in
                  Dubai. It operates at the intersection of real-world asset
                  tokenization (RWA), blockchain infrastructure, and
                  institutional wealth management.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {[
                    "RWA",
                    "Tokenization",
                    "Dubai",
                    "UHNWI",
                    "Web3",
                    "Family Office",
                  ].map((tag) => (
                    <span key={tag} className="tag-pill">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/ventures" className="btn-gold-fill">
                    Visit Amrania
                    <ExternalLink size={12} />
                  </Link>
                  <Link href="/ventures" className="btn-gold">
                    Learn More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right — visual */}
              <div
                className="lg:col-span-2 hidden lg:flex items-center justify-center"
                style={{
                  background: "rgba(201, 168, 76, 0.03)",
                  borderLeft: "1px solid rgba(201, 168, 76, 0.1)",
                  minHeight: "280px",
                }}
              >
                <div className="text-center p-8">
                  <div
                    className="mx-auto mb-6"
                    style={{
                      width: "100px",
                      height: "100px",
                      border: "1px solid rgba(201, 168, 76, 0.3)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(5, 12, 26, 0.6)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "var(--gold-primary)",
                      }}
                    >
                      A
                    </span>
                  </div>
                  <p
                    className="heading-serif"
                    style={{ color: "var(--gold-primary)", fontSize: "22px" }}
                  >
                    Amrania
                  </p>
                  <p
                    className="section-label mt-2"
                    style={{ fontSize: "9px", letterSpacing: "0.25em" }}
                  >
                    TOKENIZED WEALTH · DUBAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <p className="section-label mb-3">What I Build</p>
              <h2
                className="heading-serif"
                style={{ fontSize: "clamp(24px, 3.5vw, 36px)" }}
              >
                Selected Work
              </h2>
            </div>
            <Link
              href="/projects"
              className="btn-gold"
              style={{ padding: "8px 20px", fontSize: "11px" }}
            >
              All Projects
              <ArrowRight size={12} />
            </Link>
          </div>

          <div className="gold-divider mb-12" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* LinkedIn Feed */}
      <LinkedInFeed />

      {/* CTA Section */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="section-label mb-4">Ready to Connect</p>
          <h2
            className="heading-display mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 52px)" }}
          >
            Building systems that{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-primary) 0%, var(--gold-light) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              move capital.
            </span>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "480px",
              lineHeight: 1.8,
            }}
          >
            Available for RWA consulting, institutional partnerships, media
            buying engagements, and AI systems builds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold-fill">
              Start a Conversation
              <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="btn-gold">
              Learn About Me
              <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
