import { validators, validateField } from '../js/validation.js';
import { submitContactForm }          from '../js/api.js';
import { openPopup }                  from './popup.js';

export function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const nameOk  = validateField('cName',  'cNameErr',  validators.name);
    const emailOk = validateField('cEmail', 'cEmailErr', validators.email);
    const msgOk   = validateField('cMsg',   'cMsgErr',   validators.message);

    if (!nameOk || !emailOk || !msgOk) return;

    const payload = {
      name:    document.getElementById('cName').value.trim(),
      email:   document.getElementById('cEmail').value.trim(),
      message: document.getElementById('cMsg').value.trim(),
    };

    const btn       = form.querySelector('.btn-submit');
    btn.disabled    = true;
    btn.textContent = 'Відправляємо…';

    await submitContactForm(payload);

    btn.disabled    = false;
    btn.textContent = 'Відправити';

    form.reset();
    openPopup('contactSuccessPopup');
  });
}
