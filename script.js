function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}
const reveals = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
      observer.unobserve(entry.target); // чтобы не повторялась анимация
    }
  });
}, {
  threshold: 0.1
});

reveals.forEach(reveal => {
  observer.observe(reveal);
});

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Load saved theme
if (localStorage.getItem('theme') === 'dark') {
  body.classList.add('dark');
  themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
  body.classList.toggle('dark');

  if (body.classList.contains('dark')) {
    localStorage.setItem('theme', 'dark');
    themeToggle.textContent = '☀️';
  } else {
    localStorage.setItem('theme', 'light');
    themeToggle.textContent = '🌙';
  }
});

const skillSection = document.querySelector('#skills');
const skillFills = document.querySelectorAll('#skills .fill');

const skillObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      skillFills.forEach(fill => {
        const targetWidth = fill.getAttribute('data-width');
        fill.style.width = targetWidth;
      });
      observer.unobserve(skillSection); // анимация один раз
    }
  });
}, { threshold: 0.3 });

skillObserver.observe(skillSection);


document.getElementById("contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thanks for reaching out! ✉️"); // или замени на логику с API
});
document.getElementById('retro-toggle').addEventListener('click', () => {
  document.body.classList.toggle('retro');
});
