/*

Write function parseF which takes an input and returns a number or null if conversion is not possible. The input can be one of many different types so be aware.



*/

// solution

const parseF = (s) =>
  parseFloat(s) >= 0 && typeof parseFloat(s) === "number"
    ? +parseFloat(s).toFixed(1)
    : null;

console.log(parseF("1"));
console.log(parseF("asd"));
