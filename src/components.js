
function renderCtaBar () {
    const pageContent = document.querySelector('.page-content');
    const bar = document.createElement('div'); bar.classList.add('cta-bar');
    const text = document.createElement('span'); text.classList.add('cta-text'); text.textContent = "LET'S ORDER FOR DELIVERY, PICK UP, OR DINE-IN";
    const btn = document.createElement('button'); btn.classList.add('cta-btn'); btn.textContent = 'Start Order';
    bar.append(text, btn);
    pageContent.appendChild(bar);
}

export {renderCtaBar};
