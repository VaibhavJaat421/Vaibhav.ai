document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.getElementById('start-btn');
  const heroSection = document.querySelector('.hero');
  const formContainer = document.querySelector('.form-container');

  // Simple fade animation
  const fadeOut = (element) => {
    element.style.opacity = 0;
    setTimeout(() => {
      element.classList.add('hidden');
    }, 500);
  };

  const fadeIn = (element) => {
    element.classList.remove('hidden');
    setTimeout(() => {
      element.style.opacity = 1;
    }, 50);
  };

  startBtn.addEventListener('click', () => {
    fadeOut(heroSection);
    setTimeout(() => {
      fadeIn(formContainer);
    }, 500);
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
    // Here you would redirect to chat or process the form
  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
  }
});  });

  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  }

  function validatePhone(phone) {
    return /^\d{10}$/.test(phone);
  }
});
