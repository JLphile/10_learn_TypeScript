function foo(x: number = 20, y: number) {
  console.log(x, y);
}
// 显示(20,30)
foo(undefined, 30);

function bar(x: number, y: number = 30) {
  console.log(x, y);
}
// 显示(20,30)
bar(20);

// 一般参数顺序：必传参数，--有默认值的参数--可选参数
export {};
