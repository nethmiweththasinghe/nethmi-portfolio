import { useEffect, useRef } from 'react';
import { experience } from '../data/portfolio';

export default function Experience() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) ref.current?.classList.add('visible'); },
      { threshold: 0.05 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-24 px-8 md:px-16 max-w-6xl mx-auto">
      <div ref={ref} className="fade-section">
        <p
          className="mb-2"
          style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.75rem', color: '#a78bfa', letterSpacing: '0.15em', textTransform: 'uppercase' }}
        >
          {/* work experience */}
        </p>
        <h2
          className="mb-12 tracking-tight"
          style={{ fontFamily: '"DM Serif Display", serif', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#f1f0fb', lineHeight: 1.1 }}
        >
          Where I've worked
        </h2>

        <div className="relative pl-8 timeline-line">
          {experience.map((exp, i) => (
            <div key={i} className="relative mb-12 last:mb-0">
              {/* Dot */}
              <div
                className="absolute -left-[2.45rem] top-1.5 w-2.5 h-2.5 rounded-full border-2"
                style={{
                  background: exp.current ? '#a78bfa' : '#8b8aa0',
                  borderColor: '#0a0a0f',
                  boxShadow: exp.current ? '0 0 0 4px rgba(167,139,250,0.2)' : 'none',
                }}
              />

              <p
                className="mb-1"
                style={{ fontFamily: '"DM Mono", monospace', fontSize: '0.75rem', color: '#a78bfa', letterSpacing: '0.08em' }}
              >
                {exp.period}
              </p>
              <p
                className="mb-0.5 font-semibold"
                style={{ fontSize: '1.15rem', color: '#f1f0fb' }}
              >
                {exp.role}
              </p>
              <p
                className="mb-4"
                style={{ fontSize: '0.875rem', color: '#8b8aa0' }}
              >
                {exp.company} · {exp.location}
              </p>

              <ul className="flex flex-col gap-2 mb-4">
                {exp.bullets.map((b, j) => (
                  <li
                    key={j}
                    className="relative pl-5 text-sm leading-relaxed"
                    style={{ color: '#b0afc8' }}
                  >
                    <span
                      className="absolute left-0 top-0"
                      style={{ color: '#a78bfa', fontSize: '0.8rem' }}
                    >
                      →
                    </span>
                    {b}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-1.5">
                {exp.stack.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-full text-xs border"
                    style={{
                      fontFamily: '"DM Mono", monospace',
                      background: 'rgba(94,234,212,0.07)',
                      color: '#5eead4',
                      borderColor: 'rgba(94,234,212,0.2)',
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
