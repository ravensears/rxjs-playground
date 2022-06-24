import { Observable } from "rxjs";

const interval = new Observable<number>((subscriber) => {
  let counter = 1;

  const intervalId = setInterval(() => {
    console.log("Emitted", counter);
    subscriber.next(counter++);
  }, 1000);

  return () => {
    clearInterval(intervalId);
  };
});

const subscription = interval.subscribe((value) => console.log(value));

setTimeout(() => {
  subscription.unsubscribe();
}, 10000);

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
