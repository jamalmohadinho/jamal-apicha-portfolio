import { useEffect, useRef, useState } from 'react';

import { FiMenu, FiX } from 'react-icons/fi';

import ThemeToggle from './components/ThemeToggle';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';
import ExperienceSection from './components/ExperienceSection';
import HomeSection from './components/HomeSection';
import ProjectCard from './components/ProjectCard';
import SkillsSection from './components/SkillsSection';
import CertificateCard from './components/CertificateCard';

import { profile, projects, certificates } from './data/portfolio';

import './App.css';
import './theme.css';

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['skills', 'Skills'],
  ['contact', 'Contact'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(
    () => window.location.hash.slice(1) || 'home',
  );
  const menuButton = useRef(null);

  useEffect(() => {
    function updateActiveSection() {
      const section = window.location.hash.slice(1) || 'home';

      if (section !== 'main') {
        setActiveSection(section);
      }
    }

    window.addEventListener('hashchange', updateActiveSection);
    return () => window.removeEventListener('hashchange', updateActiveSection);
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(activeSection)?.scrollIntoView({
        behavior: 'instant',
        block: 'start',
      });
    });

    return () => window.cancelAnimationFrame(frame);
  }, [activeSection]);

  function closeMenu(event) {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      menuButton.current.focus();
    }
  }

  return (
    <>
      <a
        href="#main"
        className="skip-link"
      >
        Skip to content
      </a>
      <header
        className="site-header"
        onKeyDown={closeMenu}
      >
        <div className="nav-inner">
          <a
            href="#home"
            className="site-name"
            aria-label="Jamal Apicha home"
          >
            {profile.name}
          </a>
          <nav
            aria-label="Main navigation"
            className="desktop-nav"
          >
            {navigation.map(([id, label]) => (
              <a
                key={id}
                href={`#${id}`}
                className={id === activeSection ? 'is-active' : undefined}
                aria-current={id === activeSection ? 'location' : undefined}
                onClick={() => setActiveSection(id)}
              >
                {label}
              </a>
            ))}
          </nav>
          <ThemeToggle />
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="mobile-nav"
          hidden={!menuOpen}
        >
          {navigation.map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={() => {
                setActiveSection(id);
                setMenuOpen(false);
              }}
            >
              {label}
            </a>
          ))}
        </nav>
      </header>
      <main id="main">
        {activeSection === 'about' ? (
          <AboutSection />
        ) : (
          <>
            <HomeSection />
            <SkillsSection />
            <ExperienceSection />
            <section
              id="projects"
              className="section-wrap"
            >
              <div className="section-heading">
                <h2>
                  Projects
                  <span>.</span>
                </h2>
                <p>From an idea to something you can use.</p>
              </div>
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                  />
                ))}
              </div>
            </section>
            {certificates.length > 0 && (
              <section
                id="certificates"
                className="section-wrap"
              >
                <div className="section-heading">
                  <p className="eyebrow">CONTINUED LEARNING</p>
                  <h2>
                    Certificates
                    <span>.</span>
                  </h2>
                </div>
                <div className="grid gap-5 md:grid-cols-2">
                  {certificates.map((certificate) => (
                    <CertificateCard
                      key={certificate.title}
                      certificate={certificate}
                    />
                  ))}
                </div>
              </section>
            )}
            <ContactSection />
          </>
        )}
      </main>
      <footer className="section-wrap footer">
        <a
          className="wordmark"
          href="#home"
        >
          ja
          <span>.</span>
        </a>
        <p>© {new Date().getFullYear()} Jamal Apicha</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </>
  );
}

export default App;
