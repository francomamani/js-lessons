const person = {
    "name": "Franco",
    "age": 45
}

const copySpread = { ...person, job: "engineer", age: 30 };
const copyAssign = Object.assign(person, { job: "musician", age: 25 })

console.log(copySpread, copyAssign);
