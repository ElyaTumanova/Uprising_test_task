const header = document.querySelector('.header');

  const DARK  = 'header_dark-back';
  const LIGHT = 'header_light-back';

  function applyOnScrollStart() {
    const isScrolled = window.scrollY > 10; 
    header.classList.toggle(LIGHT, isScrolled);
    header.classList.toggle(DARK,  !isScrolled);
  }

  applyOnScrollStart();
  window.addEventListener('scroll', applyOnScrollStart, { passive: true });
  window.addEventListener('resize', applyOnScrollStart);