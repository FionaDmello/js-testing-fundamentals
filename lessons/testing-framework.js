const { sum, subtract } = require("../math");

test("sum adds numbers", () => {
  const result = sum(3, 7);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtract subtracts numbers", () => {
  const result = subtract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// in order to remove the drawbacks mentioned below
// notice the following wrapper function that allows for the main tests error cases to be handled with a try-catch block,
// and makes testing multiple items a non-blocking act!
function test(title, callback) {
  // because the function can throw an error, we use a try-catch to handle the case of an error
  try {
    callback();
    // in case the callback is successful
    console.log(`passed -  ${title}`);
  } catch (error) {
    // if the callback throws an error it is logged and handled here
    console.error(`failed - ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
    // drawback: when one of the tests/assertions in this function fails, the following tests are not run
    // secondly,the stack trace on the error shows which test fails and thus indirectly points us to the function that is failing
    // we need a more developer friendly interface that directly points to the function that is failing
  };
}
