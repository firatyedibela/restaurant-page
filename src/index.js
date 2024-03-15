import renderHomePage from './pages/home.js';
import renderMenuPage from './pages/menu.js';

renderHomePage();

const navButtons = document.querySelectorAll('.nav-btn');
navButtons.forEach(navBtn => {
  navBtn.addEventListener('click', handlePageClick);
});

function handlePageClick(e) {
  document.querySelector('#content').textContent = '';
  switch (e.target.textContent) {
    case 'Home':
      renderHomePage();
      break;
    case 'Menu':
      renderMenuPage();
      break;
    case 'Contact':
      renderContactPage();
      break;
  }
}