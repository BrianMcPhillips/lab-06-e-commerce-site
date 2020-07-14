function renderEquipment(equipment) {
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

    const usd = '$' + equipment.price.toFixed(2);
    p.textContent = usd;

    const button = document.createElement('button');
    button.textContent = 'Add to cart';
    button.value = equipment.code;
    p.appendChild(button);

    const descrp = document.createElement('p');
   
    descrp.textContent = equipment.description
    
    
    li.appendChild(p);
    li.appendChild(descrp);

    return li;

}

export default renderEquipment;