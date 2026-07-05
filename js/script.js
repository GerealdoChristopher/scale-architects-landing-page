import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initTestimonialCarousel } from './modules/testimonialCarousel.js';

function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');

  if (revealElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  revealElements.forEach(element => observer.observe(element));
}

function initParallax() {
  const parallaxElements = document.querySelectorAll('[data-parallax]');

  if (parallaxElements.length === 0) return;

  window.addEventListener('scroll', () => {
    parallaxElements.forEach(element => {
      const speed = parseFloat(element.getAttribute('data-parallax')) || 0.1;
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      element.style.transform = `translateY(${offset}px)`;
    });
  }, { passive: true });
}

function initCounterAnimation() {
  const counters = document.querySelectorAll('[data-counter]');

  if (counters.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -50px 0px',
    threshold: 0.5
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = parseInt(counter.getAttribute('data-counter')) || 0;
        const duration = parseInt(counter.getAttribute('data-duration')) || 2000;
        const prefix = counter.getAttribute('data-prefix') || '';
        const suffix = counter.getAttribute('data-suffix') || '';
        const startValue = 0;
        const startTime = performance.now();

        function updateCounter(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          const easedProgress = 1 - Math.pow(1 - progress, 3);
          const currentValue = Math.floor(startValue + (target - startValue) * easedProgress);

          counter.textContent = `${prefix}${currentValue}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(updateCounter);
          } else {
            counter.textContent = `${prefix}${target}${suffix}`;
          }
        }

        requestAnimationFrame(updateCounter);
        observer.unobserve(counter);
      }
    });
  }, observerOptions);

  counters.forEach(counter => observer.observe(counter));
}

function initTiltEffect() {
  const tiltElements = document.querySelectorAll('[data-tilt]');

  if (tiltElements.length === 0) return;

  tiltElements.forEach(element => {
    element.addEventListener('mousemove', (e) => {
      if (window.innerWidth <= 968) return;

      const rect = element.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const maxTilt = parseInt(element.getAttribute('data-tilt')) || 10;

      const rotateX = ((y - centerY) / centerY) * -maxTilt;
      const rotateY = ((x - centerX) / centerX) * maxTilt;

      element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    });

    element.addEventListener('mouseleave', () => {
      element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      element.style.transition = 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)';
      setTimeout(() => {
        element.style.transition = '';
      }, 600);
    });
  });
}

function initParticleBackground() {
  const canvas = document.querySelector('.particle-canvas');

  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let particles = [];
  let animationId = null;

  function resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  class Particle {
    constructor() {
      this.reset();
    }

    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.3;
      this.speedY = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.3 + 0.05;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < -10) this.x = canvas.width + 10;
      if (this.x > canvas.width + 10) this.x = -10;
      if (this.y < -10) this.y = canvas.height + 10;
      if (this.y > canvas.height + 10) this.y = -10;
    }

    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(212, 168, 83, ${this.opacity})`;
      ctx.fill();
    }
  }

  function initParticles() {
    const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 80);
    particles = [];
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }
  }

  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    particles.forEach(particle => {
      particle.update();
      particle.draw();
    });

    particles.forEach((p1, i) => {
      particles.slice(i + 1).forEach(p2 => {
        const dx = p1.x - p2.x;
        const dy = p1.y - p2.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 120) {
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.strokeStyle = `rgba(212, 168, 83, ${0.06 * (1 - distance / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    });

    animationId = requestAnimationFrame(animate);
  }

  function handleResize() {
    resize();
    initParticles();
  }

  window.addEventListener('resize', handleResize);
  resize();
  initParticles();
  animate();

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      if (animationId) {
        cancelAnimationFrame(animationId);
        animationId = null;
      }
    } else {
      if (!animationId) {
        animate();
      }
    }
  });
}

function initPageLoader() {
  const loader = document.querySelector('.page-loader');

  if (!loader) return;

  window.addEventListener('load', () => {
    setTimeout(() => {
      loader.style.opacity = '0';
      loader.style.transition = 'opacity 0.5s ease';
      setTimeout(() => {
        loader.style.display = 'none';
      }, 500);
    }, 300);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSmoothScroll();
  initTestimonialCarousel();
  initScrollReveal();
  initParallax();
  initCounterAnimation();
  initTiltEffect();
  initParticleBackground();
  initPageLoader();
});