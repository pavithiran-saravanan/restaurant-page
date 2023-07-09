import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';
import appleStoreImage from './images/footer/apple.svg';
import playStoreImage from './images/footer/google_play.svg';
import rfcLogo from './images/footer/RFC_Logo.svg';
import bucketCartIcon from './images/bucket_cart_icon.svg';
import kfcLogo from './images/kfc.svg';

// Create 3 button -> home, menu and contact. Add event listeners to load the crct page content.
const content = document.querySelector('.content');
const stickyHeader = document.createElement('header'); stickyHeader.classList.add('sticky-header');
const navBar = document.createElement('ul'); navBar.classList.add('nav-bar');
const homeButton = document.createElement('img'); homeButton.src = kfcLogo; homeButton.width = '70'; homeButton.classList.add('kfc-logo');
const menuButton = document.createElement('li'); menuButton.textContent = 'Menu';
const contactButton = document.createElement('li'); contactButton.textContent = 'Contact';

function goToHome(){
    clear();
    home();
    homeButton.classList.add('selected');
}
homeButton.addEventListener('click', (e) => {
    goToHome();
});

function goToMenu(){
    clear();
    menu();
    menuButton.classList.add('selected');
}
menuButton.addEventListener('click', (e) => {
    goToMenu();
});

function goToContact(){
    clear();
    contact();
    contactButton.classList.add('selected');
}
contactButton.addEventListener('click', (e) => {
    goToContact();
});

const bucketCartContainer = document.createElement('div'); bucketCartContainer.classList.add('bucket-cart-container');
const bucketCart = document.createElement('img'); bucketCart.classList.add('bucket-cart'); bucketCart.src = bucketCartIcon;
bucketCartContainer.append(bucketCart);

const navBarContainer = document.createElement('div'); navBarContainer.classList.add('nav-bar-container');
navBar.append(homeButton, menuButton, contactButton);
homeButton.classList.add('selected');
stickyHeader.append(navBar, bucketCartContainer);
content.appendChild(stickyHeader);

const pageContent = document.createElement('div'); pageContent.classList.add('page-content');
content.appendChild(pageContent);
home();

// Function to clear .content
function clear() {
    pageContent.innerHTML = '';
    homeButton.classList.remove('selected');
    menuButton.classList.remove('selected');
    contactButton.classList.remove('selected');
}

// Append footer to the bottom
const footer = document.createElement('div'); footer.classList.add('footer');

const links = document.createElement('div'); links.classList.add('footer-links');
const homeLink = document.createElement('a'); homeLink.classList.add('footer-link', 'home-link'); homeLink.textContent = 'Home'; homeLink.onclick = goToHome;
const menuLink = document.createElement('a'); menuLink.classList.add('footer-link'), 'menu-link'; menuLink.textContent = 'Menu'; menuLink.onclick = goToMenu;
const contactLink = document.createElement('a'); contactLink.classList.add('footer-link', 'contact-link'); contactLink.textContent = 'Contact'; contactLink.onclick = goToContact;
links.append(homeLink, menuLink, contactLink);

const footerLogoContainer = document.createElement('div'); footerLogoContainer.classList.add('footer-logo-container');
const footerLogo = document.createElement('img'); footerLogo.classList.add('footer-logo'); footerLogo.src = rfcLogo;
footerLogoContainer.append(footerLogo);

const storeLinks = document.createElement('div'); storeLinks.classList.add('store-links-container');
const playContainer = document.createElement('div'); playContainer.classList.add('store-img-container', 'play-img-container');
const playImage = document.createElement('img'); playImage.classList.add('playstore-image'); playImage.src = playStoreImage;
playContainer.append(playImage);
const appleContainer = document.createElement('div'); appleContainer.classList.add('store-img-container', 'apple-img-container');
const appleImage = document.createElement('img'); appleImage.classList.add('applestore-image'); appleImage.src = appleStoreImage;
appleContainer.append(appleImage);
storeLinks.append(playContainer, appleContainer);

footer.append(footerLogoContainer, links, storeLinks);
document.body.append(footer);