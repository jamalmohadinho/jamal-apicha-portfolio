// Apply a saved preference before the page paints. Night is the default.
try {
  document.documentElement.dataset.theme =
    localStorage.getItem('portfolio-theme') === 'light' ? 'light' : 'dark';
} catch {
  document.documentElement.dataset.theme = 'dark';
}
