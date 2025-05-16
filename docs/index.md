---
title: Hot Tub
# hero:
#   - assets/hero.jpg

# hide:
#   - toc
#   - navigation

# template: home.html
---

# **Hot Tub**

## 📹 Video Player

<style>
  .two-column-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 0rem;
  }
  
  .phone-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
  }
  
  .text-container {
    width: 100%;
  }
  
  /* Desktop layout */
  @media (min-width: 768px) {
    .two-column-container {
      flex-direction: row;
      align-items: center;
    }
    
    .phone-container {
      margin: 0;
      order: 2;
      /* background: red; */
      overflow: visible;
      max-width: 30%;
      max-height: 200px;
      /* margin-top: -10%; */
    }
    
    .text-container {
      width: 60%;
      padding-right: 2rem;
      order: -1;
    }

    #demo-3d {
      overflow: visible;
      /* background: orange; */
      width: 100%;
      margin-left: 20%;
      min-width: 600px;
      min-height: 800px;
      /* height: 100dvw; */

    }
  }

@media (max-width: 768px) {
  .phone-container {
    min-width: 100%;
    height: 50dvh;
    padding: 0;
    margin: 0;
    overflow: visible;  /* Keep overflow visible on mobile */
  }

  #demo-3d {
    /* transform: scale(1.3); */
    height: 80dvh;
  }
}

#demo-3d {
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;
  transform-origin: center center;
  /* margin-right: 15%; */
}

</style>

<!-- Content structure -->
<div class="two-column-container">
  <div class="phone-container">
    <div id="demo-3d" ></div>
  </div>
  <div class="text-container">
    <p>Hot Tub is a video player app, initially designed for the playback of adult content. Its API has been opened up for extensibility, allowing anyone to create, host, or deploy their own server, providing videos for playback within the app. This flexibility enables developers to integrate their own video sources and customize the user experience, making Hot Tub a versatile platform for video consumption.</p>
  </div>
</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    if (window.Demo3D) {
      Demo3D.render('#demo-3d');
    }
  });
</script>

### ✨ Key Features

<div class="feature-grid">
  <div class="feature-card">
    <div class="feature-icon">📱</div>
    <div class="feature-title">iOS native</div>
    <div class="feature-description">The first porn app on iOS</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">👤</div>
    <div class="feature-title">No account needed</div>
    <div class="feature-description">Just install and start watching</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🎬</div>
    <div class="feature-title">Video queue</div>
    <div class="feature-description">Create playlists of your favorites</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">❤️</div>
    <div class="feature-title">Favorites</div>
    <div class="feature-description">Save videos you love</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">📺</div>
    <div class="feature-title">Watch history</div>
    <div class="feature-description">Track what you've watched</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔐</div>
    <div class="feature-title">Private & secure</div>
    <div class="feature-description">Your data stays on your device</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔎</div>
    <div class="feature-title">Advanced search</div>
    <div class="feature-description">Find exactly what you want</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌐</div>
    <div class="feature-title">Multi-network</div>
    <div class="feature-description">Access multiple video sources</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🚫</div>
    <div class="feature-title">Ad-free</div>
    <div class="feature-description">No interruptions or popups</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🌈</div>
    <div class="feature-title">LGBTQ+ Friendly</div>
    <div class="feature-description">Inclusive content preferences</div>
  </div>
  
  <div class="feature-card">
    <div class="feature-icon">🔌</div>
    <div class="feature-title">Open API</div>
    <div class="feature-description">Create and host your own sources</div>
  </div>
</div>

---

<div class="grid cards" markdown>

- [:fontawesome-solid-download: **Install Hot Tub**<br>
  Follow the instructions to install Hot Tub on your device.](install.md)

- [:fontawesome-solid-server: **Deploy a Server**<br>
  Learn how to deploy your own server for Hot Tub.](developers/server.md)

- [:fontawesome-solid-question: **FAQ / Troubleshooting**<br>
  Find answers to common questions and troubleshooting tips.](faq.md)

</div>

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.feature-card');
    
    // Add shimmer overlay to each card
    cards.forEach(card => {
      const shimmerOverlay = document.createElement('div');
      shimmerOverlay.className = 'shimmer-overlay';
      card.appendChild(shimmerOverlay);
      
      // Track if mouse is over the card
      let isMouseOver = false;
      
      // Add smooth transition on mouse enter
      card.addEventListener('mouseenter', function(e) {
        isMouseOver = true;
        
        // Keep the transition for the initial movement
        this.style.transition = 'transform 0.3s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
        
        // Calculate initial rotation based on entry point
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation (from -10 to 10 degrees) - ATTRACTING to mouse
        const rotateY = -((x / rect.width) - 0.5) * 20; // Inverted for attraction
        const rotateX = ((y / rect.height) - 0.5) * 20; // No negative multiplier
        
        // Apply the initial rotation with transition
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // After the initial transition, remove it for responsive movement
        setTimeout(() => {
          if (isMouseOver) {
            this.style.transition = 'box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
          }
        }, 300);
      });
      
      // 3D rotation effect - follows mouse
      card.addEventListener('mousemove', function(e) {
        // Only respond to mousemove after the initial transition
        if (!isMouseOver) return;
        
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        // Calculate rotation - ATTRACTING to mouse
        const rotateY = -((x / rect.width) - 0.5) * 20; // Inverted for attraction
        const rotateX = ((y / rect.height) - 0.5) * 20; // No negative multiplier
        
        // Apply rotation
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        
        // Keep shimmer overlay flat
        const overlay = this.querySelector('.shimmer-overlay');
        if (overlay) {
          overlay.style.transform = 'translateZ(0.01px)';
        }
      });
      
      // Reset on mouse leave with smooth transition
      card.addEventListener('mouseleave', function() {
        isMouseOver = false;
        this.style.transition = 'transform 0.5s ease-out, box-shadow 0.3s ease, background-color 0.3s ease, border-color 0.3s ease';
        this.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        
        const overlay = this.querySelector('.shimmer-overlay');
        if (overlay) {
          overlay.style.transform = '';
        }
      });
    });
  });
</script>
