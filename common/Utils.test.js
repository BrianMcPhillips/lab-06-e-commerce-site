import equipment from '../data/equipment.js';
import cart from '../data/cart.js';
import { findById, calcOrderTotal, } from './Utils.js';

//import renderLineItem from '../Shopping-Cart/renderLineItem.js';

const test = QUnit.test;

QUnit.module('Utilities');

test('find product by id', assert => {
    const id = 'monitors';
    const expected = 'Genelec 8010';

    const foundEquipment = findById(equipment, id);

    assert.ok(foundEquipment);
    assert.equal(foundEquipment.name, expected);


});

test('find product by id returns null if not found', assert =>{
    const id = 'not found';
    const expected = null;

    const foundEquipment = findById(equipment, id);

    assert.equal(foundEquipment, expected);
});

test('calculate order total', (assert) => {
    const expected = 1979.00;

    const orderTotal = calcOrderTotal(cart, equipment);

    assert.equal(orderTotal, expected);

});