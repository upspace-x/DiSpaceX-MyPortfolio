// Mobile menu toggle
const toggle = document.querySelector('[data-toggle]');
const mobileMenu = document.querySelector('[data-mobile]');
if (toggle && mobileMenu) {
  toggle.addEventListener('click', () => {
    const open = mobileMenu.style.display === 'flex';
    mobileMenu.style.display = open ? 'none' : 'flex';
  });
}

// Smooth scroll for internal anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const id = a.getAttribute('href').slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// Contact form handler (replace endpoint later)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'Sending...';
    try {
      const data = new FormData(contactForm);
      const res = await fetch('https://formspree.io/f/your-id', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        status.textContent = 'Message sent successfully!';
        contactForm.reset();
      } else {
        status.textContent = 'Something went wrong. Try again.';
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
    }
  });
}