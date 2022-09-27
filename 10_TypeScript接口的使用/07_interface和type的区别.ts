//同名接口会合并
interface IFoo {
  name: string;
}
interface IFoo {
  age: number;
}

const foo: IFoo = {
  name: 'why',
  age: 18,
};
// document.getElementById('app') as HTMLDivElement
// window.addEventListener

interface Window {
  age: number;
}

window.age = 19;
console.log(window.age);
//type 不允许名称重复
// 一般联合类型用type，其他时候用interface
