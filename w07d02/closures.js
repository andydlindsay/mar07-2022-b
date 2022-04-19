// class Counter {
//   constructor() {
//     this.counter = 0;
//   }

//   increment() {
//     this.counter += 1;
//     console.log(this.counter);
//   }
// }

// const myCounter = new Counter();
// // console.log(myCounter);

// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();
// myCounter.increment();

let counter = 0;

const increment = () => {
  counter++;
  console.log(counter);
};

increment();
increment();
increment();
increment();
increment();

const username = 'Alice';
const sayHello = () => {
  console.log(username);
};
