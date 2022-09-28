import { add, sub } from './utils/math';
import { time, price } from './utils/format';
import axios from 'axios';
import lodash from 'lodash';
import nhltImage from './imgs/nhlt.jpg';

console.log(add(20, 30));
console.log(sub(30, 20));

console.log(time.format('234234'));
console.log(price.format(323));

axios.get('http://123.207.32.32:8000/home/multidata').then((res) => {
  console.log(res);
});

console.log(lodash.join(['abc', 'cba']));

console.log(whyName);
console.log(whyAge);
console.log(whyHeight);

whyFoo();

const p = new Person('why', 18);
console.log(p);

$.ajax();
