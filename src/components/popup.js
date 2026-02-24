// ============================================
// COMPONENT — Popup / Modal controller
// ============================================

/**
 * Opens a popup overlay by id.
 * @param {string} id
 */
export function openPopup(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

/**
 * Closes a popup overlay by id.
 * @param {string} id
 */
export function closePopup(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

/**
 * Registers global close behaviours:
 * - Click outside the popup card → close
 * - Escape key → close all open popups
 */
export function initPopups() {
  // Close on overlay click
  document.querySelectorAll('.popup-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup(overlay.id);
    });
  });

  // Close on Escape key
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.popup-overlay.active').forEach((p) =>
      closePopup(p.id)
    );
  });

  // Wire up static close buttons (data-close attribute)
  document.querySelectorAll('[data-close-popup]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const popupId = btn.closest('.popup-overlay')?.id;
      if (popupId) closePopup(popupId);
    });
  });
}
