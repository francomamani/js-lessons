import { of } from 'rxjs';
import { map, catchError } from "rxjs/operators";

const observable$ = of(1,2,3,4,5);

observable$.pipe(
    map( value => {
        if (value === 3) throw new Error('there is an error!');
        return value;
    }),
    catchError((error) => {
        console.error('error.message', error.message);
        return of(-1);
    })
).subscribe((response) => {
    console.log('response', response);
});