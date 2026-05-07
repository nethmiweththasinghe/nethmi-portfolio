import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#experience", label: "experience" },
  { href: "#projects", label: "projects" },
  { href: "#education", label: "education" },
  { href: "#contact", label: "contact" },
];

export default function Navbar({ onToggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);

  console.log(theme);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-8 md:px-16 py-4 nav-backdrop border-b transition-all duration-300 ${
        scrolled ? "border-purple-900/30" : "border-transparent"
      }`}
    >
      <span
        className="font-mono text-[0.9rem] tracking-widest"
        style={{
          color: "var(--color-accent)",
          fontFamily: '"DM Mono", monospace',
        }}
      >
        photo
      </span>

      <ul className="hidden md:flex gap-8 list-none">
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              className="text-sm transition-colors duration-200"
              style={{
                color: "#8b8aa0",
                textDecoration: "none",
                fontFamily: "Outfit, sans-serif",
                letterSpacing: "0.02em",
              }}
              onMouseEnter={(e) =>
                (e.target.style.color = "var(--color-accent3)")
              }
              onMouseLeave={(e) =>
                (e.target.style.color = "var(--color-muted)")
              }
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button onClick={onToggleTheme} aria-label="Toggle theme">
        {theme === "dark" ? "☀️" : "🌙"}
      </button>

      {/* Mobile: just show initials */}
      <div className="md:hidden flex gap-4">
        {links.slice(0, 3).map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="text-xs"
            style={{
              color: "#8b8aa0",
              textDecoration: "none",
              fontFamily: '"DM Mono", monospace',
            }}
          >
            {l.label.slice(0, 3)}
          </a>
        ))}
      </div>
    </nav>
  );
}
