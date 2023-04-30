import { forkJoin, of } from "rxjs";
import { tap } from "rxjs/operators";

const obs1$ = of("Store");
const obs2$ = of("Language");

forkJoin({
    store: obs1$,
    language: obs2$
})
    .pipe(
        tap(data => console.log(data))
    )
    .subscribe(({ store, language}) => {
        console.log(store, language);
    });