import { useEffect, useRef } from "react";
import { skills } from "../data/portfolio";

export default function Skills() {
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
    <section id="skills" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
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
          What I work with
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((s) => (
            <div
              key={s.category}
              className="skill-card relative rounded-xl p-5 border transition-all duration-200 hover:-translate-y-1 overflow-hidden"
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
              <p
                className="mb-3"
                style={{
                  fontFamily: '"DM Mono", monospace',
                  fontSize: "0.72rem",
                  color: "var(--color-accent)",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
              >
                {s.category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-full text-xs border"
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      background: "rgba(167,139,250,0.08)",
                      color: "var(--color-accent3)",
                      borderColor: "rgba(167,139,250,0.15)",
                    }}
                  >
                    {item}
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
