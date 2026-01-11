// Contact form handler
const contactForm = document.querySelector('#contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const status = document.querySelector('#form-status');
    status.textContent = 'Sending...';
    try {
      const data = new FormData(contactForm);
      // Replace with your Formspree or backend endpoint
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