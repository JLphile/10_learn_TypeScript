//实现方式一：联合类型的实现
// function getLength(args: string | any[]) {
//   return args.length;
// }

// console.log(getLength('abc'));
// console.log(getLength([123, 323, 334]));

//实现方式二：函数的重载
function getLength(args: string): number;
function getLength(args: any[]): number;

function getLength(args: any) {
  return args.length;
}
console.log(getLength('abc'));
console.log(getLength([123, 323, 334]));
//能用联合类型实现的优先用联合类型实现

export {};
