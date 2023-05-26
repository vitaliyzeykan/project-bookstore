import sprite from './images/sprite.svg';

import amazonIcone from './images/shopping-list/amazon-icon.png';
import amazonXIcone from './images/shopping-list/amazon-icon@2x.png';
import appleIcone from './images/shopping-list/apple-icon.png';
import appleXIcone from './images/shopping-list/apple-icon@2x.png';
import bookshopIcone from './images/shopping-list/bookshop-icon.png';
import bookshopXIcone from './images/shopping-list/bookshop-icon@2x.png';

const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
const shoppingListContainer = document.querySelector('.shopping-list');

const emptyListDiv = document.querySelector('.empty-list');

if (shoppingList.length === 0) {
  emptyListDiv.style.display = 'block'; // Показати empty-list
} else {
  emptyListDiv.style.display = 'none'; // Приховати empty-list
}

function removeFromShoppingList(bookId) {
  const updatedList = shoppingList.filter(item => item._id !== bookId);
  localStorage.setItem('shoppingList', JSON.stringify(updatedList));
  renderShoppingList();
}

function renderShoppingList() {
  shoppingListContainer.innerHTML = '';

  shoppingList.forEach(book => {
    const {
      book_image,
      title,
      list_name,
      description,
      author,
      amazon_product_url,
      buy_links: [amazon, apple, , , bookshop],
    } = book;

    const bookElMarkup = `
      <li class="js-card card-shopping">
        <div class="card-shopping__container">
          <img src="${book_image}" alt="${title}" class="card-shopping__image" />
          <div class="card-shopping__thumb">
            <h2 class="card-shopping__title">${title}</h2>
            <h3 class="card-shopping__category">${list_name}</h3>
            <p class="card-shopping__description">${description}</p>
            <div class="card-shopping__author-links">
              <p class="card-shopping__author">${author}</p>
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

    shoppingListContainer.insertAdjacentHTML('beforeend', bookElMarkup);

    const deleteBtns = document.querySelectorAll('.card-shopping__deleteBtn');
    deleteBtns.forEach((btn, index) => {
      btn.addEventListener('click', () => {
        removeFromShoppingList(shoppingList[index]._id);
      });
    });
  });
}

renderShoppingList();

import './js/dark';
import './js/support-ukraine.js';
import './js/modal-card.js';
