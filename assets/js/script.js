const button = document.querySelector('.menu');
const menu = document.querySelector('.desktop');
const body = document.querySelector('body');
const close = document.querySelector('.x');
const closeLinks = document.querySelector('.link', '.link2', '.link3');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeLinks.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});