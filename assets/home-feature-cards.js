(function () {
  function initFeatureCards() {
    document.querySelectorAll('.feature-card:not([data-card-inited])').forEach(function (card) {
      card.setAttribute('data-card-inited', 'true');
      var shimmer = document.createElement('div');
      shimmer.className = 'shimmer-overlay';
      card.appendChild(shimmer);
      var isMouseOver = false;
      card.addEventListener('mouseenter', function (e) {
        isMouseOver = true;
        this.style.transition = 'transform 0.15s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
        var rect = this.getBoundingClientRect();
        var rotateY = -((e.clientX - rect.left) / rect.width - 0.5) * 20;
        var rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
      });
      card.addEventListener('mousemove', function (e) {
        if (!isMouseOver) return;
        var rect = this.getBoundingClientRect();
        var rotateY = -((e.clientX - rect.left) / rect.width - 0.5) * 20;
        var rotateX = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        this.style.transform = 'perspective(1000px) rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg)';
        var overlay = this.querySelector('.shimmer-overlay');
        if (overlay) overlay.style.transform = 'translateZ(0.01px)';
      });
      card.addEventListener('mouseleave', function () {
        isMouseOver = false;
        this.style.transition = 'transform 0.4s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        var overlay = this.querySelector('.shimmer-overlay');
        if (overlay) overlay.style.transform = '';
      });
    });
  }

  initFeatureCards();
  setTimeout(initFeatureCards, 100);
  setTimeout(initFeatureCards, 500);

  if (typeof document$ !== 'undefined') {
    document$.subscribe(initFeatureCards);
  }

  var observer = new MutationObserver(function () {
    initFeatureCards();
  });
  var main = document.querySelector('.md-main') || document.querySelector('main') || document.body;
  if (main) {
    observer.observe(main, { childList: true, subtree: true });
  }
})();
