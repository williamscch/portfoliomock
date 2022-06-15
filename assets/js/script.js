// mobile menu events

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

// Information of the pop-up windows

const projects = [{
  image: './assets/img/projects.jpg',
  title: 'Keeping track of hundreds of components',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
{
  image: './assets/img/medicalproject.jpg',
  title: 'Medical Illustration Sets',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
{
  image: './assets/img/girlproject.jpg',
  title: 'Multi Posts Stories',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
{
  image: './assets/img/face-project.jpg',
  title: 'Multi-post Stories',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
{
  image: './assets/img/uber-project.jpg',
  title: 'Keeping track of hundreds of components',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
{
  image: './assets/img/laptop-project.jpg',
  title: 'Keeping track of hundreds of components',
  languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
  description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
  buttonLive: 'https://wdavidcch.github.io/portfolio/',
  buttonSource: 'https://github.com/wdavidcch/portfolio',
},
];