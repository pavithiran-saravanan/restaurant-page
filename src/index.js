import home from './home';
import menu from './menu';
import contact from './contact';

// Create 3 button -> home, menu and contact. Add event listeners to load the crct page content.
const content = document.querySelector('.content');
const buttons = document.createElement('div'); 
const homeButton = document.createElement('button'); homeButton.textContent = 'Home';
const menuButton = document.createElement('button'); menuButton.textContent = 'Menu';
const contactButton = document.createElement('button'); contactButton.textContent = 'Contact';

homeButton.addEventListener('click', (e) => {
    clear();
    home();
});

menuButton.addEventListener('click', (e) => {
    clear();
    menu();
});

contactButton.addEventListener('click', (e) => {
    clear();
    contact();
});

buttons.append(homeButton, menuButton, contactButton);
content.appendChild(buttons);
const pageContent = document.createElement('div'); pageContent.classList.add('page-content');
content.appendChild(pageContent);
home();

// Function to clear .content
function clear() {
    pageContent.innerHTML = '';
}
