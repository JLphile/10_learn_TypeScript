// interface IPerson<T1, T2> {
//   name: T1;
//   age: T2;
// }

// const p: IPerson<string, number> = {
//   name: 'why',
//   age: 19,
// };
interface IPerson<T1 = string, T2 = number> {
  name: T1;
  age: T2;
}

const p: IPerson = {
  name: 'why',
  age: 19,
};
