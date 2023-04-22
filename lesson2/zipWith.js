import { of } from 'rxjs';
import { map, zipWith } from 'rxjs/operators';
/**
 * zipWith is used to combine several observable with match in quantity
 * **/
const observable1$ = of(1,2,3,4,5);
const observable2$ =  of(6,7,8,9,10);
const observable3$ =  of(11,12,13,14);

observable1$
    .pipe(
        zipWith(observable2$, observable3$, (valueA, valueB, valueC) => {
            console.log('valueC', valueC);
            return valueA + valueB + valueC;
        })
    ).subscribe((addition) => {
        console.log(addition);
    });