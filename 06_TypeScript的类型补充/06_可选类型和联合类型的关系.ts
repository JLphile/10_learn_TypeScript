// 可选时类似于 string|undefined
function foo(message?: string) {
  console.log(message);
}
foo();
foo(undefined);
