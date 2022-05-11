"use strict";
// two most NB parts: name, params, return value
const sayHello = (name) => {
    // console.log(`hello there ${name}`);
    return `hello there ${name}`;
    // return null;
};
const returnVal = sayHello('Bob');
sayHello(42);
// sayHello(true);
const returningPromise = (input) => {
    return new Promise((resolve) => {
        resolve(input);
    });
};
returningPromise('hello')
    .then((data) => { });
