const list = [1, 2, 3, 4, 5, 6];
const list3 = [{age: 2, number: 2}, {age: 3, number: 1}, {age: 5, number: 1}, {age: 7, number: 1}, {age: 4, number: 2}];
const list4 = [
    {age: 31, name: 'Franco Jesus Mamani Pozo'},
    {age: 12, name: 'Noelia'},
    {age: 32, name: 'Francisco'},
    {age: 12, name: 'Cristina'},
    {age: 23, name: 'Daniela'}
];
//4 + 8 = 12
//{age: 56}
const list2 = list.map((item) => item * 2)
    .map((item) => item * 3)
    .map((item) => item * 2);

const result = list.reduce((previousValue, currentValue) => {
    return previousValue + currentValue;
}, 0);

const sage = list3.reduce((previousValue, currentValue) => {
    return !(currentValue.age % 2) ? previousValue + currentValue.age * currentValue.number : previousValue;
}, 0);
const ageAVG = {};
ageAVG.age = list4.reduce((acc, cur) => {
    return {
        age: acc.age + cur.age
    };
}, { age: 0 }).age / list4.length;
//console.log(ageAVG);

let search = 'ic';
const results = list4.filter((person) => {
    return person.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
});
/**
 * Devolver coincidencias de letras search
 * */
const results2 = list4.filter((person) => {
    return  /[^o]$/.test(person.name);
});

//console.log(results2);

const value = "29:08";
const response = /^([0-1]\d|2[0-3]):[0-5]\d$/.test(value) ? 'correcto': 'incorrecto';

const value2 = "aác";
const response2 =/^a\u00E1c$/.test(value2);
//console.log(response2);

const words = ['TablaExcel', 'TablaWord', 'TablaBateriasAlcalinas'];

const conversion = words.map((word)=>{
    return word.replace(/([A-Z])/g, " $1")
        .replace(' Tabla', 'Tabla de');
});
const word = "TablaEspejo";

const conversion2 = words.map((word)=>{
    return word.split("")
        .map(letter => {
            if(letter.charCodeAt() >= 65 && letter.charCodeAt() <= 90) {
                return ` ${letter}`;
            } else {
                return letter;
            }
        }).join('').replace(' Tabla', 'Tabla de');
});

console.log(conversion2);

const objeto = { a: 5, b: 6, c: 7};
// for imprimir por consola las variables y los valores
// ej .1
// a, b, c
// 5, 6, 7.

