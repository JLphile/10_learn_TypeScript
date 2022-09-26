class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  eating() {
    console.log('eating');
  }
}
class Student extends Person {
  sno: number;
  constructor(name: string, age: number, sno: number) {
    super(name, age);
    this.sno = sno;
  }
  //子类方法重写
  eating() {
    //调用父类方法
    super.eating();
    console.log('student eating');
  }
  studying() {
    console.log('studying');
  }
}

const stu = new Student('coderwhy', 12, 10086);
console.log(stu.name);
console.log(stu.age);
console.log(stu.sno);

stu.eating();

export {};
