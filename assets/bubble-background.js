/**
 * Bubble Background Component for MkDocs
 * Creates an animated bubble background effect
 */

class BubbleBackground {
  constructor(containerId, options = {}) {
    this.container = document.getElementById(containerId);
    if (!this.container) {
      console.error(`Container with id "${containerId}" not found`);
      return;
    }

    // Default options
    this.options = {
      colors: ["#FFFFFF", "#A700FF", "#00E1A3"],
      bubbleCount: 50,
      baseSpeed: 2,
      maxRadius: 8,
      minRadius: 2,
      opacity: 0.6,
      popChance: 0.3,
      popDelay: { min: 3000, max: 8000 },
      ...options
    };

    this.canvas = null;
    this.ctx = null;
    this.bubbles = [];
    this.animationId = null;
    this.isRunning = false;

    this.init();
  }

  init() {
    this.createCanvas();
    this.setupBubbles();
    this.startAnimation();
    this.setupResizeHandler();
  }

  createCanvas() {
    this.canvas = document.createElement('canvas');
    this.canvas.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      pointer-events: none;
    `;

    this.container.insertBefore(this.canvas, this.container.firstChild);

    this.ctx = this.canvas.getContext('2d');
    this.resizeCanvas();
  }

  resizeCanvas() {
    const rect = this.container.getBoundingClientRect();
    this.canvas.width = rect.width;
    this.canvas.height = rect.height;
  }

  setupBubbles() {
    this.bubbles = [];
    for (let i = 0; i < this.options.bubbleCount; i++) {
      this.bubbles.push(new Bubble(this.canvas, this.options));
    }
  }

  startAnimation() {
    if (this.isRunning) return;
    this.isRunning = true;
    this.animate();
  }

  stopAnimation() {
    this.isRunning = false;
    if (this.animationId) {
      cancelAnimationFrame(this.animationId);
    }
  }

  isDarkMode() {
    return document.body.getAttribute('data-md-color-scheme') === 'slate';
  }

  animate() {
    if (!this.isRunning) return;

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.fillStyle = this.isDarkMode() ? '#191919' : '#ffffff';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);

    this.bubbles.forEach((bubble, index) => {
      if (bubble.update()) {
        bubble.draw(this.ctx);
      } else {
        // Remove dead bubbles and create new ones
        this.bubbles[index] = new Bubble(this.canvas, this.options);
      }
    });

    this.animationId = requestAnimationFrame(() => this.animate());
  }

  setupResizeHandler() {
    this.resizeHandler = () => {
      this.resizeCanvas();
      // Reset bubbles on resize
      this.setupBubbles();
    };
    window.addEventListener('resize', this.resizeHandler);
  }

  destroy() {
    this.stopAnimation();
    if (this.resizeHandler) {
      window.removeEventListener('resize', this.resizeHandler);
    }
    if (this.canvas && this.canvas.parentNode) {
      this.canvas.parentNode.removeChild(this.canvas);
    }
  }
}

class Bubble {
  constructor(canvas, options) {
    this.canvas = canvas;
    this.options = options;
    this.reset();
    this.y = canvas.height + Math.random() * canvas.height;
    this.popping = false;
    this.popProgress = 0;
    this.nextPopTime = Infinity;
    this.hasEnteredScreen = false;
  }

  reset() {
    const BASE_SPEED = this.options.baseSpeed;
    this.x = Math.random() * this.canvas.width;
    this.y = this.canvas.height + 10;
    this.radius = this.options.minRadius + Math.random() * (this.options.maxRadius - this.options.minRadius);
    const speedMultiplier = 10 / this.radius;
    this.speed = BASE_SPEED + Math.random() * BASE_SPEED * speedMultiplier;
    this.wobble = 0;
    this.wobbleSpeed = (0.01 + Math.random() * 0.03) * speedMultiplier;
    this.amplitude = (0.5 + Math.random() * 1) * speedMultiplier;
    this.color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
    this.hasEnteredScreen = false;
    this.nextPopTime = Infinity;
  }

  getNextPopTime() {
    const { min, max } = this.options.popDelay;
    return Date.now() + min + Math.random() * (max - min);
  }

  createMiniBubbles() {
    const numMiniBubbles = Math.round(Math.random() * 10);
    for (let i = 0; i < numMiniBubbles; i++) {
      const miniBubble = new Bubble(this.canvas, this.options);
      const spread = this.radius * 10;
      miniBubble.x = this.x + Math.random() * spread;
      miniBubble.y = this.y + Math.random() * spread;
      miniBubble.color = this.options.colors[Math.floor(Math.random() * this.options.colors.length)];
      miniBubble.speed = this.speed + this.speed * 2 * Math.random();
      miniBubble.amplitude = this.speed + this.amplitude * 2 * Math.random();
      miniBubble.wobbleSpeed = this.wobbleSpeed * Math.random();
      miniBubble.depth = 1; // Mark as mini bubble
    }
  }

  pop() {
    if (!this.popping) {
      this.popping = true;
      this.popProgress = 0;
      this.createMiniBubbles();
      this.nextPopTime = Infinity;
    }
  }

  update() {
    if (!this.hasEnteredScreen && this.y < this.canvas.height - 20) {
      this.hasEnteredScreen = true;
      if (Math.random() < this.options.popChance) {
        this.nextPopTime = this.getNextPopTime();
      }
    }

    if (!this.popping && Date.now() > this.nextPopTime) {
      this.pop();
    }

    if (this.popping) {
      this.popProgress += 0.1;
      if (this.popProgress >= 1) {
        this.reset();
        this.popping = false;
      }
      return true;
    }

    this.y -= this.speed;
    this.wobble += this.wobbleSpeed;
    this.x += Math.sin(this.wobble) * this.amplitude;

    if (this.y < -20) {
      this.reset();
    }
    return true;
  }

  draw(ctx) {
    ctx.beginPath();
    if (this.popping) {
      ctx.globalAlpha = this.options.opacity * (1 - this.popProgress);
      ctx.arc(this.x, this.y, this.radius * (1 + this.popProgress), 0, Math.PI * 2);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 2;
      ctx.stroke();
    } else {
      ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
      ctx.fillStyle = this.color;
      ctx.globalAlpha = this.options.opacity;
      ctx.fill();
    }
  }
}

// Auto-initialize when DOM is ready
document.addEventListener('DOMContentLoaded', function() {
  console.log('Bubble background script loaded');
  
  // Look for a container with id 'bubble-background' or create one
  let container = document.getElementById('bubble-background');
  
  if (!container) {
    container = document.createElement('div');
    container.id = 'bubble-background';
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
    `;
    document.body.insertBefore(container, document.body.firstChild);
  }

  const isDark = document.body.getAttribute('data-md-color-scheme') === 'slate';

  setTimeout(() => {
    try {
      window.bubbleBackground = new BubbleBackground('bubble-background', {
        colors: isDark
          ? ["#FFFFFF", "#A700FF", "#00E1A3"]
          : ["#A700FF", "#00E1A3", "#5B6BF5"],
        bubbleCount: 20,
        baseSpeed: 1.5,
        opacity: isDark ? 0.6 : 0.4,
        popChance: 0.2
      });
    } catch (error) {
      console.error('Error initializing bubble background:', error);
    }
  }, 100);
});

// Export for manual initialization if needed
window.BubbleBackground = BubbleBackground;
