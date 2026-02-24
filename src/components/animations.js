
export function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) {
   
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
