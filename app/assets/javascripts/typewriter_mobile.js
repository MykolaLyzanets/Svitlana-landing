const textsToTypeMobile = {
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

let currentText = 0;

function typeWriter(text, i, fnCallback) {
  const typewriterText = document.querySelector('.typewriter-text-mobile');

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
  const languageSelect = document.getElementById('language-select');
  let selectedLanguage = 'en'; // За замовчуванням - англійська
  if (languageSelect) {
    selectedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  }

  const typewriterText = document.querySelector('.typewriter-text');
  typewriterText.lang = selectedLanguage;

  typeWriter(textsToTypeMobile[selectedLanguage][currentText], 0, function() {
    currentText = (currentText + 1) % textsToTypeMobile[selectedLanguage].length;
    startTyping();
  });
}

document.addEventListener("DOMContentLoaded", startTyping);