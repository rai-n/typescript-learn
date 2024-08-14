var combiner = function (a, b) {
    return typeof a === "string" && typeof b === "string" ? a + b : +a + +b;
};
console.log(combiner(1, 2));
console.log(combiner("1", "2"));
console.log(combiner("1", 2));
