export default function Description() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden"
    >
      {/* Radial glow background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(124,58,237,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 10% 80%, rgba(94,234,212,0.08) 0%, transparent 50%)",
        }}
      />
      {/* Grid lines */}
      <div className="absolute inset-0 hero-grid pointer-events-none" />

      <div className="relative z-10 max-w-3xl animate-[fadeUp_0.8s_ease_both]">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full text-[0.8rem] border"
          style={{
            background: "rgba(167,139,250,0.1)",
            borderColor: "rgba(167,139,250,0.25)",
            color: "#c4b5fd",
            fontFamily: '"DM Mono", monospace',
            letterSpacing: "0.03em",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "#4ade80",
              animation: "pulse2 2s ease-in-out infinite",
            }}
          />
          Available for opportunities · New Zealand
        </div>

        {/* Headline */}
        <h1
          className="leading-[1.05] mb-4 tracking-tight"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(3rem, 7vw, 5.5rem)",
            color: "var(--color-text)",
          }}
        >
          Nethmi
          <br />
          <em style={{ ccolor: "var(--color-accent)", fontStyle: "italic" }}>
            Weththasinghe
          </em>
        </h1>

        {/* Subtitle */}
        <p
          className="mb-3 max-w-xl leading-relaxed"
          style={{
            fontSize: "1.1rem",
            color: "var(--color-muted)",
            fontWeight: 300,
          }}
        >
          <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
            Full-Stack Software Engineer
          </strong>{" "}
          with 2+ years building reliable, customer-facing applications across
          finance and retail. Master of Information Sciences,{" "}
          <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
            Distinction
          </strong>
          .
        </p>

        <p
          className="max-w-lg leading-relaxed"
          style={{ fontSize: "0.95rem", color: "var(--color-muted)" }}
        >
          Specialised in Angular · React · TypeScript · JavaScript · .NET ·
          Clean Architecture
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 mt-8">
          <a
            href="mailto:nwetthasinha@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--color-accent)",
              color: "#1a0a40",
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--color-accent3)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--color-accent)")
            }
          >
            ✉ Get in touch
          </a>
          <a
            href="https://github.com/nethmiweththasinghe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: "transparent",
              color: "var(--color-accent3)",
              border: "1px solid rgba(167,139,250,0.3)",
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(167,139,250,0.1)";
              e.currentTarget.style.borderColor = "#a78bfa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
            }}
          >
            ↗ GitHub
          </a>
          <a
            href="https://linkedin.com/in/nethmi-weththasinghe"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200"
            style={{
              background: "transparent",
              color: "var(--color-accent3)",
              border: "1px solid rgba(167,139,250,0.3)",
              textDecoration: "none",
              fontFamily: "Outfit, sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(167,139,250,0.1)";
              e.currentTarget.style.borderColor = "#a78bfa";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)";
            }}
          >
            ↗ LinkedIn
          </a>
        </div>

        {/* Stats */}
        <div
          className="flex gap-10 mt-10 pt-8 animate-[fadeUp_0.8s_0.3s_ease_both]"
          style={{ borderTop: "1px solid var(--color-subtle)" }}
        >
          {[
            { num: "2+", label: "Years experience" },
            { num: "3", label: "Projects shipped" },
            { num: "MSc", label: "With Distinction" },
          ].map((s) => (
            <div key={s.label}>
              <div
                style={{
                  fontFamily: '"DM Serif Display", serif',
                  fontSize: "2rem",
                  color: "var(--color-accent)",
                  lineHeight: 1,
                }}
              >
                {s.num}
              </div>
              <div
                className="mt-1"
                style={{
                  fontSize: "0.75rem",
                  color: "var(--color-muted)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  fontFamily: '"DM Mono", monospace',
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}
