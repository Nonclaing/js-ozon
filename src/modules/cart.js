'use strict';

export default cart;

function cart() {
    const cartButton = document.getElementById('cart');
    const cart = document.querySelector('.cart');
    const cartCloseButton = cart.querySelector('.cart-close');

    cartButton.addEventListener('click', openCart);

    cart.addEventListener('click', (event) => {
        if (event.target == event.currentTarget || event.target.className.indexOf('cart-close') != -1) {
            closeCart();
        }
    });

    function openCart() {
        cart.style.display = 'flex';
    }

    function closeCart() {
        cart.style.display = 'none';
    }
}