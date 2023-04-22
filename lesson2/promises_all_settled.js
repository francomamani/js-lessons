import { of } from "rxjs";
import { zipWith } from "rxjs/operators";

const promises = [
    Promise.reject('fails'),
    Promise.resolve('success'),
    Promise.reject('fails again')
];

/*
Promise.allSettled(promises)
.then((response) => {
    console.log(response);
});*/

const response = await Promise.allSettled(promises);
console.log(response);