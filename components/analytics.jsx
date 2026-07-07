/* Privacy-safe analytics event helper */

(function initNexusAnalytics() {
  window.dataLayer = window.dataLayer || [];

  const safeParams = (params = {}) => {
    const blockedKeys = new Set(["name", "email", "phone", "message", "company", "position"]);
    return Object.entries(params).reduce((acc, [key, value]) => {
      if (blockedKeys.has(key)) return acc;
      if (value === undefined || value === null || value === "") return acc;
      acc[key] = value;
      return acc;
    }, {});
  };

  const track = (eventName, params = {}) => {
    if (!eventName) return;
    window.dataLayer.push({
      event: eventName,
      page_path: window.location.pathname + window.location.hash,
      page_title: document.title,
      ...safeParams(params),
    });
  };

  window.NexusAnalytics = {
    track,
    trackPageView(route) {
      track("nexus_page_view", {
        route,
        page_location: window.location.href,
      });
    },
    trackCta(label, location, destination) {
      track("nexus_cta_click", {
        cta_label: label,
        cta_location: location,
        destination,
      });
    },
    trackPdf(label, href) {
      track("nexus_pdf_click", {
        pdf_label: label,
        pdf_url: href,
      });
    },
  };
})();
