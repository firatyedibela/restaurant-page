import '../styles/home-page.css';
import restaurant from '../images/restaurant.jpg';
import marker from '../images/map-marker.svg';

export default function renderHomePage() {
  const content = document.querySelector('#content');
  
  // Create welcome text
  const infoText = document.createElement('p');
  infoText.classList.add('home-info-text');
  infoText.textContent = 'Welcome to our Wonderful Restaurant. We serve the best food in town since 1976. Enjoy your meal!  '

  // Create restaurant image
  const restaurantImage = new Image();
  restaurantImage.src = restaurant;
  restaurantImage.classList.add('restaurant-image');
  
  // Create address container
  const address = document.createElement('div');
  address.classList.add('home-address-container');
  
  // Create marker logo
  const mapMarker = new Image();
  mapMarker.src = marker;
  mapMarker.classList.add('home-map-marker');

  // Create address text
  const addressText = document.createElement('p');
  addressText.classList.add('home-address');
  addressText.textContent = 'Odin - 3 Avenue 7/12 Harvard/CS50';

  address.appendChild(mapMarker);
  address.appendChild(addressText);
 
  content.appendChild(address);
  content.appendChild(restaurantImage);
  content.appendChild(infoText);
}