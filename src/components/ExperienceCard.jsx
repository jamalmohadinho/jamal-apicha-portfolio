import { FiAward, FiArrowUpRight } from 'react-icons/fi';

export default function ExperienceCard({ job }) {
  return (
    <article className={`experience-card experience-card--${job.logoStyle}`}>
      <div className="experience-card-header">
        <div className="experience-heading-copy">
          <h3>{job.role || job.company}</h3>
          {job.role && <p className="experience-company">{job.company}</p>}
          {job.date && <p className="experience-date">{job.date}</p>}
        </div>
        {job.logo ? (
          <div className={`experience-logo experience-logo--${job.logoStyle}`}>
            <img
              src={job.logo}
              alt={`${job.logoName} logo`}
              width="64"
              height="64"
              loading="lazy"
            />
          </div>
        ) : (
          <span
            className="experience-initials"
            aria-hidden="true"
          >
            {job.initials}
          </span>
        )}
      </div>
      {job.bullets?.length > 0 && (
        <div className="experience-content">
          {job.location && (
            <p className="experience-location">{job.location}</p>
          )}
          <ul className="experience-contributions">
            {job.bullets.map((bullet) => (
              <li key={bullet}>{bullet}</li>
            ))}
          </ul>
          {job.certificate && (
            <a
              className="experience-certificate"
              href={job.certificate}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiAward aria-hidden="true" />
              View Certificate
              <FiArrowUpRight aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </article>
  );
}
