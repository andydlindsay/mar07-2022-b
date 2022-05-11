// two most NB parts: name, params, return value

const sayHello = (name: string | number): string | void => {
  // console.log(`hello there ${name}`);
  return `hello there ${name}`;
  // return null;
};

const returnVal = sayHello('Bob');

sayHello(42);

// sayHello(true);

const returningPromise = (input: string): Promise<string> => {
  return new Promise((resolve) => {
    resolve(input);
  });
};

returningPromise('hello')
  .then((data) => {});
