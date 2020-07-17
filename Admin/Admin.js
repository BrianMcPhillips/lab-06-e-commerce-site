import { getEquipment } from '../common/Utils.js';
const myForm = document.getElementById('form');

myForm.addEventListener('submit', (event) => {

    event.preventDefault();
    
    const formData = new FormData(myForm);
    const newProduct = {
        id: formData.get('id'),
        name: formData.get('name'),
        description: formData.get('description'),
        image: formData.get('image'),
        price: formData.get('price'),

    };
    const existingProduct = getEquipment();

    existingProduct.push(newProduct);

    const stringyEquipment = JSON.stringify(existingProduct);

    localStorage.setItem('EQUIPMENT', stringyEquipment);

    window.location = '../Products/index.html';
});
