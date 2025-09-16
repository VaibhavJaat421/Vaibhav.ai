document.addEventListener('DOMContentLoaded', () => {
  gsap.from('.hero h1', { duration: 1.5, y: -50, opacity: 0, ease: 'power3.out' });
  gsap.from('.subtitle', { duration: 1.5, y: 30, opacity: 0, delay: 0.5, ease: 'power3.out' });
  gsap.from('#start-btn', { duration: 1.5, y: 30, opacity: 0, delay: 1, ease: 'power3.out' });

  const startBtn = document.getElementById('start-btn');
  const heroSection = document.querySelector('.hero');
  const formContainer = document.querySelector('.form-container');

  startBtn.addEventListener('click', () => {
    gsap.to(heroSection, { duration: 0.5, opacity: 0, y: -50, onComplete: () => {
      heroSection.classList.add('hidden');
      formContainer.classList.remove('hidden');
      gsap.fromTo(formContainer, { opacity: 0, y: 50 }, { duration: 0.8, opacity: 1, y: 0, ease: 'power3.out' });
    }});
  });

  const form = document.getElementById('user-form');
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    if (!validateEmail(email)) {
      alert('Invalid email format.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Phone must be 10 digits.');
      return;
    }

    alert('Welcome. Redirecting to Vaibhav.AI Chat...');
    // Redirect to chat interface or process form
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
  }
});