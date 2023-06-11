var a = 2;
function fun1() {
    console.log(a);
    var a = 1;
}

fun1();
fun1();
fun1();
fun1();


let value1 = { a: 5};
let value2 = value1;
value2.a = 10;
console.log(value1);


let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);