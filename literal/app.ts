enum operation {
  AS_NUMBER,
  AS_TEXT,
}

const combiner = (
  a: number | string,
  b: number | string,
  op: operation | "literal-string"
) => {
  if (op === operation.AS_TEXT) {
    return a.toString() + b.toString();
  }
  if (op === operation.AS_NUMBER) {
    return +a + +b;
  } else {
    typeof a === "string" && typeof b === "string" ? a + b : +a + +b;
  }
};

console.log(combiner(1, 2, operation.AS_NUMBER));
console.log(combiner("1", "2", operation.AS_NUMBER));

// defaults to number
console.log(combiner(+"1", 2, operation.AS_TEXT));
console.log(combiner("Badger", "Neer", operation.AS_TEXT));

console.log(combiner("Badger", "Neer", "literal-string"));
