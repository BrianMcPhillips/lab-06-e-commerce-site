import { toUSD } from '../common/Utils.js';
function renderLineItem(lineItem, equipment) {
    const tr = document.createElement('tr');

    const nameContent = document.createElement('td');
    nameContent.className = 'align-left';
    nameContent.textContent = equipment.name;
    tr.appendChild(nameContent);

    const quantityContent = document.createElement('td');
    quantityContent.textContent = lineItem.quantity;
    tr.appendChild(quantityContent);

    const priceContent = document.createElement('td');
    priceContent.textContent = toUSD(equipment.price);
    tr.appendChild(priceContent);

    const totalContent = document.createElement('td');
    totalContent.className = 'line-item-total';
    const total = lineItem.quantity * equipment.price;
    totalContent.textContent = toUSD(total);
    tr.appendChild(totalContent);

    return tr;

}

export default renderLineItem;