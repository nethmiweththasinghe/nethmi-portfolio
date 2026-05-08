import { useState, useEffect } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar({ onToggleTheme, theme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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
        {/* photo */}
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

      {/* In the nav, replace the mobile div with: */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden"
        style={{
          color: "var(--color-accent)",
          background: "none",
          border: "none",
          fontSize: "1.4rem",
          cursor: "pointer",
        }}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* And add a dropdown below the nav*/}
      {menuOpen && (
        <div
          className="md:hidden fixed top-16 left-0 right-0 z-40 py-4 flex flex-col items-center gap-4 nav-backdrop border-b"
          style={{ borderColor: "var(--color-subtle)" }}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                color: "var(--color-muted)",
                textDecoration: "none",
                fontFamily: "Outfit, sans-serif",
                fontSize: "0.95rem",
              }}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
      {/* )} */}
    </nav>
  );
}
