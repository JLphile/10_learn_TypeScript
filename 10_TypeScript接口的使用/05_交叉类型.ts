//一种组合类型的方式：联合类型
type WhyType = number | string;
type Direction = 'left' | 'right' | 'center';

//另一种组合类型的方式：交叉类型
//无意义的交叉
// type WType = number & string;

//有意义的交叉
interface ISwim {
  swimming: () => void;
}
interface IFly {
  flying: () => void;
}

type MyType1 = ISwim | IFly;
type MyType2 = ISwim & IFly;

const obj1: MyType1 = {
  flying() {},
};
const obj2: MyType1 = {
  swimming() {},
};

const obj3: MyType2 = {
  swimming() {},
  flying() {},
};

export {};
