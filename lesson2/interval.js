import { interval, of } from 'rxjs';
import {map, zipWith} from 'rxjs/operators';

const list$ = of(...[1,2,3]);
interval(1000)
    .pipe(
        zipWith(list$),
        map((value) => {
            console.log('value', value)
        })
    ).subscribe(() => {})