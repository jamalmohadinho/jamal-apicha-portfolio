import { useRef, useState } from 'react';

import ExperienceCard from './ExperienceCard';

import { experience, leadership } from '../data/portfolio';

const categories = [
  { id: 'work', label: 'Work', entries: experience },
  { id: 'leadership', label: 'Leadership', entries: leadership },
];

export default function ExperienceSection() {
  const [selected, setSelected] = useState(0);
  const tabs = useRef([]);

  function handleKeyDown(event, index) {
    let next;

    if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') {
      next = (index + 1) % categories.length;
    } else if (event.key === 'Home') {
      next = 0;
    } else if (event.key === 'End') {
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
      id="experience"
      className="section-wrap experience-section"
      aria-labelledby="experience-heading"
    >
      <div className="section-heading">
        <h2 id="experience-heading">
          Experience<span>.</span>
        </h2>
        <p>Real teams, real systems, and a growing perspective.</p>
      </div>
      <div
        className="experience-tabs"
        role="tablist"
        aria-label="Experience categories"
      >
        {categories.map((category, index) => (
          <button
            key={category.id}
            ref={(element) => {
              tabs.current[index] = element;
            }}
            id={`experience-tab-${category.id}`}
            role="tab"
            aria-selected={selected === index}
            aria-controls={`experience-panel-${category.id}`}
            tabIndex={selected === index ? 0 : -1}
            onClick={() => setSelected(index)}
            onKeyDown={(event) => handleKeyDown(event, index)}
          >
            {category.label}
          </button>
        ))}
      </div>
      {categories.map((category, index) => (
        <div
          key={category.id}
          id={`experience-panel-${category.id}`}
          role="tabpanel"
          aria-labelledby={`experience-tab-${category.id}`}
          tabIndex={0}
          hidden={selected !== index}
        >
          <div className="experience-list">
            {category.entries.map((job) => (
              <ExperienceCard
                key={job.company}
                job={job}
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
