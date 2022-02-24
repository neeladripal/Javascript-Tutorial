// function Circle(radius) {
//   this.radius,
//     (this.draw = function () {
//       console.log("draw " + this.radius);
//     });
// }

// const circle = new Circle(1);

// function createCircle(radius) {
//   return {
//     radius,
//     draw: function () {
//       console.log("draw " + this.radius);
//     },
//   };
// }

// const another = createCircle(1);

class A {
  state = { count: 0 };
  render() {
    console.log(this.state.count);
  }
}

const a = new A();

class B extends A {
  constructor() {
    super();
    this.state = { count: 1 };
  }
  render() {
    console.log(this.state.count);
  }
}

const b = new B();
