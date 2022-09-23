// 进行类型断言时，有时候需要先转成any类型
// any类型类似原生Java Script类型
let message: any = 'Hello World';
message = 123;
message = true;
message = {};
console.log(message);
