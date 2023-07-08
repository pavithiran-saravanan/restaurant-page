
function renderCtaBar() {
    const pageContent = document.querySelector('.page-content');
    const bar = document.createElement('div'); bar.classList.add('cta-bar');
    const text = document.createElement('span'); text.classList.add('cta-text'); text.textContent = "LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";
    const btn = document.createElement('button'); btn.classList.add('cta-btn'); btn.textContent = 'Start Order';
    bar.append(text, btn);
    pageContent.appendChild(bar);
}

function renderWelcomeBanner(){
    const pageContent = document.querySelector('.page-content');
    const banner = document.createElement('div'); banner.classList.add('welcome-banner');
    const container = document.createElement('div'); container.classList.add('welcome-container');
    const stripe = document.createElement('div'); stripe.classList.add('welcome-stripe');
    const text = document.createElement('div'); text.classList.add('welcome-text'); text.textContent = 'WELCOME TO RFC!';
    container.append(stripe, text);
    banner.append(container);
    pageContent.append(banner);
}

function getSectionTitle(titleName = 'Browse Categories'){
    const sectionHeader = document.createElement('div'); sectionHeader.classList.add('section-header');
    const title = document.createElement('div'); title.textContent = titleName; title.classList.add('section-title');
    const lineBox = document.createElement('div'); lineBox.classList.add('line-box');
    sectionHeader.append(title, lineBox);
    return sectionHeader;
}

function getCards(categories = ['Peri Peri Chicken', 'Chicken Nuggets', 'Bucket Chicken'], images){
    const cards = document.createElement('div'); cards.classList.add('cards', 'cards-categories');
    for(let i = 0; i < categories.length; i++){
        const card = document.createElement('div'); card.classList.add('card', 'card-category');
        const imageContainer = document.createElement('div'); imageContainer.classList.add('category-img-container');
        const image = document.createElement('img'); image.classList.add('category-img'); image.src = images[i];
        const text = document.createElement('div'); text.classList.add('category-title'); text.textContent = categories[i];
        imageContainer.append(image);
        card.append(imageContainer, text);
        cards.append(card);
    }
    return cards;
}

export {renderCtaBar, renderWelcomeBanner, getSectionTitle, getCards};