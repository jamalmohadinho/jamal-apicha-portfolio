export default function TechnologyBadge({ technology, compact = false }) {
  const Icon = technology.icon;

  return (
    <span className={compact ? 'tech-tag' : 'technology-badge'}>
      {Icon && <Icon aria-hidden="true" />}
      <span>{technology.name}</span>
    </span>
  );
}
