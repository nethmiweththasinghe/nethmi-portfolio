import profilePhoto from '../img/my-photo.jpg';
import ThreeBackground from './ThreeBackground';

export default function Description() {
  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center px-8 md:px-16 pt-28 pb-16 overflow-hidden"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 0,
          background:
            "radial-gradient(ellipse 60% 70% at 85% 50%, rgba(124,58,237,0.13) 0%, transparent 65%), radial-gradient(ellipse 40% 40% at 10% 80%, rgba(94,234,212,0.07) 0%, transparent 50%)",
        }}
      />
      <div className="absolute inset-0 hero-grid pointer-events-none" style={{ zIndex: 0 }} />

      {/* ── Mobile only: compact rings in top-right corner ── */}
      <div
        className="md:hidden absolute pointer-events-none"
        style={{
          top: 0,
          right: 0,
          width: "540px",
          height: "260px",
          zIndex: 0,
          maskImage: "radial-gradient(ellipse 75% 75% at 75% 25%, black 30%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(ellipse 75% 75% at 75% 25%, black 30%, transparent 100%)",
        }}
      >
        <ThreeBackground compact />
      </div>

      {/* Main two-column layout */}
      <div
        className="relative w-full flex flex-col md:flex-row items-center justify-between gap-0"
        style={{ zIndex: 1 }}
      >

        {/* ── LEFT: all text content ── */}
        <div className="w-full max-w-lg animate-[fadeUp_0.8s_ease_both] flex flex-col">

          {/* Badge */}
          <div
            className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full text-[0.75rem] border self-start"
            style={{
              background: "rgba(167,139,250,0.1)",
              borderColor: "rgba(167,139,250,0.25)",
              color: "#c4b5fd",
              fontFamily: '"DM Mono", monospace',
              letterSpacing: "0.03em",
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: "#4ade80", animation: "pulse2 2s ease-in-out infinite" }}
            />
            Available for opportunities · New Zealand
          </div>

          {/* ── Name row: photo + headline side by side ── */}
          <div className="flex items-center gap-5 mb-4">
            <div className="relative flex-shrink-0">
              <div
                className="absolute -inset-1.5 rounded-full"
                style={{
                  background: "conic-gradient(from 0deg, #a78bfa, #5eead4, #7c3aed, #a78bfa)",
                  opacity: 0.5,
                  filter: "blur(4px)",
                }}
              />
              <img
                src={profilePhoto}
                alt="Nethmi Weththasinghe"
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  border: "2px solid rgba(167,139,250,0.4)",
                  position: "relative",
                  display: "block",
                }}
              />
            </div>

            <h1
              className="leading-[1.05] tracking-tight"
              style={{
                fontFamily: '"DM Serif Display", serif',
                fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                color: "var(--color-text)",
              }}
            >
              Nethmi
              <br />
              <em style={{ color: "var(--color-accent)", fontStyle: "italic" }}>
                Weththasinghe
              </em>
            </h1>
          </div>

          {/* Subtitle */}
          <p
            className="mb-2 max-w-md leading-relaxed"
            style={{ fontSize: "1rem", color: "var(--color-muted)", fontWeight: 300 }}
          >
            <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>
              Full-Stack Software Engineer
            </strong>{" "}
            with 2+ years building reliable, customer-facing applications across finance and
            retail. Master of Information Sciences,{" "}
            <strong style={{ color: "var(--color-text)", fontWeight: 500 }}>Distinction</strong>.
          </p>

          <p
            className="max-w-sm leading-relaxed mb-7"
            style={{ fontSize: "0.85rem", color: "var(--color-muted)" }}
          >
            Specialised in Angular · React · TypeScript · JavaScript · .NET · Clean Architecture
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-3">
            <a
              href="mailto:nwetthasinha@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm transition-all duration-200 hover:-translate-y-0.5"
              style={{
                background: "var(--color-accent)",
                color: "#1a0a40",
                textDecoration: "none",
                fontFamily: "Outfit, sans-serif",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-accent3)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--color-accent)")}
            >
              ✉ Get in touch
            </a>
            <a
              href="https://github.com/nethmiweththasinghe"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: "transparent", color: "var(--color-accent3)",
                border: "1px solid rgba(167,139,250,0.3)", textDecoration: "none",
                fontFamily: "Outfit, sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(167,139,250,0.1)"; e.currentTarget.style.borderColor = "#a78bfa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; }}
            >
              ↗ GitHub
            </a>
            <a
              href="https://linkedin.com/in/nethmi-weththasinghe"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200"
              style={{
                background: "transparent", color: "var(--color-accent3)",
                border: "1px solid rgba(167,139,250,0.3)", textDecoration: "none",
                fontFamily: "Outfit, sans-serif",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(167,139,250,0.1)"; e.currentTarget.style.borderColor = "#a78bfa"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(167,139,250,0.3)"; }}
            >
              ↗ LinkedIn
            </a>
          </div>

          {/* Stats row */}
          <div
            className="flex gap-8 mt-8 pt-6 animate-[fadeUp_0.8s_0.3s_ease_both]"
            style={{ borderTop: "1px solid var(--color-subtle)" }}
          >
            {[
              { num: "2+",  label: "Years exp." },
              { num: "5+",   label: "Projects" },
              { num: "MSc", label: "Distinction" },
            ].map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: '"DM Serif Display", serif',
                    fontSize: "1.8rem",
                    color: "var(--color-accent)",
                    lineHeight: 1,
                  }}
                >
                  {s.num}
                </div>
                <div
                  style={{
                    fontSize: "0.68rem",
                    color: "var(--color-muted)",
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                    fontFamily: '"DM Mono", monospace',
                    marginTop: "4px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: Floating Rings — desktop only ── */}
        <div
          className="flex-shrink-0 hidden md:block"
          style={{ width: "820px", height: "660px", position: "relative" }}
        >
          <ThreeBackground />
        </div>

      </div>

      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse2 {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.4; }
        }
      `}</style>
    </section>
  );
}