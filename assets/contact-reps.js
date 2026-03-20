/**
 * Contact EU regulators – shared between blog and docs.
 * Source of truth: sites/shared/contact-reps/
 * Data: fetch from /data/representatives.json (each site serves its own copy).
 */
(function () {
  var dataUrl = "/data/representatives.json";

  fetch(dataUrl)
    .then(function (res) { return res.json(); })
    .then(function (reps) {
      var select = document.getElementById("rep");
      if (select) {
        reps.forEach(function (rep) {
          var option = document.createElement("option");
          option.value = rep.email;
          option.textContent = rep.name + " (" + rep.group + ")";
          select.appendChild(option);
        });
      }
      window.dmaBccList = reps.map(function (r) { return r.email; }).join(",");

      var btn = document.getElementById("bcc-all");
      if (btn) {
        btn.removeAttribute("disabled");
      }
    });

  var closings = [
    "Kind regards", "Respectfully", "Sincerely", "Warm regards",
    "With appreciation", "Thank you for your attention", "With urgency"
  ];
  var identities = [
    "A concerned Hot Tub user",
    "An individual affected by Apple's restrictions",
    "A supporter of open app distribution",
    "An advocate for DMA enforcement",
    "A user impacted by Apple's gatekeeping",
    "A citizen standing up for digital rights",
    "A supporter of fair competition",
    "A citizen in favor of competition fairness",
    "A believer in platform neutrality",
    "A supporter of user choice in app ecosystems",
    "A concerned advocate for lawful access",
    "A user facing unnecessary barriers",
    "An individual resisting corporate censorship",
    "A voice for fair access in the digital market",
    "A citizen pushing back against platform abuse"
  ];

  window.sendBccEmail = function () {
    var closing = closings[Math.floor(Math.random() * closings.length)];
    var identity = identities[Math.floor(Math.random() * identities.length)];
    var signOff = closing + ",\n" + identity;
    var subject = encodeURIComponent("Apple's DMA Violations: Ongoing barriers to third-party app distribution (Hot Tub, DMA.100187)");
    var body = encodeURIComponent(
      "Dear Sir or Madam,\n\n" +
      "I am writing regarding ongoing issues with Apple's treatment of Hot Tub – Video Player, a lawful app distributed through EU-approved alternative marketplaces (AltStore PAL, Aptoide).\n\n" +
      "Apple requires Hot Tub to carry an \"Unrated\" content classification rather than the standard 18+ rating. Unlike 18+, Unrated is disabled on iOS devices by default — users must manually navigate Apple's Screen Time parental controls before the app is visible or installable. This creates an artificial installation barrier that does not apply to App Store apps with equivalent content ratings.\n\n" +
      "Following months of blocked updates, the developer complied and relabelled the app Unrated in October 2025. Shortly after, iOS 26.1 RC introduced a bug causing Unrated apps installed via third-party marketplaces to disappear after every device reboot — silently hiding themselves with no warning. The issue is reproducible and systematic. Apple has been notified (FB20909073) but has not acknowledged or resolved it.\n\n" +
      "The result: EU users who legally installed the app through an Apple-approved marketplace are unable to reliably access it. The behavior affects only Unrated apps distributed outside the App Store, and is consistent with a pattern of technical measures that disadvantage alternative marketplace distribution in breach of Article 6(4) of the Digital Markets Act.\n\n" +
      "Full background and timeline: https://blog.hottubapp.io/2025/05/13/apple-is-blocking-updates-to-hot-tub/\n" +
      "Case reference: DMA.100187\n\n" +
      "I respectfully request that your office consider these developments in the context of ongoing DMA enforcement and compliance monitoring.\n\n" +
      signOff
    );

    var select = document.getElementById("rep");
    var selectedEmail = select && select.value;

    var cc = encodeURIComponent("support@hottubapp.io");

    if (selectedEmail) {
      if (window.gtag) {
        window.gtag("event", "contact_rep_email", { rep_email: selectedEmail });
      }
      window.location.href = "mailto:" + selectedEmail + "?cc=" + cc + "&subject=" + subject + "&body=" + body;
    } else if (window.dmaBccList) {
      if (window.gtag) {
        window.gtag("event", "contact_rep_mass_email", { recipient_count: window.dmaBccList.split(",").length });
      }
      window.location.href = "mailto:?bcc=" + window.dmaBccList + "&subject=" + subject + "&body=" + body;
    } else {
      alert("Contact list not yet loaded. Please try again shortly.");
    }
  };
})();
