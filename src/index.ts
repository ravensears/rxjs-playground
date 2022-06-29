import { Observable, of } from "rxjs";

//of creation function

of("Alice", "Ben", "Charlie").subscribe({
  next: (value) => console.log(value),
  complete: () => console.log("completed"),
});

// const names = new Observable<string>((subscriber) => {
//   subscriber.next("Alice");
//   subscriber.next("Ben");
//   subscriber.next("Charlie");
//   subscriber.complete();
// });

// names.subscribe({
//   next: (value) => console.log(value),
//   complete: () => console.log("complete"),
// });

// function ourOwnOf(...args: string[]): Observable<string> {
//   return new Observable<string>((subscriber) => {
//     for (let i = 0; i < args.length; i++) {
//       subscriber.next(args[i]);
//     }
//     subscriber.complete();
//   });
// }

// const interval = new Observable<number>((subscriber) => {
//   let counter = 1;

//   const intervalId = setInterval(() => {
//     console.log("Emitted", counter);
//     subscriber.next(counter++);
//   }, 1000);

//   return () => {
//     clearInterval(intervalId);
//   };
// });

// const subscription = interval.subscribe((value) => console.log(value));

// setTimeout(() => {
//   subscription.unsubscribe();
// }, 10000);

// const observable = new Observable<string>((subscriber) => {
//   subscriber.next("Alice");
//   subscriber.next("Ben");
//   setTimeout(() => {
//     subscriber.next("Charlie");
//   }, 2000);
//   setTimeout(() => {
//     subscriber.error(new Error("Failure"));
//   }, 4000);
//   return () => {
//     console.log("Teardown");
//   };
// });

// observable.subscribe({
//   next: (value) => console.log(value),
//   error: (err) => console.log(err.message),
//   complete: () => console.log("Completed"),
// });
