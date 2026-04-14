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

      {/* Featured Venture — Amrania */}
      <section
        className="relative overflow-hidden section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Atmospheric gold bloom */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "50%", left: "-10%",
            width: "50vw", height: "50vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, transparent 65%)",
            filter: "blur(80px)",
            transform: "translateY(-50%)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4 mb-3">
            <div style={{ width: 24, height: 1, background: "var(--gold-primary)" }} />
            <p className="section-label" style={{ color: "var(--gold-primary)" }}>Featured Venture</p>
          </div>
          <h2
            className="heading-serif mb-12"
            style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}
          >
            Amrania
          </h2>

          {/* Feature card */}
          <div
            className="glass-card overflow-hidden"
            style={{
              borderLeft: "3px solid var(--gold-primary)",
              borderRadius: "12px",
              boxShadow: "0 0 80px rgba(201,168,76,0.05), 0 20px 60px rgba(0,0,0,0.4)",
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-5">
              {/* Left content */}
              <div className="lg:col-span-3 p-8 md:p-12">
                <div className="flex items-center gap-3 mb-6 flex-wrap">
                  <div
                    style={{
                      width: "48px",
                      height: "48px",
                      border: "1px solid rgba(201, 168, 76, 0.4)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(2,8,15,0.8)",
                      boxShadow: "0 0 20px rgba(201,168,76,0.1)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "16px",
                        fontWeight: 700,
                        color: "var(--gold-primary)",
                        filter: "drop-shadow(0 0 8px rgba(201,168,76,0.5))",
                      }}
                    >
                      A
                    </span>
                  </div>
                  <div>
                    <p style={{ color: "var(--text-primary)", fontFamily: "var(--font-playfair, serif)", fontWeight: 700, fontSize: "22px", lineHeight: 1 }}>
                      Amrania
                    </p>
                    <p className="section-label" style={{ fontSize: "9px", marginTop: "3px", letterSpacing: "0.18em" }}>
                      amrania.com
                    </p>
                  </div>
                  <div className="ml-auto">
                    <span className="status-badge status-dev">In Development — Dubai Launch 2025</span>
                  </div>
                </div>

                <p
                  className="mb-6 leading-relaxed"
                  style={{ color: "var(--text-secondary)", fontSize: "15px", maxWidth: "580px", lineHeight: 1.85 }}
                >
                  Amrania is a tokenized luxury real estate and Web3 wealth
                  advisory firm being built for UHNWIs and family offices in
                  Dubai. It operates at the intersection of real-world asset
                  tokenization (RWA), blockchain infrastructure, and
                  institutional wealth management.
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["RWA", "Tokenization", "Dubai", "UHNWI", "Web3", "Family Office"].map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Link href="/ventures" className="btn-gold-fill border-glow-animated">
                    Explore Amrania
                    <ExternalLink size={12} />
                  </Link>
                  <Link href="/ventures" className="btn-gold">
                    Learn More
                    <ArrowRight size={12} />
                  </Link>
                </div>
              </div>

              {/* Right — visual panel */}
              <div
                className="lg:col-span-2 hidden lg:flex items-center justify-center relative overflow-hidden"
                style={{
                  background: "radial-gradient(ellipse at 40% 40%, rgba(201,168,76,0.06) 0%, rgba(2,8,15,0.95) 70%)",
                  borderLeft: "1px solid rgba(201, 168, 76, 0.1)",
                  minHeight: "280px",
                }}
              >
                {/* Spinning ring */}
                <div
                  className="absolute"
                  style={{
                    width: "180px", height: "180px",
                    borderRadius: "50%",
                    border: "1px solid rgba(201,168,76,0.1)",
                    animation: "spin 20s linear infinite",
                  }}
                  aria-hidden="true"
                />
                <div className="relative text-center p-8 z-10">
                  <div
                    className="mx-auto mb-5"
                    style={{
                      width: "100px", height: "100px",
                      border: "1px solid rgba(201, 168, 76, 0.35)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "rgba(2,8,15,0.85)",
                      boxShadow: "0 0 40px rgba(201,168,76,0.12), inset 0 0 20px rgba(201,168,76,0.04)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-playfair, serif)",
                        fontSize: "32px",
                        fontWeight: 700,
                        color: "var(--gold-primary)",
                        filter: "drop-shadow(0 0 14px rgba(201,168,76,0.6))",
                      }}
                    >
                      A
                    </span>
                  </div>
                  <p className="heading-serif" style={{ color: "var(--gold-light)", fontSize: "20px" }}>
                    Amrania
                  </p>
                  <p className="section-label mt-2" style={{ fontSize: "8px", letterSpacing: "0.3em" }}>
                    TOKENIZED WEALTH · DUBAI
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
      </section>

      {/* Projects preview */}
      <section
        className="relative overflow-hidden section-pad"
        style={{
          background: "linear-gradient(180deg, var(--bg-secondary) 0%, rgba(6,14,26,0.98) 100%)",
          borderTop: "1px solid rgba(201,168,76,0.08)",
        }}
      >
        {/* Ambient right bloom */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "30%", right: "-5%",
            width: "40vw", height: "40vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(15,40,100,0.12) 0%, transparent 65%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div>
              <div className="flex items-center gap-4 mb-3">
                <div style={{ width: 24, height: 1, background: "var(--gold-primary)" }} />
                <p className="section-label" style={{ color: "var(--gold-primary)" }}>What I Build</p>
              </div>
              <h2 className="heading-serif" style={{ fontSize: "clamp(24px, 3.5vw, 38px)" }}>
                Selected Work
              </h2>
            </div>
            <Link href="/projects" className="btn-gold" style={{ padding: "8px 20px", fontSize: "11px" }}>
              All Projects
              <ArrowRight size={12} />
            </Link>
          </div>

          <div
            style={{
              height: "1px",
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.2), transparent)",
              marginBottom: "48px",
            }}
          />

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
        className="relative overflow-hidden section-pad"
        style={{ background: "var(--bg-primary)" }}
      >
        {/* Center gold bloom */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none"
          style={{
            width: "60vw", height: "60vh",
            background: "radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        <div className="relative max-w-4xl mx-auto px-6 text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div style={{ width: 40, height: 1, background: "rgba(201,168,76,0.4)" }} />
            <p className="section-label" style={{ color: "var(--gold-primary)" }}>Ready to Connect</p>
            <div style={{ width: 40, height: 1, background: "rgba(201,168,76,0.4)" }} />
          </div>
          <h2
            className="heading-display mb-6"
            style={{ fontSize: "clamp(28px, 4vw, 54px)" }}
          >
            Building systems that{" "}
            <span className="text-glow-gold">move capital.</span>
          </h2>
          <p
            className="mb-10 mx-auto"
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "480px",
              lineHeight: 1.85,
            }}
          >
            Available for RWA consulting, institutional partnerships, media
            buying engagements, and AI systems builds.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-gold-fill border-glow-animated">
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
