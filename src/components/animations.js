// ============================================
// COMPONENT — Scroll-triggered fade-in animations
// ============================================

/**
 * Observes all `.fade-in` elements and adds the
 * `.visible` class once they enter the viewport.
 */
export function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: show everything immediately
    document.querySelectorAll('.fade-in').forEach((el) =>
      el.classList.add('visible')
    );
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.1 }
  );

  document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
}
