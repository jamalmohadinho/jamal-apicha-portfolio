import { FiArrowUpRight, FiDownload } from 'react-icons/fi';

import { profile } from '../data/portfolio';

export default function HomeSection() {
  return (
    <section
      id="home"
      className="section-wrap home-section"
    >
      <div className="home-photo-frame">
        {profile.photo ? (
          <img
            className="home-photo"
            src={profile.photo}
            alt={`Portrait of ${profile.name}`}
            width="800"
            height="800"
            fetchPriority="high"
          />
        ) : (
          <div
            className="home-monogram"
            aria-label={profile.name}
          >
            JA
          </div>
        )}
      </div>
      <div className="home-overview">
        <div className="home-introduction">
          <h1>{profile.headline}</h1>
          <p>
            {profile.introduction.map((part) =>
              part.bold ? (
                <strong key={part.text}>{part.text}</strong>
              ) : (
                part.text
              ),
            )}
          </p>
        </div>
        <div className="home-actions">
          <a
            href="#projects"
            className="button primary"
          >
            View Projects
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="#experience"
            className="button secondary"
          >
            View Experience
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="#skills"
            className="button secondary"
          >
            View Skills
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="#about"
            className="button secondary"
          >
            About Me
            <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href={profile.resume}
            download
            className="button secondary"
          >
            Download Resume
            <FiDownload aria-hidden="true" />
          </a>
          <a
            href="#contact"
            className="home-contact"
          >
            Let's connect
            <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
