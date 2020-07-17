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
    const numberInput = document.createElement('input');
    numberInput.type = 'number';
    numberInput.value = 1;
    numberInput.min = 1;


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
                quantity: numberInput.value
            };

            cart.push(initializeCartItem);
        
        } else {
            itemInCart.quantity = Number(itemInCart.quantity) + Number(numberInput.value);

        }
    
        const stringCart = JSON.stringify(cart);
        localStorage.setItem('CART', stringCart);
        alert(numberInput.value + equipment.name + ' added to cart');
    });

    p.append(numberInput, button);


    const descrp = document.createElement('p');
   
    descrp.textContent = equipment.description;
    
    
    li.appendChild(p);
    li.appendChild(descrp);

    return li;

}

