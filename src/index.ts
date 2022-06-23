import { Observable } from "rxjs";

const observable = new Observable<string>((subscriber) => {
  console.log("Oberservable executed");
  subscriber.next("Alice");
  setTimeout(() => subscriber.next("Ben"), 2000);
  setTimeout(() => subscriber.next("Charlie"), 4000);
});

console.log("Subscription 1 starts");
observable.subscribe((value: string) => console.log("Subscription 1:", value));

setTimeout(() => {
  console.log("Subscription 2 starts");
  observable.subscribe((value: string) => console.log("Subscription 2:", value));
}, 1000);

// const subscription = observable.subscribe((value: string) =>
//   console.log(value)
// ); 

// setTimeout(() => {
//   console.log("Unsubscribe");
//   subscription.unsubscribe();
// }, 3000);
