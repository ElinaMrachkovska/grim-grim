// ============================================
// VALIDATION — Form field validators
// ============================================

/**
 * Returns an error message string, or '' if the value is valid.
 * @param {string} value
 * @returns {string}
 */
export const validators = {
  /** At least 2 characters */
  name: (value) =>
    value.trim().length < 2 ? "Введіть ваше ім'я" : '',

  /** Basic email format */
  email: (value) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim())
      ? ''
      : 'Введіть коректний email',

  /** At least 10 chars (phone) */
  phone: (value) =>
    value.trim().replace(/\D/g, '').length < 10
      ? 'Введіть номер телефону'
      : '',

  /** At least 10 characters */
  message: (value) =>
    value.trim().length < 10 ? 'Повідомлення занадто коротке' : '',
};

/**
 * Validates a single DOM field and shows/hides its error element.
 *
 * @param {string}   fieldId   - id of the <input> / <textarea>
 * @param {string}   errorId   - id of the error <span>
 * @param {Function} validator - validator function from `validators`
 * @returns {boolean} true if the field is valid
 */
export function validateField(fieldId, errorId, validator) {
  const el  = document.getElementById(fieldId);
  const err = document.getElementById(errorId);
  const msg = validator(el.value);

  if (msg) {
    el.classList.add('error');
    err.textContent = msg;
    return false;
  }

  el.classList.remove('error');
  err.textContent = '';
  return true;
}

/**
 * Clears all error states for a list of field IDs.
 * @param {string[]} fieldIds
 */
export function clearErrors(fieldIds) {
  fieldIds.forEach((id) => {
    const el  = document.getElementById(id);
    const err = document.getElementById(id + 'Err');
    if (el)  el.classList.remove('error');
    if (err) err.textContent = '';
  });
}
