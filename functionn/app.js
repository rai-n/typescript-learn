"use strict";
function timesTwo(n1) {
    return n1 * 2;
}
function printTextTimes(s1, times) {
    console.log(s1.repeat(times));
}
printTextTimes("Hello", 3);
// let combineValues: Function;
let combineValues;
combineValues = timesTwo;
combineValues = () => 2 + 2;
// combineValues = printTextTimes; doesnt work
console.log(combineValues(5));
