import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

import TechnologyBadge from './TechnologyBadge';

import { technologies } from '../data/portfolio';

export default function ProjectCard({ project }) {
  return (
    <article className="project-card flex h-full flex-col rounded-2xl border border-cyan-400/30 bg-slate-900/60 p-7 shadow-lg shadow-cyan-950/20">
      <h3 className="text-center text-2xl font-bold text-white">
        {project.title}
      </h3>
      <p className="mt-2 text-center text-[10px] tracking-[0.18em] text-cyan-300">
        {project.subtitle}
      </p>
      <p className="mt-6 text-sm leading-7 text-slate-300">
        {project.description}
      </p>
      <div className="mt-7 mb-8">
        <h4 className="mb-3 text-xs font-semibold text-cyan-300">Tech Stack</h4>
        <div className="flex flex-wrap gap-2">
          {project.stack.map((name) => (
            <TechnologyBadge
              key={name}
              technology={technologies[name] || { name }}
              compact
            />
          ))}
        </div>
      </div>
      <div className="mt-auto flex flex-wrap gap-3">
        {project.github && (
          <a
            className="button secondary"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} on GitHub`}
          >
            <FiGithub aria-hidden="true" />
            GitHub
          </a>
        )}
        {project.live && (
          <a
            className="button primary"
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${project.title} live site`}
          >
            Live Site <FiArrowUpRight aria-hidden="true" />
          </a>
        )}
      </div>
    </article>
  );
}
