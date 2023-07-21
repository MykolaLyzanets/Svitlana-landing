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
