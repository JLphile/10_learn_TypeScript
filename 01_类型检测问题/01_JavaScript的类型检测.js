// 当前函数被调用时没做任何的参数校验
// 1.没有对类型进行校验
// 2.没有对参数为空进行校验
function foo(message) {
  console.log(message.length);
}

foo('Hello World');
foo('你好啊，李银河');
foo(123);
// 报错
foo();

console.log('后面的所有代码都无法执行，而且排错困难');
