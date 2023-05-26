import { BookAPI } from './booksApi';

import sprite from '../images/sprite.svg';

import amazonIcone from '../images/shopping-list/amazon-icon.png';
import amazonXIcone from '../images/shopping-list/amazon-icon@2x.png';
import appleIcone from '../images/shopping-list/apple-icon.png';
import appleXIcone from '../images/shopping-list/apple-icon@2x.png';
import bookshopIcone from '../images/shopping-list/bookshop-icon.png';
import bookshopXIcone from '../images/shopping-list/bookshop-icon@2x.png';

let isModalOpen = false;
const bookApi = new BookAPI();

const refs = {
  modalCardWrapper: document.querySelector('.modal-card_backdrop'),
};
let modalCardClose = '';
if (isModalOpen) {
  modalCardClose = modalCardWrapper.querySelector('.modal-card_close');
}

export function openModalCard(bookId) {
  if (!isModalOpen) {
    toggleModal();
    const data = bookApi
      .fetchBook(bookId)
      .then(data => renderBooks(data, refs))
      .catch(e => console.log(e));
    isModalOpen = true;
  }
}

function closeModalCard() {
  isModalOpen = false;
  toggleModal();
  clearModalContent();
}

function toggleModal() {
  refs.modalCardWrapper.classList.toggle('is-hidden');
}

function clearModalContent() {
  if (refs.modalCardWrapper) {
    refs.modalCardWrapper.innerHTML = '';
  }
}

const renderBooks = (data, refs) => {
  const book = data.data;
  const amazonLink = book.buy_links.find(link => link.name === 'Amazon');
  const bookshopLink = book.buy_links.find(link => link.name === 'Bookshop');
  const appleBooksLink = book.buy_links.find(
    link => link.name === 'Apple Books'
  );

  const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));
  const isBookInList = shoppingList.some(item => item._id === book._id);

  const addButtonLabel = isBookInList ? 'Remove from the shopping list' : 'Add to Shopping List';

  console.log({ book });

  const bookElMarkup = `
  <div class="modal-card">
    <div class="modal-card-div">
      <img class="modal-card_img" src="${book.book_image}" alt="${book.title}" />
      <div class="modal-card-info">
        <h3 class="modal-card_title">${book.title}</h3>
        <p class="modal-card_author">${book.author}</p>
        <p class="modal-card_desq">${book.description}</p>
        <ul class="shopping-list-links">
          <li shopping-list-links_item>
            <a class="shopping-list-links_icon" href="${amazonLink.url}">
              <picture>
                <source
                  srcset="${amazonIcone} 1x, ${amazonXIcone} 2x"
                  type="image/png"
                />
                <img class="amazon-icon" src="${amazonIcone}" alt="Amazon" />
              </picture>
            </a>
          </li>
          <li>
            <a class="shopping-list-links_icon" href="${bookshopLink.url}">
              <picture>
                <source
                  srcset="${appleIcone} 1x, ${appleXIcone} 2x"
                  type="image/png"
                />
                <img class="apple-icon" src="${appleIcone}" alt="Apple" />
              </picture>
            </a>
          </li>
          <li>
            <a class="shopping-list-links_icon" href="${appleBooksLink.url}">
              <picture>
                <source
                  srcset="${bookshopIcone} 1x, ${bookshopXIcone} 2x"
                  type="image/png"
                />
                <img class="apple-icon" src="${bookshopIcone}" alt="Bookshop" />
              </picture>
            </a>
          </li>
        </ul>
      </div>
    </div>
      <button class="modal-card_close" type="button">
        <svg class="icon-cross" height="12" width="12">
          <use href="${sprite}#icon-close"></use>
        </svg>
      </button>
      <div class="button-shopping">
        <button class="button-add-shopping-list btn-modal-card" type="button">${addButtonLabel}</button>
      </div>
    </div>
  `;

  refs.modalCardWrapper.insertAdjacentHTML('beforeend', bookElMarkup);

  const addToShoppingListBtn = document.querySelector('.button-add-shopping-list');
  addToShoppingListBtn.addEventListener('click', () => addToShoppingList(book));


  const modalCardClose = document.querySelector('.modal-card_close');
  modalCardClose.addEventListener('click', closeModalCard);
  console.log({ modalCardClose });
};



function addToShoppingList(book) {


  // Отримати поточні дані з localStorage
  const shoppingList = JSON.parse(localStorage.getItem('shoppingList'));

  const isBookInList = shoppingList.some(item => item._id === book._id);

  if (isBookInList) {
    // Видалити книгу зі списку покупок
    const updatedList = shoppingList.filter(item => item._id !== book._id);
    localStorage.setItem('shoppingList', JSON.stringify(updatedList));

    // Змінити текст кнопки на "Add to Shopping List"
    const addToShoppingListBtn = document.querySelector(
      '.button-add-shopping-list'
    );
    addToShoppingListBtn.textContent = 'Add to Shopping List';

    // Видалити повідомлення про додавання до списку покупок
    const message = document.querySelector('.shopping-list-message');
    if (message) {
      message.remove();
    }

    return;
  }

  // Додати книгу до списку покупок
  shoppingList.push(book);

  // Зберегти оновлений список покупок в localStorage
  localStorage.setItem('shoppingList', JSON.stringify(shoppingList));


  // Змінити текст кнопки на "Remove from the shopping list"
  const addToShoppingListBtn = document.querySelector(
    '.button-add-shopping-list'
  );
  addToShoppingListBtn.textContent = 'Remove from the shopping list';

  // Відобразити повідомлення про додавання до списку покупок
  const message = document.createElement('p');
  message.classList.add('shopping-list-message');
  message.textContent =
    'Congratulations! You have added the book to the shopping list. To delete, press the button “Remove from the shopping list”.';

  const buttonShopping = document.querySelector('.button-shopping');
  buttonShopping.appendChild(message);
  // Відобразити підтвердження додавання до списку покупок
  alert('Book added to Shopping List!');
}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && isModalOpen) {
    closeModalCard();
  }
});
