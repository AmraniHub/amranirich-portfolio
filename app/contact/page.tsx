"use client";

import { useState } from "react";
import {
  Send,
  Zap,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { LinkedinIcon, GithubIcon, InstagramIcon, DiscordIcon } from "@/components/SocialIcons";

type FormState = "idle" | "sending" | "success" | "error";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");

    try {
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const res = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setFormState("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setFormState("error");
      }
    } catch {
      setFormState("error");
    }
  };

  return (
    <>
      {/* Header */}
      <section
        style={{
          background: "var(--bg-primary)",
          paddingTop: "140px",
          paddingBottom: "60px",
          borderBottom: "1px solid rgba(201, 168, 76, 0.1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <p className="section-label mb-4">Get in Touch</p>
          <h1
            className="heading-display mb-4"
            style={{ fontSize: "clamp(32px, 5vw, 60px)" }}
          >
            Let&apos;s{" "}
            <span
              style={{
                background:
                  "linear-gradient(135deg, var(--gold-primary), var(--gold-light))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Connect
            </span>
          </h1>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "15px",
              maxWidth: "520px",
              lineHeight: 1.7,
            }}
          >
            Available for RWA consulting, institutional partnerships, performance
            media buying engagements, AI systems builds, and strategic collaborations.
          </p>
        </div>
      </section>

      {/* Form + Info */}
      <section
        className="section-pad"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="glass-card p-8">
                {formState === "success" ? (
                  <div className="flex flex-col items-center justify-center py-16 text-center gap-4">
                    <CheckCircle
                      size={48}
                      style={{ color: "#4ade80" }}
                    />
                    <h3
                      className="heading-serif"
                      style={{ fontSize: "22px" }}
                    >
                      Message Sent
                    </h3>
                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "14px",
                        maxWidth: "300px",
                      }}
                    >
                      Thank you for reaching out. I&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <button
                      onClick={() => setFormState("idle")}
                      className="btn-gold mt-4"
                      style={{ fontSize: "11px", padding: "8px 20px" }}
                    >
                      Send Another
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="name"
                          className="section-label block mb-2"
                          style={{ fontSize: "10px" }}
                        >
                          Name *
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={form.name}
                          onChange={handleChange}
                          placeholder="Your name"
                          className="form-input"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="section-label block mb-2"
                          style={{ fontSize: "10px" }}
                        >
                          Email *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={form.email}
                          onChange={handleChange}
                          placeholder="your@email.com"
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="section-label block mb-2"
                        style={{ fontSize: "10px" }}
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="form-input"
                        style={{ appearance: "none" }}
                      >
                        <option value="" disabled>
                          Select a topic...
                        </option>
                        <option value="RWA Consulting">RWA Consulting</option>
                        <option value="Media Buying">Media Buying</option>
                        <option value="AI Systems">AI Systems Build</option>
                        <option value="Amrania Partnership">
                          Amrania Partnership
                        </option>
                        <option value="Strategic Partnership">
                          Strategic Partnership
                        </option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="section-label block mb-2"
                        style={{ fontSize: "10px" }}
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell me about your project or inquiry..."
                        className="form-input"
                      />
                    </div>

                    {formState === "error" && (
                      <div
                        className="flex items-center gap-2 p-3 rounded"
                        style={{
                          background: "rgba(239, 68, 68, 0.1)",
                          border: "1px solid rgba(239, 68, 68, 0.2)",
                        }}
                      >
                        <AlertCircle
                          size={14}
                          style={{ color: "#ef4444" }}
                        />
                        <p
                          style={{
                            color: "#ef4444",
                            fontSize: "12px",
                          }}
                        >
                          Something went wrong. Please try again or reach out
                          on LinkedIn.
                        </p>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formState === "sending"}
                      className="btn-gold-fill justify-center"
                      style={{ opacity: formState === "sending" ? 0.7 : 1 }}
                    >
                      {formState === "sending" ? (
                        "Sending..."
                      ) : (
                        <>
                          Send Message
                          <Send size={13} />
                        </>
                      )}
                    </button>

                    <p
                      style={{
                        color: "var(--text-secondary)",
                        fontSize: "11px",
                        textAlign: "center",
                      }}
                    >
                      * Replace YOUR_FORMSPREE_ID in contact/page.tsx with your
                      Formspree form ID to activate submissions.
                    </p>
                  </form>
                )}
              </div>
            </div>

            {/* Right info */}
            <div className="lg:col-span-2 flex flex-col gap-8">
              {/* Available for */}
              <div>
                <p className="section-label mb-5">Available For</p>
                <div className="flex flex-col gap-3">
                  {[
                    "RWA Consulting",
                    "Performance Media Buying",
                    "AI Systems Builds",
                    "Strategic Partnerships",
                    "Web3 Product Advisory",
                    "Institutional Client Introductions",
                  ].map((item) => (
                    <div
                      key={item}
                      className="glass-card flex items-center gap-3"
                      style={{ padding: "10px 14px" }}
                    >
                      <Zap
                        size={12}
                        style={{ color: "var(--gold-primary)", flexShrink: 0 }}
                      />
                      <span
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: "13px",
                        }}
                      >
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <p className="section-label mb-5">Find Me On</p>
                <div className="flex flex-col gap-3">
                  {[
                    {
                      href: "https://www.linkedin.com/in/amranirich/",
                      icon: <LinkedinIcon size={16} />,
                      label: "LinkedIn",
                      handle: "@amranirich",
                    },
                    {
                      href: "https://github.com/AmraniHub",
                      icon: <GithubIcon size={16} />,
                      label: "GitHub",
                      handle: "AmraniHub",
                    },
                    {
                      href: "https://www.instagram.com/amranirich/",
                      icon: <InstagramIcon size={16} />,
                      label: "Instagram",
                      handle: "@amranirich",
                    },
                    {
                      href: "https://discord.com/users/1417879237419077727",
                      icon: <DiscordIcon size={16} />,
                      label: "Discord",
                      handle: "amranirich",
                    },
                  ].map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-card flex items-center gap-3 transition-all duration-200"
                      style={{ padding: "12px 14px" }}
                      onMouseEnter={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(201,168,76,0.35)";
                      }}
                      onMouseLeave={(e) => {
                        const el = e.currentTarget as HTMLElement;
                        el.style.borderColor = "rgba(201,168,76,0.12)";
                      }}
                    >
                      <span style={{ color: "var(--gold-primary)" }}>
                        {s.icon}
                      </span>
                      <div>
                        <p
                          style={{
                            color: "var(--text-primary)",
                            fontSize: "13px",
                            fontWeight: 500,
                          }}
                        >
                          {s.label}
                        </p>
                        <p
                          style={{
                            color: "var(--text-secondary)",
                            fontSize: "11px",
                            fontFamily: "var(--font-jetbrains, monospace)",
                          }}
                        >
                          {s.handle}
                        </p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
