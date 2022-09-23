const names = ['abc', 'cba', 'nba'];
// item根据上下文能推导出来类型时，则不必加类型注解
names.forEach(function (item) {
  console.log(item.split(''));
});
