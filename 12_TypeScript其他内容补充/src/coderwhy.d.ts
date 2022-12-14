declare module 'lodash' {
  export function join(arr: any[]): void;
}

//声明变量
declare let whyName: string;
declare let whyAge: number;
declare let whyHeight: string;
// 声明函数
declare function whyFoo(): void;
//声明类
declare class Person {
  name: string;
  age: number;
  constructor(name: string, age: number);
}
//声明文件
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
//声明命名空间
declare namespace $ {
  export function ajax(settings: any): any;
}
