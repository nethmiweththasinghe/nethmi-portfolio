import { useEffect, useRef } from "react";

const contactLinks = [
  { label: "✉ nwetthasinha@gmail.com", href: "mailto:nwetthasinha@gmail.com" },
  { label: "⌥ github", href: "https://github.com/nethmiweththasinghe" },
  { label: "⌘ linkedin", href: "https://linkedin.com/in/nethmi-weththasinghe" },
  { label: "✆ 027 505 0782", href: "tel:+64275050782" },
];

export default function Contact() {
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
    <section id="contact" className="py-24 px-8">
      <div ref={ref} className="fade-section max-w-xl mx-auto text-center">
        <h2
          className="mb-4 tracking-tight"
          style={{
            fontFamily: '"DM Serif Display", serif',
            fontSize: "clamp(2rem, 4vw, 3rem)",
            color: "var(--color-text)",
            lineHeight: 1.1,
          }}
        >
          Let's work together
        </h2>
        <p
          className="mb-10 leading-relaxed"
          style={{ fontSize: "0.95rem", color: "var(--color-muted)" }}
        >
          I'm currently open to new opportunities in Auckland and beyond.
          Whether it's a full-time role, contract, or just a chat feel free to
          reach out.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          {contactLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target={l.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm border transition-all duration-200"
              style={{
                background: "var(--color-surface)",
                borderColor: "var(--color-subtle)",
                color: "var(--color-text)",
                textDecoration: "none",
                fontFamily: '"DM Mono", monospace',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--color-accent)";
                e.currentTarget.style.color = "var(--color-accent3)";
                e.currentTarget.style.background = "rgba(167,139,250,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--color-subtle)";
                e.currentTarget.style.color = "var(--color-text)";
                e.currentTarget.style.background = "var(--color-surface)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
