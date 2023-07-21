$(document).ready(function() {
  $(".nav-link").click(function(e) {
    if ($(window).width() < 992) {
      e.preventDefault();
      var target = $(this).attr("href");
      $(target).collapse('toggle');
    }
  });
});

const navLinks = document.querySelectorAll('.navbar-nav a');

navLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    const headerOffset = 50; // Висота фіксованого заголовка, якщо він є
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    window.scrollBy({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});

// Масив з текстами для машинопису
const textsToType = [
  "I'm Svitlana.",
  "I'm a Freelancer.",
  "I'm designer."
];

// Змінна для збереження індексу поточного тексту
let currentTextIndex = 0;

// Функція для машинопису тексту
function typeWriter(text, i, fnCallback) {
  if (i < (text.length)) {
    $('.typewriter-text').text(text.substring(0, i + 1) + '|');
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback)
    }, 100);
  } else if (typeof fnCallback == 'function') {
    setTimeout(function() {
      $('.typewriter-text').text('');
      fnCallback();
    }, 1000);
  }
}

// Запуск машинопису після завантаження сторінки
$(document).ready(function() {
  function startTyping() {
    typeWriter(textsToType[currentTextIndex], 0, function() {
      currentTextIndex = (currentTextIndex + 1) % textsToType.length;
      startTyping();
    });
  }

  startTyping();
});