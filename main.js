(() => {
  const year = document.getElementById('y');
  if (year) year.textContent = String(new Date().getFullYear());

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Hero + section reveals
  const revealNodes = [...document.querySelectorAll('[data-reveal]')];
  if (revealNodes.length) {
    if (reduceMotion) {
      revealNodes.forEach((node) => node.classList.add('is-visible'));
    } else {
      const show = (node) => node.classList.add('is-visible');

      // Hero entrance on first paint
      requestAnimationFrame(() => {
        document.querySelectorAll('.hero [data-reveal]').forEach(show);
      });

      const observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (!entry.isIntersecting) continue;
            show(entry.target);
            observer.unobserve(entry.target);
          }
        },
        { rootMargin: '0px 0px -5% 0px', threshold: 0.05 }
      );

      revealNodes.forEach((node) => {
        if (node.closest('.hero')) return;
        observer.observe(node);
      });
    }
  }

  // Gallery scroll
  const track = document.querySelector('[data-gallery-track]');
  if (!track) return;

  const scrollByCard = (direction) => {
    const card = track.querySelector('.gallerySlide');
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap) || 24;
    const amount = (card?.clientWidth ?? 280) + gap;
    track.scrollBy({
      left: amount * direction,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  };

  document
    .querySelector('[data-gallery-prev]')
    ?.addEventListener('click', () => scrollByCard(-1));
  document
    .querySelector('[data-gallery-next]')
    ?.addEventListener('click', () => scrollByCard(1));
})();
