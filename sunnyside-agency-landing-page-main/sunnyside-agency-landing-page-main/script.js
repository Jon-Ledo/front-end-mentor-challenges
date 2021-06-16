const hamburger = document.querySelector('.hamburger');
const navUL = document.querySelector('.navbar__links-container');

hamburger.addEventListener('click', () => {
  navUL.classList.toggle('show');
})