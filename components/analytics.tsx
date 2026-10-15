/* eslint-disable @next/next/no-before-interactive-script-outside-document --
 * gtag must render in the initial HTML so Google's tag checker detects it. */
import Script from "next/script";

const GOOGLE_ADS_ID = "AW-18505778292";
const GOOGLE_ADS_CALL_CONVERSION = "AW-18505778292/GOk_CPP-k54dEPSIn_hE";

export function Analytics() {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;
  const gaId = process.env.NEXT_PUBLIC_GA_ID;
  const adsId = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID || GOOGLE_ADS_ID;
  const callConversionSendTo =
    process.env.NEXT_PUBLIC_GOOGLE_ADS_CALL_CONVERSION ||
    GOOGLE_ADS_CALL_CONVERSION;
  const gtagIds = [gaId, adsId].filter(Boolean) as string[];

  return (
    <>
      {gtmId && (
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0], j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${gtmId}');`,
          }}
        />
      )}
      {gtagIds.length > 0 && (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${gtagIds[0]}`}
            strategy="beforeInteractive"
          />
          <Script
            id="gtag-config"
            strategy="beforeInteractive"
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); ${gtagIds
                .map((id) => `gtag('config', '${id}');`)
                .join(" ")}`,
            }}
          />
          <Script
            id="gtag-call-conversion"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `document.addEventListener('click', function (e) { var link = e.target && e.target.closest ? e.target.closest('a[href^="tel:"]') : null; if (link && typeof gtag === 'function') { gtag('event', 'conversion', { send_to: '${callConversionSendTo}' }); } });`,
            }}
          />
        </>
      )}
    </>
  );
}
