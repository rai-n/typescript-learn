function timesTwo(n1: number) {
  return n1 * 2;
}

function printTextTimes(s1: string, times: number) {
  console.log(s1.repeat(times));
}

printTextTimes("Hello", 3);

// let combineValues: Function;
let combineValues: (n1: number) => number;

combineValues = timesTwo;
combineValues = () => 2 + 2; 
// combineValues = printTextTimes; doesnt work

console.log(combineValues(5));
