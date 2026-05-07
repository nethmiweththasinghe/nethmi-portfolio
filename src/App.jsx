import Navbar from './components/Navbar';
import Description from './components/Description';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Divider from './components/Divider';

export default function App() {
  return (
    <div style={{ background: '#0a0a0f', minHeight: '100vh' }}>
      <Navbar />
      <Description />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Projects />
      <Divider />
      <Education />
      <Divider />
      <Contact />
      <footer
        className="text-center py-8 border-t"
        style={{
          fontSize: '0.8rem',
          color: '#8b8aa0',
          fontFamily: '"DM Mono", monospace',
          borderColor: '#3d3d52',
        }}
      >
        Nethmi Weththasinghe · 2026
      </footer>
    </div>
  );
}
