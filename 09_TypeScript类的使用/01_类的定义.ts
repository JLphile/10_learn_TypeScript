class Person {
  //定义属性
  name: string;
  age: number;
  //构造器用来初始化属性数据
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  //定义方法
  eating() {
    console.log(this.name + ' eating');
  }
}
const p = new Person('why', 18);
console.log(p.age);
console.log(p.name);
p.eating();

export {};
