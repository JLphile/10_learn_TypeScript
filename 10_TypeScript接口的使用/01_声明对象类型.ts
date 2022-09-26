//通过类型的别名声明对象类型
// type InfoType = { name: string; age: number };
//另外一种方式声明对象类型：接口interface,一般情况下接口名字以大写I开头
//在其中可以定义可选类型
// 也可以定义只读属性
interface IInfoType {
  readonly name: string;
  age: number;
  friend?: {
    name: string;
  };
}
const info: IInfoType = {
  name: 'why',
  age: 18,
  friend: {
    name: 'Tom',
  },
};

console.log(info.friend?.name);
console.log(info.name);
// 不能修改只读属性
// info.name = 'aaa';
info.age = 18;
