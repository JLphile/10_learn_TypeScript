//protected在类中和子类内可以访问
class Person {
  protected name: string = '';
}

class Student extends Person {
  getName() {
    return this.name;
  }
}

const stu = new Student();
console.log(stu.getName());

export {};
