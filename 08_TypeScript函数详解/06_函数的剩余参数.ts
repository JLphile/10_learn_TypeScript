function sum(...nums: number[]) {
  let total = 0;
  for (const num of nums) {
    total += num;
  }
  return total;
}

console.log(sum(20, 30));

console.log(sum(2, 3, 4));

console.log(sum(1, 2, 3, 4));

// 参数不确定
function sumTotal(num1: number, ...nums: number[]) {
  let sum = num1;
  for (const num of nums) {
    sum += num;
  }
  return sum;
}

console.log(sumTotal(20, 30));

console.log(sumTotal(2, 3, 4));

console.log(sumTotal(1, 2, 3, 4));
