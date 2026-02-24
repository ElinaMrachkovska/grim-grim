# Гурт «Грим та Грім» — Landing Page

Лендінг-сторінка для рок-гурту. Реалізований на чистому **HTML / CSS / JavaScript** без фреймворків.

---

## 📁 Структура проєкту

```
gng-band/
│
├── index.html                  # Точка входу — збирає всі блоки
│
├── styles/                     # CSS-шари (завантажуються по порядку)
│   ├── variables.css           # Design tokens: кольори, шрифти, відступи, z-index
│   ├── base.css                # Reset + глобальні стилі, .fade-in
│   ├── components.css          # Перевикористовувані UI: кнопки, форми, .section-title
│   ├── blocks.css              # Блоки-секції: nav, hero, concerts, members, about, contact, footer
│   ├── popups.css              # Модальні вікна / оверлеї
│   └── responsive.css          # Media-queries (≤768px, ≤480px)
│
├── js/
│   ├── main.js                 # Точка входу JS (ES-модуль) — ініціалізує всі компоненти
│   ├── data.js                 # Статичний контент: концерти, учасники, соцмережі
│   ├── api.js                  # Шар запитів: submitTicketOrder(), submitContactForm()
│   ├── validation.js           # Валідатори полів + validateField(), clearErrors()
│   └── types.ts                # TypeScript-типи (Concert, Member, TicketPayload тощо)
│
├── components/
│   ├── popup.js                # openPopup(), closePopup(), initPopups()
│   ├── nav.js                  # initNav() (бургер-меню), initScrollSpy()
│   ├── ticket.js               # Логіка попапу квитка: openTicketPopup(), changeQty(), submitTicket()
│   ├── contact.js              # initContactForm() — валідація + відправка
│   ├── animations.js           # initScrollAnimations() — IntersectionObserver
│   └── popups.html             # HTML-шаблон усіх попапів (для довідки / SSI)
│
└── blocks/                     # HTML-партіали кожної секції (для довідки / SSI / шаблонізаторів)
    ├── nav.html
    ├── hero.html
    ├── concerts.html
    ├── members.html
    ├── about.html
    ├── contact.html
    └── footer.html
```

---

## 🚀 Запуск

Оскільки `main.js` використовує **ES-модулі** (`import/export`), файли треба відкривати через локальний сервер:

```bash
# Python
python3 -m http.server 8080

# Node.js (npx)
npx serve .

# VS Code
# Розширення "Live Server" → правою кнопкою на index.html → "Open with Live Server"
```

Потім відкрити: `http://localhost:8080`

---

## 🗂 Архітектура CSS

Файли підключаються в строгому порядку:

| Файл | Роль |
|------|------|
| `variables.css` | CSS custom properties — єдине джерело значень |
| `base.css` | Normalize + html/body + `.fade-in` |
| `components.css` | Атомарні елементи: `.btn-*`, `.form-group`, `.section-title` |
| `blocks.css` | Макет секцій (BEM-блоки) |
| `popups.css` | Попапи та анімація `.popup-overlay` |
| `responsive.css` | Breakpoints — завжди останній |

---

## 🗂 Архітектура JS

```
main.js (entry)
 ├── components/nav.js        → initNav, initScrollSpy
 ├── components/popup.js      → openPopup, closePopup, initPopups
 ├── components/ticket.js     → openTicketPopup, changeQty, submitTicket
 │     ├── js/data.js         → TICKET_PRICE
 │     ├── js/validation.js   → validators, validateField
 │     └── js/api.js          → submitTicketOrder
 ├── components/contact.js    → initContactForm
 │     ├── js/validation.js
 │     └── js/api.js          → submitContactForm
 └── components/animations.js → initScrollAnimations
```

---

## ✅ Функціональність

- **Квиток** — попап з вибором кількості, підрахунком суми, валідацією і GET-запитом
- **Форма контакту** — валідація + GET-запит + попап підтвердження  
- **Учасники гурту** — кліковані картки з попапом-біо
- **Соцмережі** — попап-заглушка
- **Скрол-спай** — підсвітка активного пункту меню
- **Fade-in анімації** — IntersectionObserver
- **Адаптивність** — mobile-first з двома брейкпоінтами
- **Доступність** — `aria-*`, `role`, `aria-live` на полях помилок
