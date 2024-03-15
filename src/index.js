import renderHomePage from './pages/home-page.js';
import renderMenuPage from './pages/menu-page.js';
import renderContactPage from './pages/contact-page.js';

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