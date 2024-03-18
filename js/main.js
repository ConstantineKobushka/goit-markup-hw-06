const headerNavBtn = document.querySelector('.header-nav--btn');
const mobailCloseBtn = document.querySelector('.mobail-close-btn');
const mobailMenu = document.querySelector('.mobail-menu');

const solutionsBtn = document.querySelector('.solutions-btn');
const modalCloseBtn = document.querySelector('.modal-close-btn');
const modalOverlay = document.querySelector('.modal-overlay');
const modalWindow = document.querySelector('.modal-window');

function openMenu() {
  mobailMenu.classList.add('is-open');
}
function closeMenu() {
  mobailMenu.classList.remove('is-open');
}
function openModalWindow() {
  modalOverlay.classList.add('is-open');
}
function closeModalWindow() {
  modalOverlay.classList.remove('is-open');
}
function stopPropagation(e) {
  e.stopPropagation();
}

headerNavBtn.addEventListener('click', openMenu);
mobailCloseBtn.addEventListener('click', closeMenu);
solutionsBtn.addEventListener('click', openModalWindow);
modalCloseBtn.addEventListener('click', closeModalWindow);
modalOverlay.addEventListener('click', closeModalWindow);
modalWindow.addEventListener('click', stopPropagation);
