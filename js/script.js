import { initNavigation } from './modules/navigation.js';
import { initSmoothScroll } from './modules/smoothScroll.js';
import { initTestimonialCarousel } from './modules/testimonialCarousel.js';

document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initSmoothScroll();
  initTestimonialCarousel();
});