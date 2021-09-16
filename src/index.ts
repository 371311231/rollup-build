import _ from 'lodash';
import sum from './module/tools/sum';
import dayjs from './module/dayjs/dayjs';

console.log('rollup build bundle.js test ------');

const arrayToString = _.join(['a', 'b', 'c'], '~');

console.log(arrayToString);

console.log('now time:', dayjs().format('YYYY-MM-DD HH:mm:ss'));

sum(5, 4);

export { dayjs, sum };
