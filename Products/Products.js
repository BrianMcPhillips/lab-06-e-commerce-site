import equipment from '../data/equipment.js';
import renderEquipment from './render-equipment.js';

const list = document.getElementById('equipment');

for (let i = 0; i < equipment.length; i++) {
    const equipmentList = equipment[i];
    const domUpdate = renderEquipment(equipmentList);
    list.appendChild(domUpdate);
}
