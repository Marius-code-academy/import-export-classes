import PersonConstructor from './Person.js';
import dauginti, { addNumbers as pridetiSkaicius, subtractNumbers } from './utilities.js';

const marius = new PersonConstructor('Marius', 25);

marius.introduce();

console.log(pridetiSkaicius(1, 3));
console.log(subtractNumbers(1, 3));
console.log(dauginti(2, 3));
