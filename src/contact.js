import { getSectionTitle, renderCtaBar } from './components';
import { getInput } from './components';

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
    const desc = document.createElement('div'); desc.classList.add('contact-left-desc'); desc.textContent = "Contact us here for questions regarding KFC complaints, refunds, and dislikes or likes about your KFC experience!";
    const button = document.createElement('button'); button.classList.add('contact-left-button'); button.textContent = '123-456-789';
    contactLeft.append(stripe, title, desc, button);

    const form = document.createElement('form'); form.classList.add('form'); form.target = '#';

    const feedbackContainer = document.createElement('div'); feedbackContainer.classList.add('text-input-container');
    const feedback = document.createElement('textarea'); feedback.classList.add('text-input', 'textarea-input'); feedback.id = 'feedback'; feedback.name = 'feedback'; feedback.placeholder = 'Enter your feedback'; feedback.required = true;
    const feedbackLabel = document.createElement('label'); feedbackLabel.classList.add('text-label'); feedbackLabel.for = 'feedback'; feedbackLabel.textContent = 'Your Feedback *';
    feedbackContainer.append(feedbackLabel, feedback);

    const submitButton = document.createElement('button'); submitButton.classList.add('submit-button'); submitButton.textContent = 'Submit';
    form.append(getInput('Customer Name *', 'Enter name', 'customer-name', 'text')
                , getInput('Email *', 'Enter email', 'email', 'email')
                , getInput('Mobile Number *', 'Enter mobile number', 'mobile-number', 'tel')
                , feedbackContainer
                , submitButton);
    
    contactRight.append(form);
    contactMain.append(contactLeft, contactRight);
    contact.append(banner, contactMain);
    content.appendChild(contact);
};