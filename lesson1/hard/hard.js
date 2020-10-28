'use strict';

let num = 33721;
let num1 = num % 10;
let num2 = Math.round(num / 10) % 10
let num3 = Math.round(num / 100) % 10;
let num4 = Math.floor(num / 1000) % 10;
let num5 = Math.floor(num / 1000) % 10;

console.log(num1*num2*num3*num4*num5)

let res1 = Math.floor(((num1*num2*num3*num4*num5)**3)/1000000) % 10
let res2 = Math.floor(((num1*num2*num3*num4*num5)**3)/100000) % 10

console.log(res1,res2)