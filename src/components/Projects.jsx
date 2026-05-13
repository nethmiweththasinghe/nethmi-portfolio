import { useEffect, useRef } from "react";
import { projects } from "../data/portfolio";

export default function Projects() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) ref.current?.classList.add("visible");
      },
      { threshold: 0.1 },
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
      <div ref={ref} className="fade-section">
        <h2
          className="mb-12 tracking-tight"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-text)",
            lineHeight: 1.1,
          }}
        >
          Things I've built
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <div
              key={i}
              className="project-card relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-subtle)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "var(--color-subtle)")
              }
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-5"
                style={{ background: "rgba(167,139,250,0.12)" }}
              >
                {p.icon}
              </div>

              <p
                className="mb-2"
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "0.72rem",
                  color: "var(--color-amber)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                }}
              >
                {p.type}
              </p>

              <p
                className="mb-3 font-semibold leading-snug"
                style={{ fontSize: "1rem", color: "var(--color-text)" }}
              >
                {p.title}
              </p>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "var(--color-muted)" }}
              >
                {p.description}
              </p>

              <p
                className="text-sm leading-relaxed mb-5"
                style={{ color: "#aa7321" }}
              >
                <a href={p.link} target="_blank" rel="noopener noreferrer">
                  {p.link ? "View Website" : ""}
                </a>
              </p>

              <div className="flex flex-wrap gap-1.5">
                {p.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs border"
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      background: "rgba(94,234,212,0.07)",
                      color: "#5eead4",
                      borderColor: "rgba(94,234,212,0.2)",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
