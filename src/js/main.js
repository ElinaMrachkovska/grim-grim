import { initNav, initScrollSpy }           from '../components/nav.js';
import { initPopups, openPopup }             from '../components/popup.js';
import { initTicketPopup, openTicketPopup }  from '../components/ticket.js';
import { initContactForm }                   from '../components/contact.js';
import { initScrollAnimations }              from '../components/animations.js';


async function loadBlock(containerId, file) {
  const container = document.getElementById(containerId);
  if (!container) return;

  try {
    const res  = await fetch(`src/blocks/${file}`);
    if (!res.ok) throw new Error(`${res.status} — src/blocks/${file}`);
    const html = await res.text();
    container.innerHTML = html;
  } catch (err) {
    console.error('[loadBlock]', err);
  }
}


function initTicketButtons() {
  document.querySelectorAll('.btn-ticket[data-venue]').forEach((btn) => {
    btn.addEventListener('click', () => {
      openTicketPopup(btn.dataset.venue, btn.dataset.date, btn.dataset.seats);
    });
  });
}

function initMemberCards() {
  document.querySelectorAll('.member-card[data-member]').forEach((card) => {
    card.addEventListener('click', () => {
      document.getElementById('memberName').textContent  = card.dataset.member;
      document.getElementById('memberEmoji').textContent = card.dataset.emoji;
      document.getElementById('memberRole').textContent  = card.dataset.role;
      document.getElementById('memberBio').textContent   = card.dataset.bio;
      openPopup('memberPopup');
    });
  });
}

function initSocialLinks() {
  document.querySelectorAll('a[data-social]').forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const platform = link.dataset.social;
      document.getElementById('socialName').textContent     = platform;
      document.getElementById('socialPlatform').textContent = platform;
      openPopup('socialPopup');
    });
  });
}

async function bootstrap() {

  await Promise.all([
    loadBlock('block-nav',      'nav.html'),
    loadBlock('block-hero',     'hero.html'),
    loadBlock('block-concerts', 'concerts.html'),
    loadBlock('block-members',  'members.html'),
    loadBlock('block-about',    'about.html'),
    loadBlock('block-contact',  'contact.html'),
    loadBlock('block-footer',   'footer.html'),
  ]);

  initPopups();
  initNav();
  initScrollSpy();
  initTicketPopup();
  initTicketButtons();
  initMemberCards();
  initSocialLinks();
  initContactForm();
  initScrollAnimations();

  console.info('🎸 Гурт «Грим та Грім» — app initialised');
}

document.addEventListener('DOMContentLoaded', bootstrap);