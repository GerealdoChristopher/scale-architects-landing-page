export function initTestimonialCarousel() {
  const grid = document.querySelector('.testimonials__grid');

  if (!grid) return;

  const cards = grid.querySelectorAll('.testimonial-card');

  if (cards.length === 0) return;

  const isMobile = () => window.innerWidth <= 640;
  const isTablet = () => window.innerWidth <= 968 && window.innerWidth > 640;

  let currentIndex = 0;
  let interval = null;
  let isTransitioning = false;
  let touchStartX = 0;
  let touchEndX = 0;
  let autoplayPaused = false;

  function showCard(index) {
    if (isTransitioning) return;
    isTransitioning = true;

    cards.forEach(card => {
      card.style.opacity = '0';
      card.style.transform = 'scale(0.95)';
      card.style.transition = 'opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1), transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
    });

    setTimeout(() => {
      cards.forEach(card => {
        card.style.display = 'none';
      });

      if (isMobile()) {
        cards[index].style.display = 'block';
      } else if (isTablet()) {
        const start = Math.min(index, cards.length - 2);
        cards[start].style.display = 'block';
        if (cards[start + 1]) cards[start + 1].style.display = 'block';
      }

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const visibleCards = Array.from(cards).filter(c => c.style.display === 'block');
          visibleCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          });
          isTransitioning = false;
        });
      });
    }, 200);

    updateDots();
  }

  function nextCard() {
    if (!isMobile() || autoplayPaused || isTransitioning) return;
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function prevCard() {
    if (!isMobile() || isTransitioning) return;
    currentIndex = (currentIndex - 1 + cards.length) % cards.length;
    showCard(currentIndex);
  }

  function startCarousel() {
    stopCarousel();
    if (isMobile()) {
      currentIndex = 0;
      showCard(currentIndex);
      interval = setInterval(nextCard, 5000);
    } else if (isTablet()) {
      currentIndex = 0;
      showCard(currentIndex);
    } else {
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      });
      currentIndex = 0;
    }
  }

  function stopCarousel() {
    if (interval) {
      clearInterval(interval);
      interval = null;
    }
  }

  function resetCards() {
    cards.forEach(card => {
      card.style.display = 'block';
      card.style.opacity = '1';
      card.style.transform = 'scale(1)';
      card.style.transition = '';
    });
    isTransitioning = false;
  }

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonials__dots';
  dotsContainer.style.cssText = `
    display: none;
    justify-content: center;
    align-items: center;
    gap: 8px;
    margin-top: 24px;
  `;

  cards.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'testimonials__dot';
    dot.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
    dot.style.cssText = `
      width: 10px;
      height: 10px;
      border-radius: 9999px;
      background-color: var(--clr-neutral-300);
      border: none;
      cursor: pointer;
      padding: 0;
      transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    `;
    dot.addEventListener('click', () => {
      currentIndex = i;
      showCard(currentIndex);
      stopCarousel();
      autoplayPaused = true;
      interval = setInterval(nextCard, 5000);
      setTimeout(() => { autoplayPaused = false; }, 5000);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });

  grid.parentNode.appendChild(dotsContainer);

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, i) => {
      dot.classList.remove('active');
      if (i === currentIndex) {
        dot.classList.add('active');
      }
    });
  }

  grid.addEventListener('touchstart', (e) => {
    if (!isMobile()) return;
    touchStartX = e.touches[0].clientX;
    stopCarousel();
    autoplayPaused = true;
  }, { passive: true });

  grid.addEventListener('touchend', (e) => {
    if (!isMobile()) return;
    touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        nextCard();
      } else {
        prevCard();
      }
    }

    autoplayPaused = false;
    stopCarousel();
    interval = setInterval(nextCard, 5000);
  });

  grid.addEventListener('mouseenter', () => {
    stopCarousel();
    autoplayPaused = true;
  });

  grid.addEventListener('mouseleave', () => {
    autoplayPaused = false;
    if (isMobile()) {
      stopCarousel();
      interval = setInterval(nextCard, 5000);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCarousel();
    } else if (isMobile() && !autoplayPaused) {
      stopCarousel();
      interval = setInterval(nextCard, 5000);
    }
  });

  let resizeTimeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      const dots = dotsContainer;
      if (isMobile()) {
        dots.style.display = 'flex';
        startCarousel();
      } else if (isTablet()) {
        dots.style.display = 'none';
        stopCarousel();
        resetCards();
        startCarousel();
      } else {
        dots.style.display = 'none';
        stopCarousel();
        resetCards();
      }
    }, 250);
  });

  function init() {
    if (isMobile()) {
      dotsContainer.style.display = 'flex';
      startCarousel();
    } else if (isTablet()) {
      dotsContainer.style.display = 'none';
      stopCarousel();
      resetCards();
      startCarousel();
    } else {
      dotsContainer.style.display = 'none';
      resetCards();
    }
  }

  init();

  const observer = new MutationObserver(() => {
    const currentCards = grid.querySelectorAll('.testimonial-card');
    if (currentCards.length !== cards.length) {
      init();
    }
  });

  observer.observe(grid, { childList: true });
}