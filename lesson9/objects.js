let obj = {b: 8, c: 10};
const value = Object.create(obj);
value.a = 10;
console.log(value);

let x = { key: 'key' };
let y = { key: 'key' };
console.log(x === y);