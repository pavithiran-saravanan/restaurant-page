import { renderCtaBar } from './components';
import { getFoodCard } from './components';
import { getSectionTitle } from './components';
import { getMenuSection } from './components';
import peri1 from './images/periperi/peri1.jpg';
import peri2 from './images/periperi/peri2.jpg';
import peri3 from './images/periperi/peri3.jpg';
import peri4 from './images/periperi/peri4.jpg';

export default function render () {
    renderCtaBar();
    const content = document.querySelector('.page-content');
    const menu = document.createElement('div'); menu.classList.add('menu');

    const menuNavCard = document.createElement('div'); menuNavCard.classList.add('menu-nav-card');
    const menuNavTitle = document.createElement('div'); menuNavTitle.classList.add('menu-nav-title'); menuNavTitle.textContent = 'RFC Menu';
    const menuNavList = document.createElement('div'); menuNavList.classList.add('menu-nav-list'); 
    const list = ['PERI PERI CHICKEN', 'VALUE SNACKERS', 'CHICKEN ROLLS', 'CHICKEN BUCKETS', 'BIRYANI BUCKETS', 'BOX MEALS', 'BURGERS'];
    list.forEach(item => {
        const listItem = document.createElement('div'); listItem.classList.add('menu-nav-item'); listItem.textContent = item;
        menuNavList.append(listItem);
    });
    const stripe = document.createElement('div'); stripe.classList.add('welcome-stripe');
    menuNavCard.append(stripe, menuNavTitle, menuNavList);
    menu.append(menuNavCard);

    const menuSections = document.createElement('div'); menuSections.classList.add('menu-sections');

    // Food class
    class Food {
        constructor (title, price, desc, src){
            this.src = src;
            this.title = title;
            this.price = price;
            this.desc = desc;
        }
    }
    
    // Add Peri Peri Chicken Menu
    const periPeriChicken = [];
    periPeriChicken.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    periPeriChicken.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    periPeriChicken.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    periPeriChicken.push(new Food('Peri Peri 6pc Chicken Strips', '₹299.05', 'Save 16% on 6 Spicy Peri Peri chicken boneless strips', peri4));
    const periSection = getMenuSection('Peri Peri Chicken', periPeriChicken); periSection.id = 'peri-peri-chicken';

    // Add Value Section Menu
    const valueSnackers = [];
    valueSnackers.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    valueSnackers.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    valueSnackers.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    valueSnackers.push(new Food('Peri Peri 6pc Chicken Strips', '₹299.05', 'Save 16% on 6 Spicy Peri Peri chicken boneless strips', peri4));
    const valueSection = getMenuSection('Value Snackers', valueSnackers); valueSection.id = 'value-snackers';

    menuSections.append(periSection, valueSection);
    menu.append(menuSections);
    content.appendChild(menu);
};