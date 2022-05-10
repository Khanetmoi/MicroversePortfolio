const contactList = document.getElementById('contactList');
const hambugerButton = document.getElementById('hamburgerButton');
const hambugerButton2 = document.getElementById('hamburgerButton2');
const options = document.getElementsByClassName('options');

hambugerButton.addEventListener('click', () => {
  contactList.classList.toggle('appear');
  document.body.style.overflow = 'hidden';
});

hambugerButton2.addEventListener('click', () => {
  contactList.classList.remove('appear');
  document.body.style.overflow = 'visible';
});

console.log(options);

options[0].addEventListener('click', () => {
  contactList.classList.remove('appear');
  document.body.style.overflow = 'visible';
});

options[1].addEventListener('click', () => {
  contactList.classList.remove('appear');
  document.body.style.overflow = 'visible';
});

options[2].addEventListener('click', () => {
  contactList.classList.remove('appear');
  document.body.style.overflow = 'visible';
});