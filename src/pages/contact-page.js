import '../styles/contact-page.css';
import mapMarker from '../images/map-marker-orange.svg';
import phone from '../images/phone.svg';
import email from '../images/email.svg';

export default function renderContactPage() {
  const content = document.querySelector('#content');

  const contact = document.createElement('div');
  contact.classList.add('contact');

  contact.innerHTML = `
    <header class="contact-header-container">
      <p class="contact-header">CONTACT US</p>
      <div class="header-pseudo-border"></div>
    </header>
    <form>
      <input class="contact-input text-input" type="text" name="name" placeholder="Your name*" required>
      <input class="contact-input text-input" type="text" name="email" placeholder="Your e-mail*" required>
      <input class="contact-input text-input" type="text" name="phone" placeholder="Your phone">
      <textarea rows="10" class="contact-input textarea-input" name="message" placeholder="Message*" required></textarea>
      <button class="send-message-btn">SEND MESSAGE</button>
    </form>
    <footer>
      <div class="contact-card-container">
        <div class="card-logo-container">
          <img class="contact-footer-logo" src="${mapMarker}" alt="">
        </div>
        <div class="card-info-container">
          <div class="card-header">Postal Address</div>
          <div class="card-info">
            <p>Some Random/Company Name Inc. 9841-9844</p>
            <p>Cool Road, Harvard, RS7 AA45</p>
          </div>
        </div>
      </div>
      <div class="contact-card-container">
        <div class="card-logo-container">
          <img class="contact-footer-logo" src="${phone}" alt="">
        </div>
        <div class="card-info-container">
          <div class="card-header">Phones</div>
          <div class="card-info-phones">
            <div class="keys">
              <p>Phone:</p>
              <p>FAX:</p>
            </div>
            <div class="values">
              <p>+1 800 603 6035</p>
              <p>+1 800 889 9898</p>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-card-container">
        <div class="card-logo-container">
          <img class="contact-footer-logo" src="${email}" alt="">
        </div>
        <div class="card-info-container">
          <div class="card-header">Email</div>
          <div class="card-info">
            <p>mail@myrestaurant.org</p>
          </div>
        </div>
      </div>
</footer>
  `;

  content.appendChild(contact);
}