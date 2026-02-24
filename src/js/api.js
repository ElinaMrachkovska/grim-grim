// ============================================
// API — Request helpers (GET submissions)
// ============================================

function sendGetRequest(endpoint, params) {
  const query = new URLSearchParams(params).toString();
  const url   = `${endpoint}?${query}`;
  // Лише логуємо — НЕ змінюємо URL щоб уникнути 404
  console.info('[API] GET →', url);
  return url;
}

export async function submitTicketOrder(payload) {
  await delay(300);
  const url = sendGetRequest('/order', payload);
  return { ok: true, url };
}

export async function submitContactForm(payload) {
  await delay(300);
  const url = sendGetRequest('/contact', payload);
  return { ok: true, url };
}

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}