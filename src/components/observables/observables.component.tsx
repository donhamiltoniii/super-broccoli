import React from "react";

const Observables = () => {
  return (
    <div>
      <pre>
        <code>
          {`
interface Observer {
    next: Function;
    error: Function;
    complete: Function;
}

class Observable {
    constructor(private functionThatTakesObserver: Function) {}

    subscribe(observer: Observer) {
        return this.functionThatTakesObserver(observer);
    }
}

const myObservable = new Observable((observer: Observer): void => {
    setTimeout(() => {
        observer.next("got data!");
        observer.complete();
    }, 1000);
});

let myObserver = {
    next(data: any): void {
        console.log(data);
    },
    error(e: string): void {
        console.log(e);
    },
    complete(): void {
        console.log("request complete");
    }
};

myObservable.subscribe(myObserver); 
            `}
        </code>
      </pre>
    </div>
  );
};

export default Observables;
