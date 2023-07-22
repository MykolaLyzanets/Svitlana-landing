var translations = {
  en: {
    home: "Home",
    about_me: "About Me",
    what_i_do: "What I Do",
    resume: "Resume",
    portfolio: "Portfolio",
    testimonial: "Testimonial",
    contact: "Contact",
    welcome_heading: "Welcome",
    welcome_subheading: "Thanks for visiting!"
  },
  uk: {
    home: "Головна",
    about_me: "Про мене",
    what_i_do: "Мої послуги",
    resume: "Резюме",
    portfolio: "Портфоліо",
    testimonial: "Відгуки",
    contact: "Контакти",
    welcome_heading: "Ласкаво просимо",
    welcome_subheading: "Дякуємо за візит!"
  },
  sk: {
    home: "Domov",
    about_me: "O mne",
    what_i_do: "Čo robím",
    resume: "Životopis",
    portfolio: "Portfólio",
    testimonial: "Referencie",
    contact: "Kontakt",
    welcome_heading: "Vitajte",
    welcome_subheading: "Ďakujeme za návštevu!"
  },
};

document.addEventListener('DOMContentLoaded', function() {
  var languageSelect = document.getElementById('language-select');
  if (languageSelect) {
    languageSelect.addEventListener('click', function(event) {
      var target = event.target;
      if (target.classList.contains('flag')) {
        var selectedLanguage = target.getAttribute('data-lang');
        localStorage.setItem('selectedLanguage', selectedLanguage);
        updateTranslations(selectedLanguage);
      }
    });

    var selectedLanguage = localStorage.getItem('selectedLanguage');
    if (selectedLanguage) {
      updateTranslations(selectedLanguage);
    }
  }
});

function updateTranslations(language) {
  var selectedTranslations = translations[language];
  var elementsToUpdate = [
    { id: 'welcome-heading', langKey: 'welcome_heading' },
    { id: 'welcome-subheading', langKey: 'welcome_subheading' },
    // Тут ви можете додати багато елементів для оновлення перекладів
    // Наприклад:
    // { id: 'about-heading', langKey: 'about_heading' },
    // { id: 'portfolio-heading', langKey: 'portfolio_heading' },
    // ...
  ];

  elementsToUpdate.forEach(function(elementInfo) {
    var element = document.getElementById(elementInfo.id);
    if (element) {
      var langKey = elementInfo.langKey;
      if (selectedTranslations[langKey]) {
        element.innerText = selectedTranslations[langKey];
      }
    }
  });


  var navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    var langKey = link.getAttribute('data-lang-key');
    if (selectedTranslations[langKey]) {
      link.innerText = selectedTranslations[langKey];
    }
  });
}


function changeLanguage(language) {
  localStorage.setItem('selectedLanguage', language);
  updateTranslations(language);
}
