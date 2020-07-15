import equipment from '../data/equipment.js';
import { findById } from '../common/Utils.js';
import renderLineItem from '../Shopping-Cart/renderLineItem.js';

const test = QUnit.test;

QUnit.module('Render Line Item');

test('renders a line item', assert => {
    const lineItem = {
        id:'monitors',
        quantity: 2
    };

    const monitors = findById(equipment, lineItem.id);
    const expected = '<tr><td class="align-left">Genelec 8010</td><td>2</td><td>$350.00</td><td class="line-item-total">$700.00</td></tr>';

    const dom = renderLineItem(lineItem, monitors);
    const html = dom.outerHTML;

    assert.equal(html, expected);
});
