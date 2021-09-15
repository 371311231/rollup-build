import _ from 'lodash';
import fn from './module/fn';

console.log("rollup build bundle.js test ------");

const arrayToString = _.join(['a', 'b', 'c'], '~');

console.log(arrayToString);

export default fn;
