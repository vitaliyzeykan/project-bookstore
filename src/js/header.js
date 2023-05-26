function onClick(e) {
  //     let menu = document.querySelector('.menu');
  // menuBtn.addEventListener('click', function(){
  menu.classList.toggle('active');
}
export { onClick };

  
const shoppingNumbers = document.getElementById('shoppingNumbers'); 
const shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];
  if (shoppingList.length === 0) {
    shoppingNumbers.style.display = 'none';
  } else {
    shoppingNumbers.textContent = shoppingList.length;
  }
