// IMPORT MODULES under test here:
import { renderEquipment } from '../Products/render-equipment.js';

const test = QUnit.test;

test('test to see if function renders array item', (expect) => {
    const item = {
        id: 'audio-interface',
        name: 'Solid State Logic SSL2+',
        image: 'SSL SSL2+.jpeg',
        description: 'Awesome beginner level Audio Interface from a Legendary Company',
        category: 'interfaces',
        price: 280.00,
        cost: 140.00
    };
    //Arrange
    // Set up your arguments and expectations
    const expected = '<li class="interfaces"><h3>Solid State Logic SSL2+</h3><img src="../data/photos/SSL SSL2+.jpeg" alt="Solid State Logic SSL2+ image"><p class="price">$ 280.00 <input type="number" min="1"><button value="audio-interface">Add to cart</button></p><p>Awesome beginner level Audio Interface from a Legendary Company</p></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderEquipment(item);

    const actualOHTML = actual.outerHTML;

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actualOHTML, expected);
});
