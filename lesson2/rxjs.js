import { interval } from "rxjs";
import { zipWith, map, delay, take } from "rxjs/operators";

interval(1000).pipe(
    take(5),
    delay(500)
)
    .subscribe((item) => {
    console.log(item);
});

const list = ["Franco", "Jesus", "Wanda", "Sidey"];

interval(1000)
    .pipe(
        zipWith(list),
        map(([_, item]) => item)
    ).subscribe((item) => {
        console.log(item);
    });
