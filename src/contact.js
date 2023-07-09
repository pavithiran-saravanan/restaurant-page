import { renderCtaBar } from './components';

export default function render () {
    renderCtaBar();
    const content = document.querySelector('.page-content');
    const contact = document.createElement('div');

    const banner = document.createElement('div'); banner.classList.add('contact-banner');
    const bannerContact = document.createElement('div'); bannerContact.classList.add('banner-contact'); bannerContact.textContent = 'Contact';
    const bannerText = document.createElement('div'); bannerText.classList.add('banner-text'); bannerText.textContent = 'Get In Touch';
    banner.append(bannerContact, bannerText);

    const contactMain = document.createElement('div'); contactMain.classList.add('contact-main');
    const contactLeft = document.createElement('div'); contactLeft.classList.add('contact-left-card');
    const contactRight = document.createElement('div'); contactRight.classList.add('contact-right-card');

    const stripe = document.createElement('div'); stripe.classList.add('welcome-stripe', 'contact-stripe');
    const title = document.createElement('div'); title.classList.add('contact-left-title'); title.textContent = "TELL US HOW WE'RE DOING";
    const desc = document.createElement('div'); desc.classList.add('contact-left-desc'); desc.textContent = "Contact us here for questions regarding RFC complaints, refunds, and dislikes or likes about your RFC experience!";
    const button = document.createElement('button'); button.classList.add('contact-left-button'); button.textContent = '123-456-789';
    contactLeft.append(stripe, title, desc, button);

    const form = document.createElement('div'); form.textContent = "Form";
    contactRight.append(form);

    contactMain.append(contactLeft, contactRight);
    contact.append(banner, contactMain);
    content.appendChild(contact);
};