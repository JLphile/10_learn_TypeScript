class Animal {
  action() {
    console.log('animal action');
  }
}
class Dog extends Animal {
  action() {
    console.log('dog running!!!');
  }
}
class Fish extends Animal {
  action() {
    console.log('fish swimming');
  }
}
//父类引用（类型）指向子类对象
//animal:dog /fish
//多态的目的是为了写出更加具体通用性的代码，以后增加子类可以直接加入
function makeActions(animals: Animal[]) {
  animals.forEach((animal) => {
    animal.action();
  });
}
makeActions([new Dog(), new Fish()]);
