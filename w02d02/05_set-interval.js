let counter = 0;

const interval = setInterval(() => {
  counter += 1;
  console.log('hello', counter);

  if (counter === 9) {
    clearInterval(interval);
    // break;
  }
}, 500);

// console.log(interval);

// setTimeout(() => {
//   clearInterval(interval);
// }, 3100);
