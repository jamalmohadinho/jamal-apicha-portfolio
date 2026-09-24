import { useEffect, useState } from 'react';

import { FiMoon, FiSun } from 'react-icons/fi';

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark',
  );
  const isDay = theme === 'light';

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', isDay ? '#ffffff' : '#111827');

    try {
      window.localStorage.setItem('portfolio-theme', theme);
    } catch {
      // The toggle still works when browser storage is unavailable.
    }
  }, [theme, isDay]);

  return (
    <button
      type="button"
      className="theme-toggle"
      aria-label={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      title={isDay ? 'Switch to night mode' : 'Switch to day mode'}
      onClick={() => setTheme(isDay ? 'dark' : 'light')}
    >
      {isDay ? <FiMoon aria-hidden="true" /> : <FiSun aria-hidden="true" />}
    </button>
  );
}
