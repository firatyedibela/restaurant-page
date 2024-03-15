import RestaurantImage from '../images/restaurant.jpg';

export default function renderHomePage() {
  const content = document.querySelector('#content');

  // Create headline
  const headline = document.createElement('h1');
  headline.textContent = 'Wonderful Restaurant';

  // Create image
  const restaurantImage = new Image();
  restaurantImage.src = RestaurantImage;

  // Create text
  const infoText = document.createElement('p');
  infoText.textContent = 'Welcome to our wonderful restaurant. We serve the best food in town since 1976. Enjoy your meal!  '

  content.appendChild(headline);
  content.appendChild(restaurantImage);
  content.appendChild(infoText);
}