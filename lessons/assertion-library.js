// the simplest form of automated testing has repeated code that can be abstracted away as shown below
const { sum, subtract } = require("../math");

let result;

result = sum(3, 7);
expect(result).toBe(10);

result = subtract(7, 3);
expect(result).toBe(4);

function expect(actual) {
  // returns an object of assertions
  // each assertion can be accessed via the function name
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    // i can keep adding other assertions like strict equality or greater than, lesser than comparisons etc
  };
}
