const promise1 = Promise.resolve(100);
const promise2 = 52;
const promise3 = new Promise((resolve, reject) => {
    if (Math.random() > 0.5) {
        setTimeout(resolve, 100, 'success');
    } else {
        setTimeout(reject, 100, new Error('fails'));
    }
});

Promise.all([promise1, promise2, promise3])
.then((response) => {
    console.log(response)
})
.catch((error) => {
    console.error(error.message);
});
