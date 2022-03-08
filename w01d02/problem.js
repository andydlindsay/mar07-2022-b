const commandLineArguments = process.argv;

// console.log(commandLineArguments);

// commandLineArguments.shift();
// commandLineArguments.shift();

// commandLineArguments.splice(0, 2);
const sliced = commandLineArguments.slice(2);

// console.log(sliced);
// console.log(process.argv);

// const input = ['5', '10', '15'];

// iterate through the array, look at each element of the array

// for..of
// for (const element of input) {
//   console.log('element', element);
// }

// console.log();

// .forEach
// input.forEach(function(element) {
//   console.log('element', element);
// });

// console.log();

// for..in
// for (const index in input) {
//   console.log('element', input[index]);
// }

// console.log();

// c-style loop
// const end = input.length;
// for (let i = 0; i < end; i++) {
//   console.log('element', input[i]);
// }

// const input = ['5', '10', '15', '4.5', '-50'];

let total = 0;

for (const element of sliced) {
  // console.log('element', element);
  // total = total + element;

  // parse/convert the string to a number
  const converted = Number(element); // 4.5

  // is the converted number positive?
  // if (converted > 0) {
  //   // is the converted number an integer?
  //   if (Number.isInteger(converted) === true) { // false
  //     // add the converted element to the total
  //     total += converted;
  //   }
  // }

  // if (!Number.isInteger(converted)) {
  //   // something that is NOT an integer
  // }

  if (converted > 0 && Number.isInteger(converted)) {
    // add the converted element to the total
    total += converted;
  }
}

console.log('total', total);
