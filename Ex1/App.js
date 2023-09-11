const operations = require('./Math.js');
let a=5;
let b=3; 

let sum = operations.sum(a,b);
let substraction = operations.substraction(a,b); 
let product = operations.product(a,b);
let division = operations.division(a,b);

console.log(sum);
console.log(substraction);
console.log(product);
console.log(division);
console.log(operations.pi);