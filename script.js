/* ============================================================
   Ajay Thakur — Portfolio JavaScript
   ============================================================ */

// ── SMOOTH SCROLL TO SECTION ──
function scrollToSection(id) {
  const el  = document.getElementById(id);
  if (!el) return;
  const nav  = document.getElementById('navbar');
  const navH = nav ? nav.offsetHeight : 64;
  const top  = el.getBoundingClientRect().top + window.pageYOffset - navH - 8;
  window.scrollTo({ top, behavior: 'smooth' });
  setActiveNav(id);
}

// ── ACTIVE NAV HIGHLIGHT ──
function setActiveNav(id) {
  document.querySelectorAll('.nav-links button').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.section === id);
  });
}

// ── HAMBURGER MENU ──
function toggleMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
  document.getElementById('hamburger').classList.toggle('open');
}
function closeMenu() {
  document.getElementById('mobileMenu').classList.remove('open');
  document.getElementById('hamburger').classList.remove('open');
}

// ── SCROLL SPY ──
const SECTIONS = ['hero','about','skills','experience','projects','why','certifications','contact'];

window.addEventListener('scroll', () => {
  const nav  = document.getElementById('navbar');
  const navH = nav ? nav.offsetHeight : 64;
  let current = 'hero';
  SECTIONS.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.getBoundingClientRect().top <= navH + 60) current = id;
  });
  setActiveNav(current);
}, { passive: true });

// ── ANIMATE ON SCROLL + SKILL BARS ──
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      // Trigger skill bar fills when skills section comes into view
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-anim]').forEach(el => observer.observe(el));
