function printID(id: number | string | boolean) {
  // 使用联合类型时，需要特别小心
  if (typeof id === 'string') {
    console.log(id.toUpperCase());
  } else {
    console.log(id);
  }
}

printID(123);
printID('abc');
printID(true);
