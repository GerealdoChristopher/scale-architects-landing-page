export function initTestimonialCarousel() {
  const grid = document.querySelector('.testimonials__grid');

  if (!grid) return;

  const cards = grid.querySelectorAll('.testimonial-card');

  if (cards.length <= 3) return;

  const isMobile = () => window.innerWidth <= 640;

  let currentIndex = 0;
  let interval = null;

  function showCard(index) {
    cards.forEach(card => {
      card.style.display = 'none';
      card.style.opacity = '0';
      card.style.transition = 'opacity 0.4s ease';
    });

    if (isMobile()) {
      cards[index].style.display = 'block';
      requestAnimationFrame(() => {
        cards[index].style.opacity = '1';
      });
    } else {
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
      });
    }
  }

  function nextCard() {
    if (!isMobile()) return;
    currentIndex = (currentIndex + 1) % cards.length;
    showCard(currentIndex);
  }

  function startCarousel() {
    stopCarousel();
    if (isMobile()) {
      showCard(0);
      interval = setInterval(nextCard, 4000);
    } else {
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
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

  const dotsContainer = document.createElement('div');
  dotsContainer.className = 'testimonials__dots';
  dotsContainer.style.cssText = `
    display: none;
    justify-content: center;
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
      border-radius: 50%;
      background-color: var(--clr-neutral-300);
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease;
    `;
    dot.addEventListener('click', () => {
      currentIndex = i;
      showCard(currentIndex);
      stopCarousel();
      interval = setInterval(nextCard, 4000);
      updateDots();
    });
    dotsContainer.appendChild(dot);
  });

  grid.parentNode.appendChild(dotsContainer);

  function updateDots() {
    const dots = dotsContainer.querySelectorAll('.testimonials__dot');
    dots.forEach((dot, i) => {
      dot.style.backgroundColor = i === currentIndex
        ? 'var(--clr-accent-400)'
        : 'var(--clr-neutral-300)';
    });
  }

  function handleResize() {
    const dots = dotsContainer;
    if (isMobile()) {
      dots.style.display = 'flex';
      showCard(currentIndex);
      updateDots();
      if (!interval) {
        interval = setInterval(nextCard, 4000);
      }
    } else {
      dots.style.display = 'none';
      stopCarousel();
      cards.forEach(card => {
        card.style.display = 'block';
        card.style.opacity = '1';
      });
    }
  }

  window.addEventListener('resize', handleResize);
  handleResize();

  grid.addEventListener('mouseenter', stopCarousel);
  grid.addEventListener('mouseleave', () => {
    if (isMobile()) {
      interval = setInterval(nextCard, 4000);
    }
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopCarousel();
    } else if (isMobile()) {
      interval = setInterval(nextCard, 4000);
    }
  });
}