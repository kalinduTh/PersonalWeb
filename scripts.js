
let menu = document.querySelector('#menu-icon');
let navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('fi-br-menu-burger');
    menu.classList.toggle('fi-br-cross');
    navMenu.classList.toggle('open');
});


//navbar hide
let lastScrollY = window.pageYOffset;
const navBar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  const currentScrollY = window.pageYOffset;

  if (currentScrollY > lastScrollY && currentScrollY > 20) {
    navBar.classList.add('nav-up'); 
  } else {
    navBar.classList.remove('nav-up');
  }

  lastScrollY = currentScrollY;
});