import home from './home';
import menu from './menu';
import contact from './contact';
import './style.css';

// Create 3 button -> home, menu and contact. Add event listeners to load the crct page content.
const content = document.querySelector('.content');
const stickyHeader = document.createElement('header'); stickyHeader.classList.add('sticky-header');
const navBar = document.createElement('ul'); navBar.classList.add('nav-bar');
const homeButton = document.createElement('li'); homeButton.textContent = 'Home';
const menuButton = document.createElement('li'); menuButton.textContent = 'Menu';
const contactButton = document.createElement('li'); contactButton.textContent = 'Contact';

homeButton.addEventListener('click', (e) => {
    clear();
    home();
    homeButton.classList.add('selected');
});

menuButton.addEventListener('click', (e) => {
    clear();
    menu();
    menuButton.classList.add('selected');
});

contactButton.addEventListener('click', (e) => {
    clear();
    contact();
    contactButton.classList.add('selected');
});

navBar.append(homeButton, menuButton, contactButton);
homeButton.classList.add('selected');
stickyHeader.appendChild(navBar);
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
