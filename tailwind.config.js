/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"DM Serif Display"', 'serif'],
        sans: ['Outfit', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      colors: {
        bg: '#0a0a0f',
        bg2: '#111118',
        surface: '#1e1e2e',
        surface2: '#252535',
        accent: '#a78bfa',
        accent2: '#7c3aed',
        accent3: '#c4b5fd',
        subtle: '#3d3d52',
        muted: '#8b8aa0',
        teal: '#5eead4',
        coral: '#fb7185',
        amber: '#fbbf24',
        green: '#4ade80',
      },
      animation: {
        fadeUp: 'fadeUp 0.8s ease both',
        fadeUpDelay: 'fadeUp 0.8s 0.3s ease both',
        pulse2: 'pulse2 2s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: 0, transform: 'translateY(30px)' },
          to: { opacity: 1, transform: 'translateY(0)' },
        },
        pulse2: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.4 },
        },
      },
    },
  },
  plugins: [],
}


