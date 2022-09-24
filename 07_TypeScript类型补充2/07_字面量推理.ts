type Method = 'GET' | 'POST';
function request(url: string, method: Method) {}
// 1.
type Request = {
  url: string;
  method: Method;
};

const options: Request = {
  url: 'http://www.baidu.com',
  method: 'POST',
};

request(options.url, options.method);

// 2.
// const options = {
//   url: 'http://www.baidu.com',
//   method: 'POST',
// };

// request(options.url, options.method as Method);

// 3.字面量推理
// const options = {
//   url: 'http://www.baidu.com',
//   method: 'POST',
// } as const;

// request(options.url, options.method);

export {};
