import food from './food.png';

export default function render () {
    const content = document.querySelector('.page-content');
    
    const brandName = document.createElement('h1');
    brandName.textContent = 'RFC';

    const foodImage = new Image();
    foodImage.src = food;
    foodImage.width = '500';

    const copy = document.createElement('p');
    copy.textContent = 'For those with pure food indulgence in mind, come next door and sate your desires with our ever changing internationally and seasonally inspired small plates.  We love food, lots of different food, just like you.';

    content.appendChild(brandName);
    content.appendChild(foodImage);
    content.appendChild(copy);
};