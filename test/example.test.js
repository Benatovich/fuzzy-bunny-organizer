// IMPORT MODULES under test here:
// import { example } from '../example.js';
const test = QUnit.test;

// // I think this renderBunny function should work, but I think the way displayFamilies is written works better
// function renderBunny(bunny) {
//     // create a p tag
//     const bunnyEl = document.createElement('p');
//     // add the 'bunny' css class no matter what
//     bunnyEl.classList.add('bunny');

//     bunnyEl.textContent = bunny.name;

//     bunnyEl.addEventListener('click', async() => {
//         await deleteBunny(bunny.id);
//         const updatedFamilies = await getFamilies();
//         displayFamilies(updatedFamilies);
//     });
// }


test('time to test a renderBunny(bunny)', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = true;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderBunny(bunny);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected, 'should return a p tag ');
});
