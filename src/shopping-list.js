import { openModalCard } from './js/modal-card';

import Pagination from 'tui-pagination';

import sprite from './images/sprite.svg';

import amazonIcone from './images/shopping-list/amazon-icon.png';
import amazonXIcone from './images/shopping-list/amazon-icon@2x.png';
import appleIcone from './images/shopping-list/apple-icon.png';
import appleXIcone from './images/shopping-list/apple-icon@2x.png';
import bookshopIcone from './images/shopping-list/bookshop-icon.png';
import bookshopXIcone from './images/shopping-list/bookshop-icon@2x.png';

const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) ?? [];
const shoppingListContainer = document.querySelector('.shopping-list');
const paginationContainer = document.getElementById('pagination');
const emptyListDiv = document.querySelector('.empty-list');


if (shoppingList.length === 0) {
  emptyListDiv.style.display = 'block'; 
  paginationContainer.style.display = 'none';
} else {
  emptyListDiv.style.display = 'none'; 
  paginationContainer.style.display = 'flex';
}



function removeFromShoppingList(bookId) {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) ?? [];
  const updatedList = shoppingList.filter(item => item._id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  renderShoppingList();
}

let currentPage = 1; 

let visiblePages;

function updateVisiblePages() {
  if (window.innerWidth < 768) {
    visiblePages = 1;
  } else {
    visiblePages = 3;
  }
  renderShoppingList();
}

// Инициализация visiblePages при загрузке страницы
updateVisiblePages();

// Обработчик события изменения размера окна
window.addEventListener('resize', updateVisiblePages);

function renderShoppingList() {
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) ?? [];
  const itemsPerPage = 3;

  if (shoppingList.length === 0) {
    emptyListDiv.style.display = 'block'; 
    paginationContainer.style.display = 'none';
  } else {
    emptyListDiv.style.display = 'none'; 
    paginationContainer.style.display = 'flex';
  }
  
  // Функция для отрисовки книг на текущей странице
  function renderBooksOnCurrentPage() {
    const startItem = (currentPage - 1) * itemsPerPage;
    const endItem = startItem + itemsPerPage;
    const currentItems = shoppingList.slice(startItem, endItem);

    // Очистка контейнера перед отрисовкой новых книг
    shoppingListContainer.innerHTML = '';

    currentItems.forEach(book => {
      const {
        _id,
        book_image,
        title,
        list_name,
        description,
        author,
        amazon_product_url,
        buy_links: [amazon, apple, , , bookshop],
      } = book;

      const shoppingListMarkup = `
        <li class="js-card card-shopping">
          <div class="card-shopping__container">
            <img src="${book_image}" alt="${title}" class="card-shopping__image" />
            <div class="card-shopping__thumb">
              <h2 class="card-shopping__title">${title}</h2>
              <h3 class="card-shopping__category">${list_name}</h3>
              <p class="card-shopping__description">${description}</p>
              <div class="card-shopping__author-links">
                <p class="card-shopping__author">${author}</p>
                <p class="visually-hidden">${_id}</p>
                <ul class="card-shopping__listLinks">
                  <li class="card-shopping__listItem">
                    <a href="${amazon_product_url}" class="card-shopping__link">
                      <picture>
                        <source srcset="${amazonIcone} 1x, ${amazonXIcone} 2x" type="image/png" />
                        <img class="amazon-icon" src="${amazonIcone}" alt="Amazon" />
                      </picture>
                    </a>
                  </li>
                  <li class="card-shopping__listItem">
                    <a href="${apple.url}" class="card-shopping__link">
                      <picture>
                        <source srcset="${appleIcone} 1x, ${appleXIcone} 2x" type="image/png" />
                        <img class="apple-icon" src="${appleIcone}" alt="Apple" />
                      </picture>
                    </a>
                  </li>
                  <li class="card-shopping__listItem">
                    <a href="${bookshop.url}" class="card-shopping__link">
                      <picture>
                        <source srcset="${bookshopIcone} 1x, ${bookshopXIcone} 2x" type="image/png" />
                        <img class="apple-icon" src="${bookshopIcone}" alt="Bookshop" />
                      </picture>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <button class="card-shopping__deleteBtn">
              <svg width="28" height="28" class="card-shoppin__deleteBtn--icon">
                <use href="${sprite}#icon-delete"></use>
              </svg>
            </button>
          </div>
        </li>
      `;

      shoppingListContainer.insertAdjacentHTML('beforeend', shoppingListMarkup);
    });

    addClickShowModal(); // Обновление обработчиков кликов на карточки после переключения страницы

    const deleteBtns = document.querySelectorAll('.card-shopping__deleteBtn');
    deleteBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        removeFromShoppingList(currentItems[index]._id);
      });
    });
  }

  function addClickShowModal() {
    const bookCards = document.querySelectorAll('.js-card');
    bookCards.forEach(card => {
      const id = card.querySelector('.visually-hidden').textContent;
      card.addEventListener('click', event => {
        if (!event.target.closest('.card-shopping__deleteBtn')) {
          const linkElements = event.target.closest('.card-shopping__listItem');
          if (!linkElements) {
            openModalCard(id);
            document.getElementById('data-modal-card').classList.remove('is-hidden');
          }
        }
      });
    });
  }

  const totalItems = shoppingList.length;

  const options = {
    totalItems,
    itemsPerPage,
    visiblePages,
    page: currentPage,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn shopping-page-btn">{{page}}</a>',
      currentPage: '<strong class="tui-page-btn tui-is-selected shopping-page-btn">{{page}}</strong>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} shopping-page-btn">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}} shopping-page-btn">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip shopping-page-btn">' +
          '<span class="tui-ico-ellip">...</span>' +
        '</a>'
    },
  };
  
  const pagination = new Pagination(paginationContainer, options);

  // Обработчик события при изменении страницы
  pagination.on('afterMove', event => {
    const newPage = event.page;
    if (currentPage !== newPage) {
      currentPage = newPage;
      renderBooksOnCurrentPage();
    }
  });

  // Инициализация отображения книг на первой странице
  renderBooksOnCurrentPage();
}


renderShoppingList();


export { renderShoppingList };

import './js/dark';
import './js/support-ukraine.js';
import './js/modal-card.js';


