const combiner = (a: number | string, b: number | string) =>
  typeof a === "string" && typeof b === "string" ? a + b : +a + +b;

console.log(combiner(1, 2));
console.log(combiner("1", "2"));
// defaults to number
console.log(combiner("1", 2));

