function makeArea(shape: Shape) {
  return shape.getArea();
}
abstract class Shape {
  abstract getArea();
}
class Rectangle {
  private width: number;
  private height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }
  getArea() {
    return this.width * this.height;
  }
}

class Circle {
  private r: number;
  constructor(r: number) {
    this.r = r;
  }
  getArea() {
    return this.r * this.r * 3.14;
  }
}
const rectangle = new Rectangle(20, 30);
const circle = new Circle(10);

console.log(makeArea(rectangle));
console.log(makeArea(circle));

// makeArea(new Shape())
// makeArea(123)
// makeArea('123')
