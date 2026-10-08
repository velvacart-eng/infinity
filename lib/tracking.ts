/**
 * Conversion tracking preparation.
 *
 * Semantic event names are emitted via `data-conversion` attributes so that
 * GTM / GA4 / Google Ads tags can be wired up later without code changes.
 * No vendor IDs are hardcoded — configuration is environment-driven through
 * NEXT_PUBLIC_* variables (see .env.example). When unset, no tags load and
 * the site remains fully static and lightweight.
 */

export const trackingEvents = {
  contactCtaClick: "contact_cta_click",
  landingPageContactClick: "landing_page_contact_click",
  landingPageFormStart: "landing_page_form_start",
  landingPageFormSubmit: "landing_page_form_submit",
} as const;

export type TrackingEvent = (typeof trackingEvents)[keyof typeof trackingEvents];

export const trackingConfig = {
  gtmId: process.env.NEXT_PUBLIC_GTM_ID ?? "",
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  googleAdsId: process.env.NEXT_PUBLIC_GOOGLE_ADS_ID ?? "",
  /** True once at least one vendor ID is configured via environment. */
  get enabled() {
    return Boolean(this.gtmId || this.gaId || this.googleAdsId);
  },
};
