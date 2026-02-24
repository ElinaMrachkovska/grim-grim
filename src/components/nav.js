// ============================================
// COMPONENT — Navigation (burger + scroll spy)
// ============================================

/**
 * Initialises the mobile burger menu toggle.
 */
export function initNav() {
  const burger    = document.getElementById('burgerBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (!burger || !mobileNav) return;

  burger.addEventListener('click', () => {
    const isOpen = mobileNav.classList.toggle('active');
    burger.setAttribute('aria-expanded', String(isOpen));
  });

  // Close mobile nav when a link is clicked
  mobileNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileNav.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
}

/**
 * Highlights the nav link for the section currently in view.
 */
export function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-links a');

  window.addEventListener(
    'scroll',
    () => {
      let current = '';
      sections.forEach((s) => {
        if (window.scrollY >= s.offsetTop - 80) current = s.id;
      });
      navLinks.forEach((a) => {
        const isActive = a.getAttribute('href') === `#${current}`;
        a.classList.toggle('active', isActive);
      });
    },
    { passive: true }
  );
}
