import { useRef, useState } from 'react';

import { FiPause, FiPlay } from 'react-icons/fi';

import TechnologyBadge from './TechnologyBadge';

import { skills } from '../data/portfolio';

export default function SkillsSection({ home = false }) {
  const categories = Object.keys(skills);
  const [selected, setSelected] = useState(0);
  const [paused, setPaused] = useState(false);
  const tabs = useRef([]);

  function onKeyDown(event, index) {
    let next;

    if (event.key === 'ArrowRight') {
      next = (index + 1) % categories.length;
    }

    if (event.key === 'ArrowLeft') {
      next = (index - 1 + categories.length) % categories.length;
    }

    if (event.key === 'Home') {
      next = 0;
    }

    if (event.key === 'End') {
      next = categories.length - 1;
    }

    if (next !== undefined) {
      event.preventDefault();
      setSelected(next);
      tabs.current[next].focus();
    }
  }

  return (
    <section
      id="skills"
      className={home ? 'section-wrap home-skills' : 'section-wrap'}
    >
      <div className={home ? 'sr-only' : 'section-heading'}>
        <h2>
          Skills & tools
          <span>.</span>
        </h2>
        <p>Technologies I use to turn an idea into working software.</p>
      </div>
      <div className="skills-panel overflow-hidden rounded-2xl border border-cyan-400/35 bg-[#0c121c] py-7 shadow-[0_0_35px_#06b6d410]">
        <div
          role="tablist"
          aria-label="Technology categories"
          className="mx-auto flex w-fit max-w-[92%] flex-wrap justify-center gap-1 rounded-xl bg-slate-800/80 p-1.5"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              ref={(el) => {
                tabs.current[index] = el;
              }}
              id={`skill-tab-${index}`}
              role="tab"
              aria-selected={selected === index}
              aria-controls={`skill-panel-${index}`}
              tabIndex={selected === index ? 0 : -1}
              onClick={() => setSelected(index)}
              onKeyDown={(e) => onKeyDown(e, index)}
              className={`rounded-lg px-4 py-3 text-xs font-semibold transition-colors ${selected === index ? 'bg-cyan-300 text-slate-950' : 'text-cyan-200 hover:bg-slate-700'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div
          key={selected}
          role="tabpanel"
          id={`skill-panel-${selected}`}
          aria-labelledby={`skill-tab-${selected}`}
          tabIndex={0}
          className={`marquee mt-8 ${paused ? 'is-paused' : ''}`}
        >
          <div className="marquee-track">
            {[0, 1, 2, 3].map((copy) => (
              <div
                key={copy}
                className="marquee-group"
                aria-hidden={copy > 0 ? true : undefined}
              >
                {skills[categories[selected]].map((technology) => (
                  <TechnologyBadge
                    key={technology.name}
                    technology={technology}
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            className="motion-control flex items-center gap-2 rounded-md px-3 py-2 text-xs text-slate-300 hover:text-cyan-200"
            aria-pressed={paused}
            onClick={() => setPaused(!paused)}
          >
            {paused ? (
              <FiPlay aria-hidden="true" />
            ) : (
              <FiPause aria-hidden="true" />
            )}
            {paused ? 'Play' : 'Pause'} animation
          </button>
          <span className="reduced-motion-note text-xs text-slate-400">
            Motion reduced · all technologies shown
          </span>
        </div>
      </div>
    </section>
  );
}
