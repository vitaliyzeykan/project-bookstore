import {checkAuthState} from './auth';

const menuBurgerConteiner = document.querySelector('.js-menu-container');
const btnBurger = document.querySelector('.open-menu-btn');
const btnClose = document.querySelector('.close-menu-btn');
const activeShopingPage = document.querySelector('.shoppingListButtonMobile');
const activeHomePage = document.querySelector('.homeButtonMobile');
const body = document.body;
 var currentPage = location.pathname;

export const openBurgerMenu = () => {
  checkAuthState;
  menuBurgerConteiner.classList.add('open-menu');
  btnBurger.classList.add('hidden');
  btnClose.classList.remove('hidden');
  body.style.overflow = 'hidden';
 
  if (currentPage === '/index.html') {
    activeHomePage.classList.add('link-active');
  } else if (currentPage === '/shopping-list.html') {
    activeShopingPage.classList.add('link-active');
  }
};

export const closeBurgerMenu = () => {
  checkAuthState;
  menuBurgerConteiner.classList.remove('open-menu');
  btnBurger.classList.remove('hidden');
  btnClose.classList.add('hidden');
  body.style.overflow = '';
};

btnBurger.addEventListener('click', openBurgerMenu);
btnClose.addEventListener('click', closeBurgerMenu);

if (currentPage === '/index.html') {
  activeHomePage.classList.add('link-active');

} else if (currentPage === '/shopping-list.html') {
  activeShopingPage.classList.add('link-active');
}


activeHomePage.addEventListener('click', () => {
  body.style.overflow = '';
});

activeShopingPage.addEventListener('click', () => {
  body.style.overflow = '';
});