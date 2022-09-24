//从HTMLElement类型缩小为HTMLImagineElement类型
// 类型断言as
// 1.
const el = document.getElementById('why') as HTMLImageElement;

el.src = 'url地址';
// 2.
class Person {}

class Student extends Person {
  studying() {}
}
// 断言后可以拿到Student的具体方法studying
function sayHello(p: Person) {
  (p as Student).studying();
}
const stu = new Student();
sayHello(stu);

// 3.先转成any|unknown再转成number,开发时尽量别用
const message = 'Hello World';
const num: number = message as any as number;
// const num: number = message as unknown as number;
