// Mobile menu & Anime.js interactions
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const socials = document.getElementById('socials');
  menuToggle?.addEventListener('click', () => {
    const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!expanded));
    socials.classList.toggle('show');
  });

  // Split hero title into chars for stagger
  const title = document.querySelector('.hero-title');
  if(title){
    const text = title.textContent.trim();
    title.innerHTML = '';
    [...text].forEach(ch => {
      const s = document.createElement('span');
      s.className = 'char';
      s.textContent = ch;
      title.appendChild(s);
    });
  }

  const tl = anime.timeline({ easing: 'easeOutExpo', autoplay: true });
  tl.add({ targets: '.logo-img, .brand-text', translateY: [-12,0], opacity: [0,1], duration: 600 })
    .add({ targets: '.hero-title .char', translateY: [30,0], opacity: [0,1], delay: anime.stagger(8), duration: 650 }, '-=300')
    .add({ targets: '.hero-subtitle', translateY: [20,0], opacity: [0,1], duration: 520 }, '-=400')
    .add({ targets: '.links-grid .link-card', translateY: [20,0], opacity: [0,1], delay: anime.stagger(80), duration: 600 }, '-=300');

  // Hover pulse for Mod's CTA
  document.querySelectorAll('.mods-cta').forEach(btn => {
    btn.addEventListener('mouseenter', () => anime({ targets: btn, scale: 1.03, duration: 220, easing: 'easeOutQuad' }));
    btn.addEventListener('mouseleave', () => anime({ targets: btn, scale: 1, duration: 300, easing: 'easeOutElastic(1, .6)' }));
  });
});