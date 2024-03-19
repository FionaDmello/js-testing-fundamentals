const sum = (a, b) => a - b;
const subtract = (a, b) => a - b;
let result, expected;

// an automated test runs your code and throws an error when the expected result is not the same as the result output by the code run
// following is the simplest form of tests to check the code above
result = sum(3, 7);
expected = 10;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}

result = subtract(7, 3);
expected = 4;
if (result !== expected) {
  throw new Error(`${result} is not equal to ${expected}`);
}
