import { Observable } from "rxjs";

const observable = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => {
    subscriber.next("Charlie");
  }, 2000);
  // setTimeout(() => {
  //   subscriber.error(new Error("Failure"));
  // }, 4000);
  return () => {
    console.log("Teardown");
  };
});

observable.subscribe({
  next: (value) => console.log(value),
  // error: (err) => console.log(err.message),
  complete: () => console.log("Completed"),
});
