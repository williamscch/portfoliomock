// mobile menu events

const button = document.querySelector('.menu');
const menu = document.querySelector('.desktop');
const body = document.querySelector('body');
const closer = document.querySelector('.x');
const closePortfolio = document.querySelector('.link');
const closeAbout = document.querySelector('.link2');
const closeContact = document.querySelector('.link3');

button.addEventListener('click', () => {
  menu.classList.toggle('active');
  body.classList.toggle('active');
});

closer.addEventListener('click', () => {
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

const projects = [
  {
    image: './assets/img/projects.jpg',
    title: 'Keeping track of hundreds of components',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
  {
    image: './assets/img/medicalproject.jpg',
    title: 'Medical Illustration Sets',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
  {
    image: './assets/img/girlproject.jpg',
    title: 'Multi Posts Stories',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the real Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
  {
    image: './assets/img/face-project.jpg',
    title: 'Facebook 360',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'Exploring the future of media in Facebook`s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
  {
    image: './assets/img/uber-project.jpg',
    title: 'Uber Navigation',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
  {
    image: './assets/img/laptop-project.jpg',
    title: 'Profesional Art Printing Data More',
    languages: ['Ruby on Rails', 'CSS', 'JavaScript', 'Html'],
    description:
      'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry`s standard',
    buttonLive: 'https://wdavidcch.github.io/portfolio/',
    buttonSource: 'https://github.com/wdavidcch/portfolio',
  },
];

// projects dynamically appears on the page

const cardsContainer = document.querySelector('.cards-container');
cardsContainer.innerHTML = `<article class="product-card">
<img src="./assets/img/projects.jpg" alt="img" />
<div class="product-info">
    <h2>Keeping track of hundreds of components</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button" value="See">See Project</button>
</div>
</article>

<article class="product-card">
<img src="./assets/img/medicalproject.jpg" alt="img" />
<div class="product-info">
    <h2>Medical Illustration Sets</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button2" value="See">See Project</button>
</div>
</article>

<article class="product-card">
<img src="./assets/img/girlproject.jpg" alt="img" />
<div class="product-info">
    <h2>Multi Posts Stories</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button3" value="See">See Project</button>
</div>
</article>

<article class="product-card">
<img src="./assets/img/face-project.jpg" alt="img" />
<div class="product-info">
    <h2>Facebook 360</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button4" value="See">See Project</button>
</div>
</article>

<article class="product-card">
<img src="./assets/img/uber-project.jpg" alt="img" />
<div class="product-info">
    <h2>Uber Navigation</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button5" value="See">See Project</button>
</div>
</article>

<article class="product-card">
<img src="./assets/img/laptop-project.jpg" alt="img" />
<div class="product-info">
    <h2>Professional Art Printing Data More</h2>
    <div>
        <ul class="leng">
            <li>Ruby on Rails</li>
            <li>Css</li>
            <li>JavaScript</li>
            <li>Html</li>
        </ul>
    </div>
    <button type="button" class="project-button6" value="See">See Project</button>
</div>
</article>`;

// function generalProjects() {
//     projects.forEach((element, index) => {
//         const article = document.createElement('article');
//         article.classList.add('product-card');
//         cardsContainer.append(article);
//         const img = document.createElement('img');
//         const bigDiv = document.createElement('div');
//         bigDiv.classList.add('product-info');
//         article.append(img, bigDiv);
//         const h2 = document.createElement('h2');
//         const div = document.createElement('div');
//         div.classList.add('leng');
//         bigDiv.append(h2, div);
//         const ul = document.createElement('ul');
//         div.appendChild('ul');

//         img.src = projects[index].image;
//         h2.textContent = projects[index + 1].title;

//         console.log(projects[index]);
//     });
// }

// generalProjects();

// function pop up window

function openProjectCard(projectNum) {
  const wrapper = document.createElement('section');
  wrapper.classList.add('wrapper');
  const cardPopUp = document.createElement('div');
  document.body.appendChild(wrapper);
  wrapper.appendChild(cardPopUp);
  cardPopUp.classList.add('cardPopUp');

  const cardImg = document.createElement('img');
  const cardTitle = document.createElement('h3');
  // const cardDiv = document.createElement('div');
  const cardInfo = document.createElement('p');
  const projectUl = document.createElement('ul');
  const cardButtonsDiv = document.createElement('div');
  const liveButton = document.createElement('a');
  const sourceButton = document.createElement('a');
  const buttonimg1 = document.createElement('img');
  const buttonimg2 = document.createElement('img');
  const closeX = document.createElement('img');
  const closePop = document.createElement('img');

  // cardDiv.classList.add('info-buttons');
  buttonimg1.classList.add('enable');
  buttonimg2.classList.add('git');
  closeX.classList.add('closex');
  cardImg.classList.add('cardimg');
  closePop.classList.add('closepop');

  cardPopUp.append(
    closeX,
    closePop,
    cardImg,
    cardTitle,
    projectUl,
    cardInfo,
    cardButtonsDiv,
  );
  // cardDiv.append(cardInfo, cardButtonsDiv);
  cardButtonsDiv.append(liveButton, sourceButton);

  closeX.src = './assets/img/Iconx.svg';
  closePop.src = './assets/img/xicon.svg';
  cardImg.src = projects[projectNum].image;
  cardTitle.textContent = projects[projectNum].title;
  cardInfo.textContent = projects[projectNum].description;
  cardButtonsDiv.classList.add('cardButtonDiv');
  liveButton.href = projects[projectNum].buttonLive;
  liveButton.target = '_blank';
  liveButton.textContent = 'See Live';
  liveButton.classList.add('pop-button');
  liveButton.appendChild(buttonimg1);
  buttonimg1.src = './assets/img/enable.svg';
  sourceButton.href = projects[projectNum].buttonSource;
  sourceButton.target = '_blank';
  sourceButton.textContent = 'See Source';
  sourceButton.classList.add('pop-button');
  sourceButton.appendChild(buttonimg2);
  buttonimg2.src = './assets/img/git.svg';

  projects[projectNum].languages.forEach((element, index) => {
    projectUl.classList.add('projectul');
    const projectLi = document.createElement('li');
    projectUl.append(projectLi);
    projectLi.textContent = projects[projectNum].languages[index];
  });

  closeX.addEventListener('click', () => {
    body.removeChild(wrapper);
  });

  closePop.addEventListener('click', () => {
    body.removeChild(wrapper);
  });
}

const projectButton = document.querySelector('.project-button');
projectButton.addEventListener('click', () => {
  openProjectCard(0);
});

const projectButton2 = document.querySelector('.project-button2');
projectButton2.addEventListener('click', () => {
  openProjectCard(1);
});

const projectButton3 = document.querySelector('.project-button3');
projectButton3.addEventListener('click', () => {
  openProjectCard(2);
});

const projectButton4 = document.querySelector('.project-button4');
projectButton4.addEventListener('click', () => {
  openProjectCard(3);
});

const projectButton5 = document.querySelector('.project-button5');
projectButton5.addEventListener('click', () => {
  openProjectCard(4);
});

const projectButton6 = document.querySelector('.project-button6');
projectButton6.addEventListener('click', () => {
  openProjectCard(5);
});

// Email Validation

const email = document.getElementById('email');
const form = document.getElementById('form');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', (e) => {
  const messages = [];
  if (/[A-Z]/.test(email.value) === true) {
    messages.push('Email must be in lowercase!');
    errorMessage.innerText = messages.join(', ');
    e.preventDefault();
  }
});
