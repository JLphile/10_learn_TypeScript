export namespace time {
  export function format(time: string) {
    return '2022-02-22';
  }
  //   加上export后，命名空间外面可以调用
  export function foo() {}
  export let name: string = 'abc';
}

export namespace price {
  export function format(price: number) {
    return '99.99';
  }
}

time.format;
time.foo;
time.name;
