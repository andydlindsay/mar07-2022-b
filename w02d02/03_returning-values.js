const higherOrderFunc = (callback) => {
  const data = {
    username: 'Alice'
  };

  console.log('1. before the setTimeout');
  setTimeout(() => {
    data.username = 'Bob';
    callback(data);
  }, 3000);
  console.log('2. after the setTimeout');
};

console.log('3. before the main call');
const returnVal = higherOrderFunc((updatedData) => {
  console.log('5. inside the callback');
  console.log('data is', updatedData);
});
console.log('4. after the main call');
console.log('returnVal', returnVal);
