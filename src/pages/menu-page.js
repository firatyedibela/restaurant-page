import {  soups, mainDishes, deserts } from '../data/menu.js';
import '../styles/menu-page.css';

export default function renderMenuPage() {
  const content = document.querySelector('#content');

  const menu = document.createElement('div');
  menu.classList.add('menu');

  menu.innerHTML = `
    <div class="meals">
      <p class="meal-type-header">Soups</p>
      ${generateMealHTML(soups)}
    </div>
    <div class="main-dishes">
      <p class="meal-type-header">Main Dishes</p>
      ${generateMealHTML(mainDishes)}
    </div>
    <div class="deserts">
      <p class="meal-type-header">Deserts</p>
      ${generateMealHTML(deserts)}
    </div>
  `;

  content.appendChild(menu);
}

function generateMealHTML(mealType) {
  let mealHTML = '';
  mealType.forEach(meal => {
    mealHTML += `
      <div class="meal-container">
        <div class="meal-info-container">
          <p class="meal-name">${meal.name}</p>
          <p class="meal-calories">${meal.calories} cal.</p>
          <p class="meal-price">$${meal.price.toFixed(2)}</p>
        </div>
        <img class="meal-image" src="${meal.image}">        
      </div>
    `;
  });

  return mealHTML;
}

