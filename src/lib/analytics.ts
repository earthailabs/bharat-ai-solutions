type GtagFunction = (
  command: "event",
  action: string,
  params?: Record<string, string | number | boolean | undefined>,
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
    dataLayer?: unknown[];
  }
}

export function trackWhatsAppClick(location: string) {
  if (typeof window === "undefined") return;

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "whatsapp_click",
    whatsapp_location: location,
  });

  if (typeof window.gtag === "function") {
    window.gtag("event", "whatsapp_click", {
      event_category: "engagement",
      event_label: location,
    });
  }
}
