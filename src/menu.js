import { renderCtaBar } from './components';

export default function render () {
    renderCtaBar();
    const content = document.querySelector('.page-content');

    const menu = document.createElement('div');
    
    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Menu';

    const pageContent = document.createElement('p');
    pageContent.textContent = 'Menu Page Details';

    menu.appendChild(pageTitle);
    menu.appendChild(pageContent);

    content.appendChild(menu);
};