//private 只能通过类访问，子类访问不到

class Person {
  private name: string = '';

  getName() {
    return this.name;
  }
  setName(newName: string) {
    this.name = newName;
  }
}
const p = new Person();
console.log(p.getName());
p.setName('why');

export {};
