interface IDinocats {
  id?: number;
  species: string;
  diet: string[];

  eatSomething: (foodItem: string) => boolean
}

const myDinocat: IDinocats = {
  // id: 2,
  species: 'tabby',
  diet: [],
  eatSomething: (foodItem: string) => true
};

const higherOrderFunc = (callback: (age: number) => string) => {};

higherOrderFunc((num: number) => {return 'hello'});