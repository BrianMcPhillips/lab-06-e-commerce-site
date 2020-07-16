import { findById } from '../common/Utils.js';

export function renderEquipment(equipment) {
    const li = document.createElement('li');
    li.className = equipment.category;
    //li.title = equipment.description;

    const h3 = document.createElement('h3');
    h3.textContent = equipment.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = '../data/photos/' + equipment.image;
    img.alt = equipment.name + ' image';
    li.appendChild(img);

    const p = document.createElement('p');
    p.className = 'price';

    const usd = `$ ${equipment.price.toFixed(2)} `;
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = equipment.id;
    button.addEventListener('click', () => {
        const initializeEmptyCart = '[]';
        const cartInLocalStorage = localStorage.getItem('CART') || initializeEmptyCart;
        const cart = JSON.parse(cartInLocalStorage);
    
        let itemInCart = findById(cart, equipment.id);
        if (!itemInCart) {
            const initializeCartItem = {
                id: equipment.id,
                quantity: 1
            };

            cart.push(initializeCartItem);
        
        } else {
            itemInCart.quantity++;

        }
    
        const stringCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringCart);
        alert('1 ' + equipment.name + ' added to cart');
    });
    p.appendChild(button);


    const descrp = document.createElement('p');
   
    descrp.textContent = equipment.description;
    
    
    li.appendChild(p);
    li.appendChild(descrp);

    return li;

}

