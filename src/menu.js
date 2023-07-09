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

    // Menu Nav Bar
    const menuNavCard = document.createElement('div'); menuNavCard.classList.add('menu-nav-card');
    const menuNavTitle = document.createElement('div'); menuNavTitle.classList.add('menu-nav-title'); menuNavTitle.textContent = 'RFC Menu';
    const menuNavList = document.createElement('div'); menuNavList.classList.add('menu-nav-list'); 
    const list = ['Peri Peri Chicken', 'Value Snackers', 'Chicken Rolls', 'Chicken Buckets', 'Biryani Buckets', 'Box Meals', 'Burgers', 'Beverages'];
    list.forEach(item => {
        const listItem = document.createElement('a'); listItem.classList.add('menu-nav-item'); listItem.textContent = item;
        listItem.href = '#' + item.toLocaleLowerCase().split(' ').join('-'); 
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
    const periSection = getMenuSection('Peri Peri Chicken', periPeriChicken); 

    // Add Value Section Menu
    const valueSnackers = [];
    valueSnackers.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    valueSnackers.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    valueSnackers.push(new Food('Peri Peri 6pc Chicken Strips', '₹299.05', 'Save 16% on 6 Spicy Peri Peri chicken boneless strips', peri4));
    const valueSection = getMenuSection('Value Snackers', valueSnackers);
    
    // Add Chicken Rolls Menu
    const chickenRolls = [];
    chickenRolls.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    chickenRolls.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    chickenRolls.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    const chickenRollsSection = getMenuSection('Chicken Rolls', chickenRolls); 

    // Add Chicken Buckets Menu
    const chickenBuckets = [];
    chickenBuckets.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    chickenBuckets.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    chickenBuckets.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    const chickenBucketsSection = getMenuSection('Chicken Buckets', chickenBuckets);

    // Add Biryani Buckets Menu
    const biryaniBuckets = [];
    biryaniBuckets.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    biryaniBuckets.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    biryaniBuckets.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    const biryaniBucketsSection = getMenuSection('Biryani Buckets', biryaniBuckets); 

    // Add Box Meals Menu
    const boxMeals = [];
    boxMeals.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    boxMeals.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    boxMeals.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    const boxMealsSection = getMenuSection('Box Meals', boxMeals);

    // Add Burgers Menu
    const burgers = [];
    burgers.push(new Food('Peri Peri 10 Pc Chicken Strips & 2 Dips', '₹499.05', 'Save 24% on 10 Spicy Peri Peri chicken boneless strips with 2 Dips', peri2));
    burgers.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    burgers.push(new Food('Peri Peri 6pc Chicken Strips', '₹299.05', 'Save 16% on 6 Spicy Peri Peri chicken boneless strips', peri4));
    const burgersSection = getMenuSection('Burgers', burgers); 

    // Add Beverages Menu
    const beverages = [];
    beverages.push(new Food('5 Leg Pc & 2 Dips Bucket', '₹519.05', 'Save Rs. 120 on 5 Peri Peri Leg Pieces, paired with 2 delicious dips (20gm each)', peri1));
    beverages.push(new Food('Peri Peri 10 Leg Pc & 4 Dips', '₹948.57', 'Save Rs. 334 on 10 Peri Peri Leg Pieces & 4 Dips (20 gm each)', peri3));
    beverages.push(new Food('Peri Peri 6pc Chicken Strips', '₹299.05', 'Save 16% on 6 Spicy Peri Peri chicken boneless strips', peri4));
    const beveragesSection = getMenuSection('Beverages', beverages);   

    menuSections.append(periSection, valueSection, chickenRollsSection, chickenBucketsSection, biryaniBucketsSection, boxMealsSection, burgersSection, beveragesSection);
    menu.append(menuSections);
    content.appendChild(menu);
};