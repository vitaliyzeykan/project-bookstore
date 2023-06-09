import { openModalCard } from './modal-card';
const booksList = document.querySelector('.conteiner__books .books');
async function fetchCategories() {
  try {
    const categories = await getCategories();
    displayCategories(categories); // Переміщено перед викликом addEventListeners()
    const selectedCategory = localStorage.getItem('selectedCategory');
    if (selectedCategory) {
      await displayBooksByCategory(selectedCategory);
    }
    addEventListeners();
    
  } catch (error) {
    console.log(error.message);
  }
}
async function getCategories() {
  const response = await fetch(
    'https://books-backend.p.goit.global/books/category-list'
  );
  return response.json();
}
async function displayBooksByCategory(category) {
  const booksList = document.querySelector('.conteiner__books .books');
  booksList.innerHTML = ''; // Очищення списку книг перед вставкою нових книг
  const categoryName = document.querySelector('.name__categore-box');
  if (category === 'All categories') {
    categoryName.style.display = 'none'; // Приховуємо блок з назвою категорії
    const bestSellers = document.querySelector('.js-best-sellers');
    bestSellers.style.display = 'block';
  } else {
    categoryName.style.display = 'block'; // Відображаємо блок з назвою категорії
    const bestSellers = document.querySelector('.js-best-sellers');
    bestSellers.style.display = 'none';
    categoryName.innerHTML = `<h2 class="name__categore">${highlightLastWord(
      category
    )}</h2>`;
  }
  const books = await getBooksByCategory(category);
  displayBooks(books, category);
}
async function getBooksByCategory(category) {
  const response = await fetch(
    `https://books-backend.p.goit.global/books/category?category=${category}`
  );
  return response.json();
}
function displayBooks(books, selectedCategory) {
  booksList.innerHTML = ''; // Очищення списку книг перед вставкою нових книг
  booksList.insertAdjacentHTML('beforeend', createMarkupBooks(books));
  addClickShowModal();
  const categoryName = document.querySelector('.name__categore-box');
  categoryName.innerHTML = `<h2 class="name__categore">${highlightLastWord(
    selectedCategory
  )}</h2>`;
}
function createMarkupCategories(arr) {
  const sortedCategories = arr.sort((a, b) =>
    a.list_name.localeCompare(b.list_name)
  );
  const categoriesHTML = sortedCategories
    .map(({ list_name }) => `<li class="list_name">${list_name}</li>`)
    .join('');
  return `<ul>
            <li class="list_name js-all-categories ">All categories</li>
            ${categoriesHTML}
          </ul>`;
}
function createMarkupBooks(arr) {
  return (
    `<div class="books-container">` + // Add container div
    arr
      .map(({ book_image, title, author, _id }) => {
        const truncatedTitle = truncateTextToFitOneLine(title, 200);
        return ` <a href="#" class="modal_popap" target="_self">
          <div class="book-card">
              <div class="book-card__img-box">
                <img class="book-card__img"src="${book_image}" alt="${title}" loading="lazy"/>
                <div class="all-book-popup"> quick view </div>
              </div>
              <div class="info">
                  <h3 class="info-title__item">${truncatedTitle}</h3>
                  <p class="info-author__item">${author}</p>
                  <p class="visually-hidden">${_id}</p>
              </div>
          </div>
      </a>`;
      })
      .join('') +
    `</div>`
  ); // Close container div
}
function addClickShowModal() {
  const bookCards = document.querySelectorAll('.conteiner__books .book-card');
  bookCards.forEach(card => {
    const id = card.querySelector('.visually-hidden').textContent;
    card.addEventListener('click', () => {
      openModalCard(id);
      document.getElementById('data-modal-card').classList.remove('is-hidden');
    });
  });
}
function highlightLastWord(str) {
  const words = str.split(' ');
  words[words.length - 1] = `<span style="color: #4F2EE8">${
    words[words.length - 1]
  }</span>`;
  return words.join(' ');
}
function truncateTextToFitOneLine(text, maxWidth) {
  const ellipsis = '...';
  let truncatedText = text;
  while (truncatedText.length > 0 && getTextWidth(truncatedText) > maxWidth) {
    truncatedText = truncatedText.slice(0, -1);
  }
  if (truncatedText.length < text.length) {
    truncatedText = truncatedText.slice(0, -3) + ellipsis;
  }
  return truncatedText;
}
function getTextWidth(text) {
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  context.font = window
    .getComputedStyle(document.body)
    .getPropertyValue('font');
  return context.measureText(text).width;
}
function displayCategories(categories) {
  const categoriesList = document.querySelector('.categories');
  categoriesList.insertAdjacentHTML(
    'beforeend',
    createMarkupCategories(categories)
  );
  const allCategories = document.querySelector('.js-all-categories');
  allCategories.classList.add('active'); // Додаємо клас 'active' до "All categories"
  allCategories.addEventListener('click', async () => {
    localStorage.removeItem('selectedCategory');
    await displayBooksByCategory('All categories');
  });
}
function addEventListeners() {
  const categoriesList = document.querySelector('.categories');
  categoriesList.addEventListener('click', async event => {
    if (event.target.classList.contains('list_name')) {
      const selectedCategory = event.target.textContent;
      localStorage.setItem('selectedCategory', selectedCategory);
      // Видаляємо клас 'selected' у всіх категорій
      const categoryItems = document.querySelectorAll('.list_name');
      categoryItems.forEach(item => item.classList.remove('selected'));
      // Додаємо клас 'selected' до вибраної категорії
      event.target.classList.add('selected');
      if (selectedCategory === 'All categories') {
        const categoryName = document.querySelector('.name__categore-box');
        categoryName.style.display = 'none'; // Приховуємо блок з назвою категорії
        const bestSellers = document.querySelector('.js-best-sellers');
        bestSellers.style.display = 'block';
        // Очищення списку книг перед вставкою нових книг
        booksList.innerHTML = '';
        await displayBooksByCategory(selectedCategory);
      } else {
        const categoryName = document.querySelector('.name__categore-box');
        categoryName.style.display = 'block'; // Відображаємо блок з назвою категорії
        const bestSellers = document.querySelector('.js-best-sellers');
        bestSellers.style.display = 'none';
        await displayBooksByCategory(selectedCategory);
      }
    }
  });
  setSelectedCategoryOnReload(); // Викликаємо функцію після завантаження сторінки
}
function setSelectedCategoryOnReload() {
  const selectedCategory = localStorage.getItem('selectedCategory');
  if (selectedCategory) {
    const categoryItems = document.querySelectorAll('.list_name');
    categoryItems.forEach(item => {
      if (item.textContent === selectedCategory) {
        item.classList.add('selected');
      } else {
        item.classList.remove('selected');
      }
    });
  }
}
fetchCategories();
export { fetchCategories, createMarkupBooks, displayBooksByCategory };

