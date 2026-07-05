export function initNavigation() {
  const header = document.querySelector('.header');
  const mobileToggle = document.querySelector('.header__mobile-toggle');
  const nav = document.querySelector('.header__nav');
  const navLinks = document.querySelectorAll('.header__nav a');

  if (!header || !mobileToggle || !nav) return;

  let lastScrollY = window.scrollY;
  let scrollTimeout = null;

  const progressBar = document.createElement('div');
  progressBar.className = 'header__progress-bar';
  header.appendChild(progressBar);

  const overlay = document.createElement('div');
  overlay.className = 'header__nav-overlay';
  document.body.appendChild(overlay);

  window.addEventListener('scroll', () => {
    clearTimeout(scrollTimeout);

    const scrollY = window.scrollY;

    if (scrollY > 20) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    if (scrollY > lastScrollY && scrollY > 300 && !nav.classList.contains('active')) {
      header.style.transform = 'translateY(-100%)';
    } else {
      header.style.transform = 'translateY(0)';
    }

    lastScrollY = scrollY;

    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollProgress = (scrollY / scrollHeight) * 100;
    progressBar.style.width = `${Math.min(scrollProgress, 100)}%`;

    scrollTimeout = setTimeout(() => {
      header.style.transform = 'translateY(0)';
    }, 2500);
  }, { passive: true });

  mobileToggle.addEventListener('click', () => {
    const isActive = nav.classList.contains('active');
    if (isActive) {
      closeMenu();
    } else {
      openMenu();
    }
  });

  overlay.addEventListener('click', () => {
    if (nav.classList.contains('active')) {
      closeMenu();
    }
  });

  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (nav.classList.contains('active')) {
        closeMenu();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && nav.classList.contains('active')) {
      closeMenu();
    }
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinkItems = document.querySelectorAll('.header__nav a[href^="#"]');

  if (sections.length && navLinkItems.length) {
    const observerOptions = {
      root: null,
      rootMargin: '-80px 0px -60% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinkItems.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  function openMenu() {
    nav.classList.add('active');
    overlay.classList.add('active');
    mobileToggle.classList.add('active');
    mobileToggle.setAttribute('aria-label', 'Close menu');
    mobileToggle.textContent = '✕';
    document.body.style.overflow = 'hidden';
    header.style.transform = 'translateY(0)';
  }

  function closeMenu() {
    nav.classList.remove('active');
    overlay.classList.remove('active');
    mobileToggle.classList.remove('active');
    mobileToggle.setAttribute('aria-label', 'Open menu');
    mobileToggle.textContent = '☰';
    document.body.style.overflow = '';
  }

  document.addEventListener('touchstart', (e) => {
    if (nav.classList.contains('active') && !nav.contains(e.target) && !mobileToggle.contains(e.target)) {
      closeMenu();
    }
  }, { passive: true });

  let touchStartX = 0;
  let touchStartY = 0;

  document.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  document.addEventListener('touchend', (e) => {
    if (!nav.classList.contains('active')) return;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchEndX - touchStartX;
    const diffY = touchEndY - touchStartY;

    if (Math.abs(diffX) > Math.abs(diffY) && diffX > 50) {
      closeMenu();
    }
  });
}