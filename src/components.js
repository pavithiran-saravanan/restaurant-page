
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

function getFoodCard(food){
    const foodCard = document.createElement('div'); foodCard.classList.add('food-card');
    const imageContainer = document.createElement('div'); imageContainer.classList.add('food-image-container');
    const image = document.createElement('img'); image.classList.add('food-image'); image.src = food.src; imageContainer.appendChild(image);
    const detailsContainer = document.createElement('div'); detailsContainer.classList.add('food-details');
    const title = document.createElement('div'); title.classList.add('food-title'); title.textContent = food.title;
    const price = document.createElement('div'); price.classList.add('food-price'); price.textContent = food.price;
    const description = document.createElement('div'); description.classList.add('food-description'); description.textContent = food.desc;
    const btn = document.createElement('button'); btn.classList.add('cta-btn', 'btn-cart'); btn.textContent = 'Add to cart';
    detailsContainer.append(title, price, description);
    foodCard.append(imageContainer, detailsContainer, btn);
    return foodCard;
}

function getMenuSection(sectionName, foods){
    const section = document.createElement('div'); section.classList.add('category-container');
    section.append(getSectionTitle(sectionName));
    const sectionCards = document.createElement('div'); sectionCards.classList.add('food-card-container');
    foods.forEach(food => {
        sectionCards.append(getFoodCard(food));
    });
    section.id = sectionName.toLocaleLowerCase().split(' ').join('-'); 
    section.append(sectionCards);
    return section;
}

function getInput(label, placeholder, id, type){
    const container = document.createElement('div'); container.classList.add('text-input-container');
    const input = document.createElement('input'); input.classList.add('text-input', `input-${id}`); input.type = type; input.id = id; input.name = id; input.placeholder = placeholder;
    const inputLabel = document.createElement('label'); inputLabel.classList.add('text-label', `label-${id}`); inputLabel.for = id; inputLabel.textContent = label;
    input.required = true;
    if(type == 'tel') {input.pattern = '[0-9]+'; input.title = 'Enter a valid phone number'}
    container.append(inputLabel, input);
    return container;
}

export {renderCtaBar, renderWelcomeBanner, getSectionTitle, getCards, getFoodCard, getMenuSection, getInput};
