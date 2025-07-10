document.addEventListener("DOMContentLoaded", () => {
  const dot = document.querySelector('.dot');
  const bar = document.querySelector('.progress-bar');

  if (dot && bar) {
    window.addEventListener('scroll', () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      const barWidth = bar.clientWidth;
      const dotPos = scrollPercent * barWidth;
      dot.style.left = `${dotPos}px`;
    });
  }
});
