//import cart from '../data/cart.js';
import equipment from '../data/equipment.js';
import { findById, calcOrderTotal, toUSD } from '../common/utils.js';
import renderLineItem from './renderLineItem.js';

const tablebody = document.querySelector('#table-body');
const orderTotalContent = document.getElementById('order-total-cell');
const placeOrderButton = document.getElementById('place-order');

const initializeEmptyCart = '[]';
const cartInLocalStorage = localStorage.getItem('CART') || initializeEmptyCart;

const cart = JSON.parse(cartInLocalStorage);
for (let i = 0; i < cart.length; i++) {
    const lineitem = cart[i];
    const meh = findById(equipment, lineitem.id);
    const dom = renderLineItem(lineitem, meh);

    tablebody.appendChild(dom);
}

const orderTotal = calcOrderTotal(cart, equipment);
orderTotalContent.textContent = toUSD(orderTotal); 

if (cart.length === 0) {
    placeOrderButton.disabled = true;
}
else {
    placeOrderButton.addEventListener('click', () => {
        localStorage.removeItem('CART');

        alert('Order placed:\n' + JSON.stringify(cart, true, 2));
        window.location = '../';
    });
}