// Instantiate project object

const projects = [
  {
    id: 1,
    featured_image: ' ',
    projectTitle: 'Muli-Post Stories',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standarddummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    side: 'first',
    buttonClass: 'Pbutton',
    live_version: 'https://khanetmoi.github.io/MicroversePortfolio/',
    link_to_source: 'https://github.com/Khanetmoi/MicroversePortfolio/tree/master',

  },
  {
    id: 2,
    featured_image: ' ',
    projectTitle: 'Muli-Post Stories',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standarddummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    side: 'second',
    buttonClass: 'Pbutton',
    live_version: 'https://khanetmoi.github.io/MicroversePortfolio/',
    link_to_source: 'https://github.com/Khanetmoi/MicroversePortfolio/tree/master',

  },
  {
    id: 3,
    featured_image: ' ',
    projectTitle: 'Muli-Post Stories',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standarddummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    side: 'first',
    buttonClass: 'Pbutton',
    live_version: 'https://khanetmoi.github.io/MicroversePortfolio/',
    link_to_source: 'https://github.com/Khanetmoi/MicroversePortfolio/tree/master',

  },
  {
    id: 4,
    featured_image: ' ',
    projectTitle: 'Muli-Post Stories',
    projectDescription: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry s standarddummy text ever since the 1500s, when an unknown printer took a standard dummy text.',
    technologies: ['css', 'html', 'bootstrap', 'ruby'],
    side: 'second',
    buttonClass: 'Pbutton',
    live_version: 'https://khanetmoi.github.io/MicroversePortfolio/',
    link_to_source: 'https://github.com/Khanetmoi/MicroversePortfolio/tree/master',

  },
];

const body = document.querySelector('body');

const WpopUp = document.createElement('div');
WpopUp.setAttribute('class', 'modal');
WpopUp.setAttribute('id', 'window');

WpopUp.innerHTML = `<div class="window-flex">
            <h3>Multi - Post stories</h3>
            <a id="close" href="#">&times;</a>
        </div>
        <img src="images/Snapshoot.png" class="window-img" alt="">
        <p class="window-p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the
        releaLorem Ipsum is simply dummy text of the printing and typesetting ever since the 1500s, when an unknown printer took
        a galley of type veris lapoa todoe.</p>
        <ul class="window-list">
            <li>
                <div class="v-line"></div>
            </li>
            <li>
                <h3>html</h3>
            </li>
            <li>
                <div class="v-line"></div>
            </li>
            <li>
                <h3>Ruby on rails</h3>
            </li>
            <li>
                <div class="v-line"></div>
            </li>
            <li>
                <h3>css</h3>
            </li>
            <li>
                <div class="v-line"></div>
            </li>
            <li class="wdesk">
                <h3>Github</h3>
            </li>
            <li class="wdesk">
                <div class="v-line"></div>
            </li>
            
        </ul>
        <div class="window-buttons">
            <a href="https://khanetmoi.github.io/MicroversePortfolio/">
            <button class="Window-project">
                <h3>See Live</h3><img class="window-power-logo" src="images/Icon.png" alt="">
            </button> </a>
           <a href="https://github.com/Khanetmoi/MicroversePortfolio/tree/master"> <button class="window-source">See source <i class="fa-brands fa-github"></i></button> </a>
        </div>`;

body.appendChild(WpopUp);

const mappeur = projects.map((fuji) => `<div class=${fuji.side}>
            <div class="preview"></div>
            <div class="comments">
                <h2 class="title">${fuji.projectTitle}</h2>
                <p>${fuji.projectDescription}</p>
                <ul> ${fuji.technologies.map((frame) => `<li><h3>${frame}</h3></li>`).join('')}
                </ul>

                <button class=${fuji.buttonClass}>See Project</button>
            </div>
        </div>`).join('');

const content = document.getElementById('bgImg2');

content.innerHTML += mappeur;

const button = document.getElementsByClassName('Pbutton');

const PopUpWindow = document.getElementById('window');
const Close = document.getElementById('close');

for (let i = 0; i < button.length; i += 1) {
  button[i].addEventListener('click', () => {
    PopUpWindow.classList.add('popUpAppear');
    body.style.overflowY = 'hidden';
  });
}

Close.addEventListener('click', () => {
  PopUpWindow.classList.remove('popUpAppear');
  body.style.overflowY = 'visible';
});
