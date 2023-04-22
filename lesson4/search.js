const { debounceTime, fromEvent, of } = rxjs;
const { tap } = rxjs.operators;
const input = document.querySelector('input');
const input$ = fromEvent(input, 'input');
input$
    .pipe(
        debounceTime(5000)
    )
    .subscribe((event) => {
        console.log(event.target.value);
    });

const values$ = of(1,2,3,4,5,6,7);
values$.pipe(
    tap((value) =>  console.log(value))
).subscribe();