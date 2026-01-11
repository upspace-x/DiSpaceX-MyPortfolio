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

// Simple form handler (Formspree or Vercel serverless)
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'Sending...';
    try {
      const data = new FormData(contactForm);
      // Replace with your Formspree endpoint or Vercel function
      const res = await fetch('https://formspree.io/f/your-id', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        status.textContent = 'Message sent. I’ll get back to you shortly.';
        contactForm.reset();
      } else {
        status.textContent = 'Something went wrong. Please try again.';
      }
    } catch {
      status.textContent = 'Network error. Please try again.';
    }
  });
}
