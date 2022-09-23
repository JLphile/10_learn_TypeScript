// function foo(): never {
//   // 死循环
//   while (true) {}
// }

// function bar(): never {
//   throw new Error();
// }

function handleMessage(message: string | number | boolean) {
  switch (typeof message) {
    case 'string':
      console.log('string处理方式处理message');
      break;
    case 'number':
      console.log('number处理方式处理message');
      break;
    default:
      const check: never = message;
  }
}

handleMessage('abc');
handleMessage(123);
// 假设有人修改上面的函数，增加了boolean类型
handleMessage(true);
