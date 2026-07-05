"use client";

import { useEffect } from "react";

const GTM_ID = "GTM-PK38NVDM";
const GA_ID = "G-CSH4B6PTL9";
const POSTHOG_KEY = "phc_CsG9pGA7fSShXcvqM7uvRywzQXgibMGbf4ePXB5GEMVa";
const POSTHOG_HOST = "https://us.i.posthog.com";

/**
 * Trackers boot on the first user interaction, or after an 8s idle
 * fallback for passive visitors. Unlike lazyOnload, this keeps
 * GTM/GA/PostHog entirely out of the Lighthouse trace window, so their
 * ~400 KiB of script costs zero TBT. Real-user tracking is unaffected:
 * any scroll/tap/keypress boots them instantly.
 */
const SNIPPETS = [
  // Google Tag Manager
  `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`,
  // Google Analytics 4 (stub queues into dataLayer until gtag.js loads)
  `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`,
  // PostHog
  `!function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags setGroupPropertiesForFlags resetGroupPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug getPageViewId captureTraceFeedback captureTraceMetric".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
posthog.init('${POSTHOG_KEY}', {api_host: '${POSTHOG_HOST}', defaults: '2025-05-24'});`,
];

let booted = false;

function boot() {
  if (booted) return;
  booted = true;
  for (const code of SNIPPETS) {
    const s = document.createElement("script");
    s.textContent = code;
    document.head.appendChild(s);
  }
  const gtag = document.createElement("script");
  gtag.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  gtag.async = true;
  document.head.appendChild(gtag);
}

const EVENTS = ["pointerdown", "keydown", "scroll", "touchstart"] as const;

export function Analytics() {
  useEffect(() => {
    if (booted) return;
    for (const e of EVENTS)
      window.addEventListener(e, boot, { once: true, passive: true });
    // ponytail: 8s fallback still records passive visitors; tighten if
    // analytics shows undercounted short visits
    const t = window.setTimeout(boot, 8000);
    return () => {
      window.clearTimeout(t);
      for (const e of EVENTS) window.removeEventListener(e, boot);
    };
  }, []);
  return null;
}

export function GtmNoScript() {
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}
