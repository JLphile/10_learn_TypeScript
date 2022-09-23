// ?表示可选类型
function printPoint(point: { x: number; y: number; z?: number }) {
  console.log(point.x);
  console.log(point.y);
}
printPoint({ x: 123, y: 32 });

export {};
