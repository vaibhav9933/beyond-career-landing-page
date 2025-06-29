// Toggle hamburger menu
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Smooth scroll behavior for nav links
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      navLinks.classList.remove("active");
    }
  });
});

// Scroll reveal for animate class
const animatedItems = document.querySelectorAll('.animate');

function revealOnScroll() {
  animatedItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    const triggerPoint = window.innerHeight * 0.85;
    if (itemTop < triggerPoint) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// Contact form validation
const form = document.getElementById("contactForm");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = form.querySelector('input[type="text"]');
  const email = form.querySelector('input[type="email"]');
  const message = form.querySelector("textarea");

  if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
    alert("Please fill in all fields.");
    return;
  }

  // Simple email validation
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email.value)) {
    alert("Please enter a valid email address.");
    return;
  }

  alert("Thank you! Your message has been sent.");
  form.reset();
});


// Stats Counter Animation
const counters = document.querySelectorAll('.counter');
let counterAnimated = false;

function animateCounters() {
  if (counterAnimated) return;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    const increment = target / 100;
    let current = 0;

    const update = () => {
      current += increment;
      if (current < target) {
        counter.innerText = Math.ceil(current);
        requestAnimationFrame(update);
      } else {
        counter.innerText = target;
      }
    };
    update();
  });

  counterAnimated = true;
}

window.addEventListener('scroll', () => {
  const statsSection = document.querySelector('.stats-grid');
  const sectionTop = statsSection.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight * 0.8) {
    animateCounters();
  }
});
// Carousel logic
const track = document.querySelector('.carousel-track');
const nextBtn = document.querySelector('.carousel-btn.next');
const prevBtn = document.querySelector('.carousel-btn.prev');
let position = 0;

nextBtn.addEventListener('click', () => {
  position = (position + 1) % 3;
  track.style.transform = `translateX(-${position * 100}%)`;
});

prevBtn.addEventListener('click', () => {
  position = (position - 1 + 3) % 3;
  track.style.transform = `translateX(-${position * 100}%)`;
});