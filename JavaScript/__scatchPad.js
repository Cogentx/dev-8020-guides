console.clear();

const message = 'one.two.three';

// replace all dots with spaces
// one two three

// Bad
console.log(message.replace('.', ' ')); //one two.three

// Way #1 - Okay
console.log(message.replace(/\./g, ' ')); // one two three

// Way #2 - Better
const escapeRegEx = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
console.log(message.replace(new RegExp(escapeRegEx('.'), 'g'), ' ')); // one two three

// Way 3 - Best Old Way - not great because creating an array which is immediately discarded
console.log(message.split('.').join(' ')); // one two three

// Way #4 - Best New Way - in JS2021
console.log(message.replaceAll('.', ' '));
