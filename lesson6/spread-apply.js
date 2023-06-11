function add(x, y) {
    return x + y;
}

const args = [2, 3];

// with spread

console.log(add(...args));

// with no spread

console.log(add.apply(null, args));