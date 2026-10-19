// Safe to import from client components (no prompt text in here).
export const WHATSAPP_NUMBER = "918435428491";
export const DEMO_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "Hi Manish, I'd like a free demo of an AI assistant for my business."
)}`;

/**
 * Opens the on-site chat from any component. Pass a message to have it
 * sent automatically as the visitor's first message.
 *   openChat()                                  -> just opens the chat
 *   openChat("I'd like to book a free demo.")   -> opens and sends it
 */
export function openChat(message?: string) {
  window.dispatchEvent(new CustomEvent("manishai:open-chat", { detail: { message } }));
}

export const GITHUB_URL = "https://github.com/ManishMandrai";
// Paste your LinkedIn profile URL here to show the icon in the About section.
export const LINKEDIN_URL = "";