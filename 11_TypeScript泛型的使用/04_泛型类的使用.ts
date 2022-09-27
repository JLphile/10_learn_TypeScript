class Point<T> {
  x: T;
  y: T;
  z: T;

  constructor(x: T, y: T, z: T) {
    this.x = x;
    this.y = y;
    this.z = z;
  }
}

const p1 = new Point('1.33.2', '2.33.4', '3.33.2');
const p2 = new Point<string>('1.33.2', '2.33.4', '3.33.2');
const p3: Point<string> = new Point('1.33.2', '2.33.4', '3.33.2');

const names1: string[] = ['abc', 'cba', 'nba'];
const names2: Array<string> = ['abc', 'cba', 'nba']; //不推荐，(react，jsx 语言会经常用到<>)

export {};
