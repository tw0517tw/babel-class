const A = require('./lib').A;
const B = require('./lib').default;

const a = new A(1)
const b = new B(2);

console.log(a.prop === 1); // true
console.log(b.prop === 2); // false
console.log(b.prop); // undefined
