// 1.typeof的类型缩小
type IDType = number | string;
function printID(id: IDType) {
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

// 2.平等的类型缩小（=== == ！== ！=/switch）
type Direction = 'left' | 'right' | 'top' | 'bottom';
// function printDirection(direction: Direction) {
//   if (direction === 'left') {
//     console.log(direction);
//   } else if (direction === 'right') {
//     console.log(direction);
//   } else if (direction === 'top') {
//     console.log(direction);
//   } else {
//     console.log(direction);
//   }
// }
function printDirection(direction: Direction) {
  switch (direction) {
    case 'left':
      console.log(direction);
      break;
    case 'right':
      console.log(direction);
      break;
    case 'top':
      console.log(direction);
      break;
    default:
      console.log(direction);
  }
}

// 3.instanceof 属于某个类的实例
function printTime(time: string | Date) {
  if (time instanceof Date) {
    console.log(time.toUTCString());
  } else {
    console.log(time);
  }
}

class Student {
  studying() {}
}
class Teacher {
  teaching() {}
}
function work(p: Student | Teacher) {
  if (p instanceof Student) {
    p.studying();
  } else {
    p.teaching();
  }
}
const stu = new Student();
work(stu);

// 4.in
type Fish = {
  swimming: () => void;
};
type Dog = {
  running: () => void;
};
function walk(animal: Fish | Dog) {
  if ('swimming' in animal) {
    animal.swimming();
  } else {
    animal.running();
  }
}

const fish: Fish = {
  swimming() {
    console.log('swimming');
  },
};

walk(fish);

export {};
