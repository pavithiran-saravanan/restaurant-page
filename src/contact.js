export default function render () {
    const content = document.querySelector('.page-content');

    const contact = document.createElement('div');

    const pageTitle = document.createElement('h1');
    pageTitle.textContent = 'Contact';

    const pageContent = document.createElement('p');
    pageContent.textContent = 'Contact Page Details';

    contact.appendChild(pageTitle);
    contact.appendChild(pageContent);

    content.appendChild(contact);
};