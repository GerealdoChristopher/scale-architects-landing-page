export function initSmoothScroll() {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');

      if (targetId === '#') return;

      const target = document.querySelector(targetId);

      if (!target) return;

      e.preventDefault();

      const header = document.querySelector('.header');
      const headerHeight = header ? header.offsetHeight : 0;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = targetPosition - headerHeight - 32;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      history.pushState(null, '', targetId);

      if (target.getAttribute('id')) {
        target.style.transition = 'box-shadow 0.6s ease';
        target.style.boxShadow = '0 0 0 4px rgba(212, 168, 83, 0.3)';
        setTimeout(() => {
          target.style.boxShadow = '';
          setTimeout(() => {
            target.style.transition = '';
          }, 600);
        }, 800);
      }
    });
  });

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__nav a[href^="#"]');
  const ctaLinks = document.querySelectorAll('.btn[href^="#"], a[href^="#contact"], a[href^="#offer"]');

  if (sections.length > 0 && navLinks.length > 0) {
    const observerOptions = {
      root: null,
      rootMargin: '-100px 0px -55% 0px',
      threshold: 0
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach(link => {
            link.classList.remove('active');
            link.style.borderBottomColor = 'transparent';
            link.style.color = '';
            if (link.getAttribute('href') === `#${id}`) {
              link.classList.add('active');
              link.style.borderBottomColor = 'var(--clr-accent-300)';
              link.style.color = 'var(--clr-primary-800)';
            }
          });
        }
      });
    }, observerOptions);

    sections.forEach(section => observer.observe(section));
  }

  if (document.querySelector('.footer__scroll-top')) {
    const scrollTopBtn = document.querySelector('.footer__scroll-top');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 600) {
        scrollTopBtn.classList.add('visible');
      } else {
        scrollTopBtn.classList.remove('visible');
      }
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  ctaLinks.forEach(link => {
    if (!link.hasAttribute('data-scroll-initialized')) {
      link.setAttribute('data-scroll-initialized', 'true');
      link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (!target) return;

        e.preventDefault();

        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 32;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });

        history.pushState(null, '', targetId);
      });
    }
  });

  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        const header = document.querySelector('.header');
        const headerHeight = header ? header.offsetHeight : 0;
        const targetPosition = target.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = targetPosition - headerHeight - 32;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }, 300);
  }
}