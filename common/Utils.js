import starterEquipment from '../data/equipment.js';
export function toUSD(number) {
    return number.toLocaleString('en-US', {
        style: 'currency',
        currency: 'USD'
    });
}

export function findById(items, id) {
    for (let i = 0; i < items.length; i++) 
    { const item = items[i];
        if (item.id === id) {
            return item;
        
        }

    }
    return null;
}

function roundCurrency(amount) {
    return Math.round(amount * 100) / 100;

}

export function calcLineTotal(quantity, price) {
    const amount = quantity * price;
    return roundCurrency(amount);
}

export function calcOrderTotal(cart, equipments) {
    let orderTotal = 0;

    for (let i = 0; i < cart.length; i++) {
        const lineItem = cart[i];
        const equipment = findById(equipments, lineItem.id);
        const lineTotal = calcLineTotal(lineItem.quantity, equipment.price);
        orderTotal += lineTotal;
    }

    return roundCurrency(orderTotal);
}

export function getEquipment() {
    let equipment = JSON.parse(localStorage.getItem('EQUIPMENT'));

    if (!equipment) {
        localStorage.setItem('EQUIPMENT', JSON.stringify(starterEquipment));
        equipment = JSON.parse(localStorage.getItem('EQUIPMENT'));
    }

    return equipment;
}