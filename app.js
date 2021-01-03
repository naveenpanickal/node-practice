const addition = require("./addition");
const divAndMul = require("./divAndMultiply");

const div = divAndMul.div;
const mul = divAndMul.multiply;

console.log(addition.add(2,3));
console.log(div(12,3));
console.log(mul(5,4));