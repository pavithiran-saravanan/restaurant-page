import food from './images/food.png';
import cat1 from './images/categories/CAT86.jpg';
import cat2 from './images/categories/CAT99.jpg';
import cat3 from './images/categories/CAT158.jpg';
import cat4 from './images/categories/CAT170.jpg';
import cat5 from './images/categories/CAT190.jpg';
import cat6 from './images/categories/CAT224.jpg';
import cat7 from './images/categories/CAT233.jpg';
import cat8 from './images/categories/CAT300.jpg';
import { renderCtaBar, renderWelcomeBanner, getSectionTitle, getCards } from './components';

export default function render () {
    const content = document.querySelector('.page-content');

    renderCtaBar();
    renderWelcomeBanner();
    const categoriesSection = document.createElement('div'); categoriesSection.classList.add('categories', 'section');
    const categoryNames = ['Peri Peri Chicken', 'Value Snackers', 'Chicken Rolls', 'Chicken Buckets', 'Biriyani Buckets', 'Box Meals', 'Burgers', 'French Fries'];
    const categoryImages = [cat1, cat2, cat3, cat4, cat5, cat6, cat7, cat8];
    categoriesSection.append(getSectionTitle(), getCards(categoryNames, categoryImages));
    
    const brandName = document.createElement('h1');
    brandName.textContent = 'RFC';

    const foodImage = new Image();
    foodImage.src = food;
    foodImage.width = '500';

    const copy = document.createElement('p');
    copy.textContent = 'For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.';

    content.append(categoriesSection, brandName, foodImage, copy);
};