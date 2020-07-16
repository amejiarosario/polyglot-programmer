class Foo {
  counter = 0;

  constructor(value = '') {
    this.value = value;
  }

  getValueAndCounter() {
    return this.value + (++this.counter);
  }
}

const foo = new Foo('Hello');
console.log(foo.getValueAndCounter());
console.log(foo.getValueAndCounter());

const PI = 3.14;
PI += 1;
console.log(PI);
