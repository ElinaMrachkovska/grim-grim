// ============================================
// DATA — Static content for concerts & members
// ============================================

/**
 * @type {import('./types').Concert[]}
 */
export const CONCERTS = [
  {
    id: 'kyiv-docker',
    venue: 'Київ — Docker-G Pub',
    city: 'Київ',
    location: 'Docker-G Pub',
    seats: 250,
    date: '26.10.2025',
    time: '19:00',
    price: 450,
  },
  {
    id: 'lviv-ifest',
    venue: 'Львів — IFESTrepublic',
    city: 'Львів',
    location: 'IFESTrepublic',
    seats: 400,
    date: '01.11.2025',
    time: '20:00',
    price: 450,
  },
  {
    id: 'odesa-zelenyi',
    venue: 'Одеса — Зелен театр',
    city: 'Одеса',
    location: 'Зелен театр',
    seats: 700,
    date: '09.11.2025',
    time: '19:30',
    price: 450,
  },
  {
    id: 'kharkiv-artzavod',
    venue: 'Харків — ArtZavod',
    city: 'Харків',
    location: 'ArtZavod',
    seats: 500,
    date: '16.11.2025',
    time: '19:00',
    price: 450,
  },
];

/**
 * @type {import('./types').Member[]}
 */
export const MEMBERS = [
  {
    id: 'maksym',
    name: 'Максим',
    role: 'Гітара',
    emoji: '🐰',
    colorClass: 'm1',
    bio: 'Максим — душа гурту та автор більшості гітарних рифів. Його унікальний стиль гри поєднує класичний рок з сучасним звуком.',
  },
  {
    id: 'olena',
    name: 'Олена',
    role: 'Вокал',
    emoji: '🎤',
    colorClass: 'm2',
    bio: 'Олена — голос гурту. Її потужний вокал та сценічна присутність захоплюють серця глядачів на кожному виступі.',
  },
  {
    id: 'taras',
    name: 'Тарас',
    role: 'Барабани',
    emoji: '🥁',
    colorClass: 'm3',
    bio: 'Тарас — ритмічна основа гурту. Його барабанний бій тримає ритм, який змушує серця битися в унісон з музикою.',
  },
];

/** Ticket price in UAH */
export const TICKET_PRICE = 450;

/** Social links (placeholder URLs) */
export const SOCIALS = {
  Instagram: 'https://instagram.com',
  YouTube:   'https://youtube.com',
  Facebook:  'https://facebook.com',
};
