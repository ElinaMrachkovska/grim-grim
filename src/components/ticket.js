// ============================================
// COMPONENT — Ticket order popup
// ============================================

import { TICKET_PRICE }               from '../js/data.js';
import { validators, validateField, clearErrors } from '../js/validation.js';
import { submitTicketOrder }           from '../js/api.js';
import { openPopup, closePopup }       from './popup.js';

let qty = 1;

/**
 * Opens the ticket popup pre-filled with concert info.
 * @param {string} venue
 * @param {string} date
 * @param {string} seats
 */
export function openTicketPopup(venue, date, seats) {
  qty = 1;

  document.getElementById('popupVenue').textContent = venue;
  document.getElementById('popupDate').textContent  = date;
  document.getElementById('popupSeats').textContent = seats;
  document.getElementById('qty-display').textContent = '1';
  document.getElementById('popupTotal').textContent  = `${TICKET_PRICE} ₴`;

  clearErrors(['pName', 'pEmail', 'pPhone']);
  ['pName', 'pEmail', 'pPhone'].forEach((id) => {
    document.getElementById(id).value = '';
  });

  openPopup('ticketPopup');
}

/**
 * Adjusts the ticket quantity (+/-) and updates the total.
 * @param {number} delta
 */
export function changeQty(delta) {
  qty = Math.max(1, Math.min(10, qty + delta));
  document.getElementById('qty-display').textContent = qty;
  document.getElementById('popupTotal').textContent  = `${qty * TICKET_PRICE} ₴`;
}

/**
 * Validates and submits the ticket order form.
 */
export async function submitTicket() {
  const nameOk  = validateField('pName',  'pNameErr',  validators.name);
  const emailOk = validateField('pEmail', 'pEmailErr', validators.email);
  const phoneOk = validateField('pPhone', 'pPhoneErr', validators.phone);

  if (!nameOk || !emailOk || !phoneOk) return;

  const payload = {
    venue: document.getElementById('popupVenue').textContent,
    date:  document.getElementById('popupDate').textContent,
    name:  document.getElementById('pName').value.trim(),
    email: document.getElementById('pEmail').value.trim(),
    phone: document.getElementById('pPhone').value.trim(),
    qty,
    total: qty * TICKET_PRICE,
  };

  const btn = document.querySelector('#ticketPopup .btn-popup-submit');
  btn.disabled    = true;
  btn.textContent = 'Відправляємо…';

  await submitTicketOrder(payload);

  btn.disabled    = false;
  btn.textContent = 'Підтвердити замовлення';

  closePopup('ticketPopup');
  openPopup('successPopup');
}

/** Wires up qty buttons once DOM is ready */
export function initTicketPopup() {
  document.getElementById('btnQtyDec')?.addEventListener('click', () => changeQty(-1));
  document.getElementById('btnQtyInc')?.addEventListener('click', () => changeQty(+1));
  document.getElementById('btnTicketSubmit')?.addEventListener('click', submitTicket);
}
