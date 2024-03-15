import renderHomePage from './pages/home-page.js';
import renderMenuPage from './pages/menu-page.js';
import renderContactPage from './pages/contact-page.js';
import restaurantLogo from './images/restaurant-logo.svg';
import './styles/main.css';

renderHomePage();

const navButtons = document.querySelectorAll('.nav-btn');

// Make nav buttons interactive
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

// Make nav buttons active when clicked
navButtons.forEach(navBtn => {
  navBtn.addEventListener('click', handleNavBtnActive);
});

function handleNavBtnActive(e) {
  navButtons.forEach(navBtn => {
    navBtn.classList.remove('nav-btn-active');
  });

  e.target.classList.add('nav-btn-active');
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