// ES6 module = An external file that contains reusable code
//              that can be imported into other Javascript files.
//              Can contain variables, classes, functions ... and more
//              Introduced as part of ECMAScript 2015 update

import {PI, getCircumference, getArea, getVolume} from './mathUtil.js';

console.log(PI);

const circumference = getCircumference(10);
console.log(circumference);

const area = getArea(10);
console.log(area);

const volume = getVolume(10);
console.log(volume);