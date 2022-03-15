const fs = require('fs');

// const myFile = require('./example.html');

console.log('before');

const fileContents = fs.readFileSync('./example.html', { encoding: 'utf-8' });
console.log(fileContents.length);
console.log(fileContents.trim().length);
console.log('typeof', typeof fileContents);

console.log('after');

// console.log('before');

// fs.readFile('./example.html', { encoding: 'utf-8' }, (error, fileContents) => {
//   if (error) {
//     return console.log('something bad happened', error);
//   }

//   console.log('fileContents', fileContents.length);
// });

// console.log('after');
