// const addButton = [...document.getElementsByClassName('product__add')];
// const quantityControls = [...document.getElementsByClassName('product__quantity-control')];
// const quantityValue = [...document.getElementsByClassName('product__quantity-value')];
// const products = [...document.getElementsByClassName('product')];

// addButton.forEach((item) => {
// 	item.addEventListener('click', () => {
// 		console.log(item.closest('.product'));
// 		const product = item.closest('.product');
// 		const currentQuantity = product.querySelector('product__quantity-value').textContent;
// 		console.log(product.target.querySelector('product__title'));
// 	});
// })

const products = [...document.querySelectorAll('.product')];
const quantityControls = [...document.querySelectorAll('.product__quantity-controls')];
const cart = document.querySelector('.cart__products');

const cartCard = document.createElement('div');
const cartImage = document.createElement('img');
const cartCount = document.createElement('div');

quantityControls.forEach((item) => {
    item.firstElementChild.addEventListener('click', (e) => {
        if(item.children[1].textContent > 1) {
            item.children[1].textContent -= 1;
        };
    });

    item.lastElementChild.addEventListener('click', (e) => {
        item.children[1].textContent++;
    });
});

products.forEach((e) => {
    
    const productImage = e.querySelector('img');
    const addButton = e.querySelector('.product__add');
    const quantityValue = e.querySelector('.product__quantity-value');

    addButton.addEventListener('click', () => {
        if(quantityValue.textContent >= 1) {
            const cartProducts = [...document.querySelectorAll('.cart__product')];

            cartCard.classList.add('cart__product');
            cartCard.setAttribute('data-id', e.getAttribute('data-id'));

            cartImage.classList.add('cart__product-image');
            cartImage.setAttribute('src', productImage.getAttribute('src'));

            cartCount.classList.add('cart__product-count');
            cartCount.textContent = quantityValue.textContent;

            cart.insertAdjacentElement('afterbegin', cartCard);
        	cartCard.insertAdjacentElement('afterbegin', cartImage);
            cartImage.insertAdjacentElement('afterend', cartCount);

            const currentProduct = cartProducts.find((element) => element.getAttribute('data-id') === cartCard.getAttribute('data-id'));  
            if(currentProduct) {
                cartCard.remove();
                currentProduct.children[1].textContent = Number(quantityValue.textContent) + Number(currentProduct.children[1].textContent);
            } else {               
                cart.appendChild(cartCard.cloneNode(true));
                cart.firstChild.remove();
            };
        };
    });
});