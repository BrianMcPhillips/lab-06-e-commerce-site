import starterEquipment from '../data/equipment.js';
import { renderEquipment } from './render-equipment.js';

let equipment = JSON.parse(localStorage.getItem('EQUIPMENT'));
if (!equipment) {
    localStorage.setItem('EQUIPMENT', JSON.stringify(starterEquipment));


    equipment = JSON.parse(localStorage.getItem('FRUITS'));
}
const list = document.getElementById('equipment');


for (let i = 0; i < equipment.length; i++) {
    const equipmentList = equipment[i];
    const domUpdate = renderEquipment(equipmentList);
    list.appendChild(domUpdate);
}
