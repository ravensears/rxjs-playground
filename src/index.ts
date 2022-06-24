import { Observable } from "rxjs";

const observable = new Observable<string>((subscriber) => {
  subscriber.next("Alice");
  subscriber.next("Ben");
  setTimeout(() => subscriber.next("Charlie"), 3000);
});

observable.subscribe((value) => console.log(value));
