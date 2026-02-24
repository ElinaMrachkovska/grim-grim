export function openPopup(id) {
  document.getElementById(id).classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closePopup(id) {
  document.getElementById(id).classList.remove('active');
  document.body.style.overflow = '';
}

export function initPopups() {

  document.querySelectorAll('.popup-overlay').forEach((overlay) => {
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closePopup(overlay.id);
    });
  });


  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    document.querySelectorAll('.popup-overlay.active').forEach((p) =>
      closePopup(p.id)
    );
  });

  document.querySelectorAll('[data-close-popup]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const popupId = btn.closest('.popup-overlay')?.id;
      if (popupId) closePopup(popupId);
    });
  });
}
