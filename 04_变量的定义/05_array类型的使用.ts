// 一般情况下 数组类型要限制数组内的数据为同一类型
const names1: Array<string> = []; //不推荐
const names2: string[] = []; //推荐写法，因为react jsx中有冲突
names1.push('abc');
// 不满足string要求
// names.push(123);
