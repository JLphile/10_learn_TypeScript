interface IPerson {
  name: string;
  age: number;
  height: number;
}

const info = {
  name: 'why',
  age: 18,
  height: 1.99,
  address: '广州市',
};

// 引用赋值时，会先进行freshness擦除掉多余的属性address,如果剩下的满足要求，就会成功赋值
const p: IPerson = info;

console.log(info);
console.log(p);

function printInfo(person: IPerson) {
  console.log(person);
  console.log(person.age);
  //仍然没有address属性
}

printInfo(info);
