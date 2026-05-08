import { useEffect, useRef } from "react";
import { education } from "../data/portfolio";

export default function Education() {
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
    <section id="education" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
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
          Academic background
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {education.map((edu, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 border"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-subtle)",
              }}
            >
              <p
                className="mb-1 font-semibold leading-snug"
                style={{ fontSize: "1rem", color: "var(--color-text)" }}
              >
                {edu.degree}
              </p>
              <p
                className="mb-0.5"
                style={{ fontSize: "0.875rem", color: "var(--color-muted)" }}
              >
                {edu.school}
              </p>
              <p
                className="mb-3"
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "0.75rem",
                  color: "var(--color-accent)",
                }}
              >
                {edu.period}
              </p>
        
              <span
                className="inline-block px-3 py-1 rounded-full text-xs border mb-3"
                style={{
                  fontFamily: '"DM Mono", monospace',
                  background: "rgba(251,191,36,0.1)",
                  color: "#fbbf24",
                  borderColor: "rgba(251,191,36,0.25)",
                }}
              >
                {edu.grade}
              </span>

              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {edu.note}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
