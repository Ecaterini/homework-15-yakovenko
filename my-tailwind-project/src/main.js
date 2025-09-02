import './style.css'

  const btn = document.getElementById('menuBtn');
  const menu = document.getElementById('mobileMenu');

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
  });

  // Esc закрывает меню
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });

  // при переходе на md+ меню закрыть
  matchMedia('(min-width: 768px)').addEventListener("change", e => {
    if (e.matches) {
      menu.classList.add('hidden');
      btn.setAttribute('aria-expanded', 'false');
    }
  });