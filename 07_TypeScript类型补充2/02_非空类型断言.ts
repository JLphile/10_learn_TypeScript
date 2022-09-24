// message?表示可选类型，等价于string|undefined
function printMessageLength(message?: string) {
  //   if (message) {
  //     console.log(message.length);
  //   }

  //!表示非空断言，排除了undefined的可能性
  console.log(message!.length);
}

printMessageLength('Hello World');
printMessageLength('哈哈哈');
