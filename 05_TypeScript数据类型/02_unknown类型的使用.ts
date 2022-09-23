function foo() {
  return 'abc';
}
function bar() {
  return 123;
}

// unknown 类型只能赋值给any和unknown类型

let flag = true;
let result: unknown; //最好不要用any
if (flag) {
  result = foo();
} else {
  result = bar();
}
//报错
// let message:string=result

export {};

console.log(result);
