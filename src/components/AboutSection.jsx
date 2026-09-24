import { profile, about } from '../data/portfolio';

export default function AboutSection() {
  return (
    <section
      id="about"
      className="section-wrap about-grid"
    >
      <div>
        <p className="eyebrow">ABOUT ME</p>
        <h2>{about.heading}</h2>
      </div>
      <div className="about-copy">
        <p>
          I'm <strong className="about-name">{profile.name}</strong>,{' '}
          {about.introduction}
        </p>
        <p>
          I specialize in modern technologies including{' '}
          {about.technologies.map((technology, index) => (
            <span key={technology}>
              {index > 0 &&
                (index === about.technologies.length - 1 ? ', and ' : ', ')}
              <strong data-technology={technology}>{technology}</strong>
            </span>
          ))}
          .
        </p>
        <p>
          {about.hackathon
            .split(about.hackathonHighlight)
            .map((part, index) => (
              <span key={index}>
                {index > 0 && (
                  <strong className="about-event">
                    {about.hackathonHighlight}
                  </strong>
                )}
                {part}
              </span>
            ))}
        </p>
        <p>{about.experience}</p>
        <div className="about-links">
          <a
            href="#projects"
            className="button primary"
          >
            View Projects
          </a>
          <a
            href="#experience"
            className="button secondary"
          >
            View Experience
          </a>
          <a
            href="#skills"
            className="button secondary"
          >
            View Skills
          </a>
        </div>
        <div className="about-facts">
        </div>
      </div>
    </section>
  );
}
