class Person {
  name: string = 'aa';
  eating() {}
}
const p = new Person();
const p1: Person = {
  name: 'why',
  eating() {},
};

function printPerson(p: Person) {
  console.log(p.name);
}
printPerson(new Person());
printPerson({ name: 'Tom', eating: function () {} });

export {};
