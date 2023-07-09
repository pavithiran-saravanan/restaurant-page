import { renderCtaBar } from './components';

export default function render () {
    renderCtaBar();
    const content = document.querySelector('.page-content');
    const contact = document.createElement('div');

    const banner = document.createElement('div'); banner.classList.add('contact-banner');
    const bannerContact = document.createElement('div'); bannerContact.classList.add('banner-contact'); bannerContact.textContent = 'Contact';
    const bannerText = document.createElement('div'); bannerText.classList.add('banner-text'); bannerText.textContent = 'Get In Touch';
    banner.append(bannerContact, bannerText);

    contact.append(banner);
    content.appendChild(contact);
};