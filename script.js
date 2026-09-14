// CEMEC site — small, dependency-free interactions

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile nav toggle
const header = document.querySelector('.site-header');
const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('nav-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav after choosing a link
document.querySelectorAll('.main-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// Contact form — this site has no backend wired up yet.
// Swap this handler for a real endpoint (e.g. Formspree, a serverless
// function, or your own API route) before going live.
const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  note.textContent = 'Formulário pronto — falta conectar a um serviço de envio (ex.: Formspree ou uma API própria) para as mensagens chegarem de fato.';
});
