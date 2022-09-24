type Person = {
  name: string;
  friend?: {
    name: string;
    age?: number;
    girlFriend?: {
      name: 'Tom';
    };
  };
};

const info: Person = {
  name: 'why',
  friend: {
    name: 'Lily',
  },
};

// 另外一个文件中
console.log(info.name);
// console.log(info.friend.name)
console.log(info.friend?.name);
console.log(info.friend?.age);
// 可选属性构成链条
console.log(info.friend?.girlFriend?.name);

export {};
