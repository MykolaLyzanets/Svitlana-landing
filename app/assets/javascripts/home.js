document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach(link => {
    link.addEventListener("click", function(e) {
      if (window.innerWidth < 992) {
        e.preventDefault();
        const target = this.getAttribute("href");
        document.querySelector(target).classList.toggle("show");

        // Отримуємо елемент навбару і перевіряємо, чи він має клас "show"
        const navbarNav = document.getElementById("navbarNav");
        if (navbarNav.classList.contains("show")) {
          const navbarToggler = document.getElementById("navbar-toggler");
          navbarToggler.click(); // Закриваємо навбар, викликаючи клік на кнопку тоглера
        }
      }
    });
  });
});

// Отримуємо всі елементи меню
const navLinks = document.querySelectorAll(".nav-link");

// Додаємо обробник події "click" для кожного елемента меню
navLinks.forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    let headerOffset = 50; // Встановлюємо значення за замовчуванням

    // Перевіряємо ширину вікна
    if (window.innerWidth >= 992) {
      // Для екранів 992 і більше встановлюємо headerOffset = 0
      headerOffset = 0;
    }

    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition - headerOffset;

    // Прокручуємо до вибраного розділу з відповідною анімацією
    window.scrollBy({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Знімаємо клас .active з усіх елементів меню
    navLinks.forEach(item => {
      item.classList.remove("active");
    });

    // Додаємо клас .active для обраного елемента меню
    link.classList.add("active");
  });
});



// Оновлені масиви з текстами для машинопису для різних мов
const textsToType = {
  en: [
    "I'm Svitlana.",
    "I'm a Freelancer.",
    "I'm a Designer."
  ],
  uk: [
    "Я - Світлана.",
    "Я - Фрілансер.",
    "Я - Дизайнер."
  ],
  sk: [
    "Som Svitlana.",
    "Som voľný tvorca.",
    "Som dizajnér."
  ]
};

let currentTextIndex = 0;
let isTypewriterActive = false;

function typeWriter(text, i, fnCallback) {
  const typewriterText = document.querySelector('.typewriter-text');

  if (i < text.length) {
    typewriterText.textContent = text.substring(0, i + 1) + '|';
    setTimeout(function() {
      typeWriter(text, i + 1, fnCallback);
    }, 100);
  } else if (typeof fnCallback === 'function') {
    setTimeout(function() {
      typewriterText.textContent = '';
      fnCallback();
    }, 1000);
  }
}

function startTyping() {
  if (window.innerWidth >= 992 && !isTypewriterActive) {
    isTypewriterActive = true;

    const languageSelect = document.getElementById('language-select');
    let selectedLanguage = 'en'; // За замовчуванням - англійська
    if (languageSelect) {
      selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
    }

    // Оновлено динамічний вибір мови, який забезпечить зміну lang атрибута
    const typewriterText = document.querySelector('.typewriter-text');
    typewriterText.lang = selectedLanguage;

    typeWriter(textsToType[selectedLanguage][currentTextIndex], 0, function() {
      currentTextIndex = (currentTextIndex + 1) % textsToType[selectedLanguage].length;
      isTypewriterActive = false;
      startTyping();
    });
  }
}

document.addEventListener("DOMContentLoaded", startTyping);
window.addEventListener("resize", function() {
  // При зміні розміру вікна перевіряємо, чи необхідно зупинити typewriter
  if (window.innerWidth < 992 && isTypewriterActive) {
    isTypewriterActive = false;
    const typewriterText = document.querySelector('.typewriter-text');
    typewriterText.textContent = '';
  } else if (window.innerWidth >= 992 && !isTypewriterActive) {
    // Якщо розмір вікна став більшим за 992 пікселі, і typewriter неактивний, то запускаємо його знову
    startTyping();
  }
});

