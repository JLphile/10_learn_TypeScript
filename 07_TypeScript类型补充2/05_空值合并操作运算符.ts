let message: string | null = null;
// 当message是null时会取右边的默认值
const content = message ?? '你好啊';
// 等价于下面的写法
// const content = message ? message : '你好啊';
console.log(content);
