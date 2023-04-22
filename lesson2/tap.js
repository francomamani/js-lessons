import { from } from 'rxjs';
import { tap } from 'rxjs/operators';
const numbers$ = from([1,2,3,4,5]);

numbers$.pipe(
    tap((value) => console.log(`received value ${value}`))
).subscribe((response) => {

});