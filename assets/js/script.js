const button = document.querySelector('.menu');
const menu = document.querySelector('.desktop');
const body = document.querySelector('body');
const close = document.querySelector('.x');
const closePortfolio = document.querySelector('.link');
const closeAbout = document.querySelector('.link2');
const closeContact = document.querySelector('.link3');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

close.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closePortfolio.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeAbout.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closeContact.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});