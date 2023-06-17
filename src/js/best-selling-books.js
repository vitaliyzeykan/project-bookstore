import { openModalCard } from './modal-card';
import axios from 'axios';
import { truncateTextToFitOneLine, displayBooksAndHighlightLastWord } from './helpers';
import { displayBooksByCategory, createMarkupBooks } from './categories-list-list';
import Notiflix from 'notiflix';
const bestSellersGal = document.querySelector('.js-best-sellers');
const categories = document.querySelector('.categories');
let width = window.innerWidth;
let booksPerList = 1;

addEventListener('resize', () => {
  if (
    (window.innerWidth > 767 && width < 768) ||
    (window.innerWidth > 1439 && width< 1440) ||
    (window.innerWidth < 1440 && width > 1439) ||
    (window.innerWidth < 768 && width > 767)
  ) {
    location.reload();
  }
});

function viewPort() {
  if (width <= 768) {
    booksPerList = 1;
  } else if (width > 768 && width < 1440) {
    booksPerList = 3;
  } else {
    booksPerList = 5;
  }
}

async function fetchBestSellers() {
  const resp = await axios.get(`https://books-backend.p.goit.global/books/top-books`).then(response => response.data);
  return resp;
}
fetchBestSellers()
  .then(data => {
    viewPort();
    bestSellersGal.insertAdjacentHTML('beforeend', createMarkupBooksCategories(data))
    addClickShowModal();
  },
    err => {
      console.log(err)
     Notiflix.Notify.info(
          'Sorry, there are no books matching your search query.'
  );});
function createMarkupBooksCategories(arr) {
  return arr.map(({ list_name, books }) =>
  `<div class="books_list_category">
        <p class="category_name">${list_name}</p>
        <ul class="books_row">${books.slice(0, booksPerList).map(({ book_image, title, author, _id, }) =>
         ` <div>
             <a href="#" class="modal_popap" target="_self">
          <div class="book-card--main-page">
              <div class="book-card__img-box--main-page">
                <img class="book-card__img--main-page"src="${book_image}" alt="${title}" loading="lazy"/>
                <div class="all-book-popup"> quick view </div>
              </div> 
              <div class="info--main-page">
                  <h3 class="info-title__item--main-page cut-text">${title}</h3>
                  <p class="info-author__item--main-page">${author}</p>
                   <p class="visually-hidden">${_id}</p>             
              </div>
          </div>
      </a>
            </div>`).join('')}</ul><button class="books-category-btn" data-list="${list_name}">see more</button>
      </div>
    `
  ).join('');
}


function addClickShowModal() {
  const bookCards = document.querySelectorAll('.js-best-sellers .modal_popap');
  bookCards.forEach(card => {
    const id = card.querySelector('.visually-hidden').textContent;
    card.addEventListener('click', () => {
      openModalCard(id);
      document.getElementById('data-modal-card').classList.remove('is-hidden');
    });
  });
}


// РОЗРОЗБКА КНОПКИ----------------------------------
const booksElement = document.querySelector('.books');
bestSellersGal.addEventListener('click', handleCategoryBtnClick);
  async function getBooksByCategory(newGal) {
    const response = await axios.get(
      `https://books-backend.p.goit.global/books/category?category=${newGal}`).then(response => response.data);
    return response;
};
function handleCategoryBtnClick(evt) {
  if (evt.target.nodeName !== "BUTTON") {
    return;
  }
  bestSellersGal.innerHTML = '';
  const newGalName = evt.target.dataset.list;
 getBooksByCategory(newGalName)
   .then(data => {
      displayBooksByCategory(newGalName);
      displayBooksAndHighlightLastWord(data, newGalName);
     booksElement.insertAdjacentHTML('beforeend',createMarkupBooks(data))
     addClickShowModal();
  },
    err => { console.log(err) });
}
export { fetchBestSellers };
