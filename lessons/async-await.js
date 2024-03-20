// Async await is a pattern used to work with promise based code
// inside a async function you are allowed to use the await keyword before a call to a function that returns a promise
// this makes the code wait until the promise is resolved (fulfilled valued of the promise being the return value ), or the rejected value is thrown
//  so handle within try-catch blocks for cases where promises may be rejected or resolved values may not be what you expected!
// read the following to understand asynchronous ops better - https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous

const { sumAsync, subtractAsync } = require("../math");

test("sumAsync adds numbers asynchronously", async () => {
  // sumAsync returns a Promise that needs to be settled - this needs to be awaited
  //  this means the wrapper function awaits a promise, making it an async function
  const result = await sumAsync(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers asynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

async function test(title, callback) {
  try {
    // an async function always depends on a promise that needs to be resolved and hence needs to be awaited
    // thus the wrapper that calls it also depends on the promise that needs to be resolved and hence becomes an async function!
    await callback();
    console.log(`Passed - ${title}`);
  } catch (error) {
    // if the callback is rejected, or there is an error while the promise is being resolved, it will be handled here
    console.error(`Failed- ${title}`);
    console.error(error);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
  };
}
