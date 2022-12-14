class Person {
  //1.只读属性是可以在构造器中赋值的
  //2.属性本身不能进行修改，但是如果它是对象类型，对象中的属性是可以修改的
  readonly name: string;
  age?: number;
  readonly friend?: Person;
  constructor(name: string, friend?: Person) {
    this.name = name;
  }
}
const p = new Person('why', new Person('Tom'));
console.log(p.name);
console.log(p.friend);

//不可以修改name 和fiend
// p.friend=new Person('james')
//p.name='abc'

if (p.friend) {
  p.friend.age = 30;
}
