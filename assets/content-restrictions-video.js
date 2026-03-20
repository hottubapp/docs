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
          '<div class="admonition danger" style="margin-top:1rem;">' +
            '<p class="admonition-title">Important Warning</p>' +
            '<p><strong>Do not set the allowed apps rating to anything below 18+.</strong> ' +
            'Setting the rating below 18+ will remove apps from your home screen and disrupt ' +
            'your device\'s app organization. Always keep the rating at <strong>18+</strong> or <strong>Unrated</strong>.</p>' +
          '</div>' +
        '</div>' +
      '</div>' +

      // ── Right: video ───────────────────────────────────────────────────
      '<div class="cr-video">' +
        '<div class="cr-video__title">Watch: How to change your content rating</div>' +
        '<div class="cr-video__subtitle">Screen Time \u2192 Content &amp; Privacy Restrictions \u2192 Apps \u2192 Unrated</div>' +
        '<div class="cr-video__frame">' +
          '<video controls autoplay muted playsinline preload="auto">' +
            '<source src="https://cdn.hottubapp.io/assets/onboarding/app-content-restrictions.mp4" type="video/mp4">' +
          '</video>' +
        '</div>' +
      '</div>' +

      '</div>' + // end .cr-layout

      '<div class="admonition bug" style="margin-top:1rem;">' +
        '<p class="admonition-title">Known issue (alternative marketplaces only): iOS 26 disappearing apps</p>' +
        '<p>A bug in <strong>iOS 26</strong> causes Unrated apps installed via alternative marketplaces (AltStore PAL, Aptoide) to disappear after every reboot. Workaround: toggle Screen Time \u2192 Apps to <strong>18+</strong>, then back to <strong>Unrated</strong>.</p>' +
        '<blockquote><p><em>"Each restart hides the app. Change to 18+, then back to Unrated \u2014 it shows again."</em></p></blockquote>' +
        '<p>Reported to Apple (<a href="http://www.openradar.me/FB20909073" target="_blank" rel="noopener">FB20909073</a>), AltStore, and the EC DMA team \u2014 unresolved.</p>' +
        '<p style="margin-top:0.75rem;">' +
          '<a href="https://blog.hottubapp.io/2025/05/13/apple-is-blocking-updates-to-hot-tub/" class="md-button md-button--secondary" target="_blank" rel="noopener">Full background</a> ' +
          '<a href="#" class="md-button" id="bcc-all" onclick="sendBccEmail(); return false;" disabled>Email DMA Enforcers</a>' +
        '</p>' +
      '</div>';
  });
}

injectContentRestrictionsVideo();

if (typeof document$ !== 'undefined') {
  document$.subscribe(injectContentRestrictionsVideo);
}
