// function sayHello () {}
// const sayHello = function() {}

// const Rectangle = class {};
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  area() {
    return this.length * this.width;
  }
}

const rectangle = new Rectangle(4, 2);

// console.log(rectangle);
// console.log(rectangle.area());

class Prism extends Rectangle {
  constructor(length, width, height) {
    super(length, width);

    this.height = height;

    this.volume = this.volume.bind(this);
  }

  area() {
    return 'hello there';
  }

  volume() {
    return this.area() * this.height;
  }
}

const prism = new Prism(3, 4, 5);

console.log(prism);
console.log(prism.area());

const volume = prism.volume;
// console.log(volume());


// console.log('--------------------');

const dynamicKey = 'whatever';

const obj = {
  [dynamicKey]: 'value'
};

// console.log(obj);
