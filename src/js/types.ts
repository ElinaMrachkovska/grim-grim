// ============================================
// TYPES — Гурт «Грим та Грім»
// ============================================

/** A scheduled concert event */
export interface Concert {
  id: string;
  venue: string;       // "Київ — Docker-G Pub"
  city: string;        // "Київ"
  location: string;    // "Docker-G Pub"
  seats: number;
  date: string;        // "26.10.2025"
  time: string;        // "19:00"
  price: number;       // in UAH
}

/** Band member profile */
export interface Member {
  id: string;
  name: string;
  role: string;        // "гітара" | "вокал" | "барабани"
  emoji: string;
  colorClass: string;  // CSS class for gradient bg: "m1" | "m2" | "m3"
  bio: string;
}

/** Contact form payload */
export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

/** Ticket order payload (sent as GET params) */
export interface TicketPayload {
  venue: string;
  date: string;
  name: string;
  email: string;
  phone: string;
  qty: number;
  total: number;
}

/** Validation rule: returns an error string or empty string if valid */
export type Validator = (value: string) => string;

/** Result of a form validation run */
export interface ValidationResult {
  valid: boolean;
  errors: Record<string, string>;
}

/** Generic popup ID union */
export type PopupId =
  | 'ticketPopup'
  | 'memberPopup'
  | 'successPopup'
  | 'contactSuccessPopup'
  | 'socialPopup';
