// Safe to import from client components (no prompt text in here).
export const WHATSAPP_NUMBER = "918435428491";
export const DEMO_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Manish, I'd like a free demo of an AI assistant for my business."
)}`;

export function openChat(message?: string) {
  window.dispatchEvent(new CustomEvent("manishai:open-chat", { detail: { message } }));
}