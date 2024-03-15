import renderHomePage from './pages/home-page.js';
import renderMenuPage from './pages/menu-page.js';
import renderContactPage from './pages/contact-page.js';
import restaurantLogo from './images/restaurant-logo.svg';
import './styles/main.css';

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

// Create restaurant logo
const logoContainer = document.querySelector('.restaurant-logo-container');
const logo = new Image();
logo.src = restaurantLogo;

logo.classList.add('restaurant-logo');

 // Append restaurant logo
 if (logoContainer.firstChild) {
  logoContainer.removeChild(logoContainer.firstChild);
}
logoContainer.append(logo);