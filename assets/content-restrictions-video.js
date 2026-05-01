function injectContentRestrictionsVideo() {
  document.querySelectorAll('.content-restrictions-embed:not([data-injected])').forEach(function (el) {
    el.setAttribute('data-injected', 'true');
    el.className = 'content-restrictions-embed';

    el.innerHTML =
      // ── Two-column row ────────────────────────────────────────────────
      '<div class="cr-layout">' +

      // ── Left: warning box ─────────────────────────────────────────────
      '<div class="cr-info">' +
        '<div class="admonition warning">' +
          '<p class="admonition-title">If the app won\'t open or install</p>' +
          '<p>Your device might be blocking the app due to Apple\'s content restrictions. Here\'s how to fix it:</p>' +
          '<ol>' +
            '<li>Open the <strong>Settings</strong> app</li>' +
            '<li>Go to <strong>Screen Time</strong> \u2192 <strong>Content &amp; Privacy Restrictions</strong></li>' +
            '<li>Turn <strong>Content &amp; Privacy Restrictions</strong> ON (if it\'s off)</li>' +
            '<li>Tap <strong>App Store, Media, Web &amp; Games</strong> \u2192 <strong>Apps</strong></li>' +
            '<li>Change the rating to <strong>Unrated</strong></li>' +
            '<li>Then try opening or installing Hot Tub again \u2014 it should work</li>' +
          '</ol>' +
          '<div style="margin-top:0.9rem;">' +
            '<a href="https://www.icloud.com/shortcuts/26dfff16f9b342eaa492412df36daf97" class="cr-shortcut-link" target="_blank" rel="noopener" style="display:block; text-decoration:none;">' +
              '<div style="background:#4f8dff; border-radius:24px; padding:0.8rem 0.9rem 0.95rem; color:#fff; max-width:250px; min-height:125px;">' +
                '<div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:0.45rem;">' +
                  '<img src="https://api.iconify.design/material-symbols/settings-rounded.svg?color=%23ffffff" alt="" width="30" height="30" style="display:block;" aria-hidden="true" />' +
                  '<div style="width:30px; height:30px; border-radius:50%; background:rgba(255,255,255,0.16); color:#fff; display:flex; align-items:center; justify-content:center; font-size:18px; line-height:1;">&bull;&bull;&bull;</div>' +
                '</div>' +
                '<div style="font-size:1rem; line-height:1.15; font-weight:800;">Open Content<br/>Restrictions</div>' +
                '<div style="margin-top:0.42rem; font-size:0.65rem; opacity:0.95;">Open shortcut</div>' +
              '</div>' +
            '</a>' +
          '</div>' +
          '<div style="margin-top:1rem; font-style: italic; font-size: 0.9em;">' +
            '<p>Setting the rating below 18+ will remove apps from your home screen and disrupt ' +
            'your device\'s app organization. Always keep the rating at <strong>18+</strong> or <strong>Unrated</strong>.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      // ── Right: video ───────────────────────────────────────────────────
      '<div class="cr-video">' +
        '<div class="cr-video__title">Watch: How to change your content rating</div>' +
        '<div class="cr-video__subtitle">Screen Time \u2192 Content &amp; Privacy Restrictions \u2192 Apps \u2192 Unrated</div>' +
        '<div class="cr-video__frame">' +
          '<video autoplay muted playsinline preload="auto" loop>' +
            '<source src="https://cdn.hottubapp.io/assets/onboarding/app-content-restrictions.mp4" type="video/mp4">' +
          '</video>' +
        '</div>' +
      '</div>' +

      '</div>' + // end .cr-layout

      '<div class="admonition bug" style="margin-top:1rem;">' +
        '<p class="admonition-title">Known issue (alternative marketplaces only): iOS 26 disappearing apps</p>' +
        '<p>A bug in <strong>iOS 26</strong> causes Unrated apps installed via alternative marketplaces (AltStore PAL, Aptoide) to break after every reboot. Workaround: toggle Screen Time \u2192 Apps to <strong>18+</strong>, then back to <strong>Unrated</strong>.</p>' +
        '<blockquote><p><em>"Each restart hides the app. Change to 18+, then back to Unrated \u2014 it shows again."</em></p></blockquote>' +
        '<p>Reported to Apple (<a href="http://www.openradar.me/FB20909073" target="_blank" rel="noopener">FB20909073</a>), AltStore, and the EC DMA team \u2014 unresolved.</p>' +
        '<p style="margin-top:0.75rem;">' +
          '<a href="https://blog.hottubapp.io/2025/05/13/apple-is-blocking-updates-to-hot-tub/" class="md-button md-button--secondary" target="_blank" rel="noopener">Full background</a> ' +
          '<a href="#" class="md-button" id="bcc-all" onclick="sendBccEmail(); return false;" disabled>Email DMA Enforcers</a>' +
        '</p>' +
      '</div>';

    var shortcutLink = el.querySelector('.cr-shortcut-link');
    if (shortcutLink && !shortcutLink.dataset.gaShortcutBound) {
      shortcutLink.dataset.gaShortcutBound = 'true';
      shortcutLink.addEventListener('click', function () {
        if (window.gtag) {
          window.gtag('event', 'content_restrictions_shortcut_click', {
            link_url: shortcutLink.href,
            link_domain: 'icloud.com'
          });
        }
      });
    }
  });
}

injectContentRestrictionsVideo();

if (typeof document$ !== 'undefined') {
  document$.subscribe(injectContentRestrictionsVideo);
}
