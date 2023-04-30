import { interval, merge } from 'rxjs';

const source1$ = interval(1000);
const source2$ = interval(2000);

const merged$ = merge(source1$, source2$);

merged$.subscribe(value => {
    console.log('Merged value:', value);
});