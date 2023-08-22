var translations = {
  en: {
    home: "HOME",
    about_me: "ABOUT ME",
    what_i_do: "SERVICES",
    portfolio: "PORTFOLIO",
    testimonial: "TESTIMONIALS",
    contact: "CONTACT",
    welcome_heading: "Welcome",
    welcome_subheading: "Thanks for visiting!",
    info: "Design that Changes Everything: I'll Bring Your Ideas to Life and Help You Become Leaders in Your Industry.",
    know_me_more: "Know Me More",
    name: "I’m a UI/UX Designer",
    color_name: "Svitlana Lyzanets,"
  },
  uk: {
    home: "Головна",
    about_me: "Про мене",
    what_i_do: "Мої послуги",
    portfolio: "Портфоліо",
    testimonial: "Відгуки",
    contact: "Контакти",
    welcome_heading: "Ласкаво просимо",
    welcome_subheading: "Дякуємо за візит!",
    info: "Дизайн, що змінить все: Реалізую ваші ідеї та допоможу вам стати лідерами у вашій галузі.",
    know_me_more: "Пізнайте мене краще",
    name: "Мене звати, я UI/UX дизайнер",
    color_name: "Світлана,"
  },
  sk: {
    home: "Domov",
    about_me: "O mne",
    what_i_do: "Čo robím",
    portfolio: "Portfólio",
    testimonial: "Referencie",
    contact: "Kontakt",
    welcome_heading: "Vitajte",
    welcome_subheading: "Ďakujeme za návštevu!",
    info: "Dizajn, ktorý zmení všetko: Realizujem vaše nápady a pomôžem vám stať sa lídrami vo vašej oblasti.",
    know_me_more: "Zoznámte sa so mnou bližšie",
    name: "Volám sa a som UI/UX dizajnérka",
    color_name: "Svitlana,"
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
    { id: 'info', langKey: 'info' },
    { id: 'welcome-subheading', langKey: 'welcome_subheading' },
    { id: 'welcome-mobile', langKey: 'welcome_heading' },
    { id: 'welcome2-mobile', langKey: 'welcome_subheading' },
    { id: 'know-me-more', langKey: 'know_me_more' },
    { id: 'name', langKey: 'name' },
    { id: 'color-name', langKey: 'color_name' },

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
