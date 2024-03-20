// following is the code that does the testing of my functions
async function test(title, callback) {
  try {
    await callback();
    console.log(`Passed - ${title}`);
  } catch (error) {
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
// this is what jest library code pretty much looks like!
// it is just make available as a library that can be installed in a project as a dependency
// instead of us having to write the above ourselves and making it available to all our files through export/import or the method below

// if I want it to be made available to all test files I could export from a module and import them into every one of my test file
// or I could go one step ahead - expecting these functions will be used in every one of my test files, i make them available globally

// global is an object available on Node. so the setup of this is also via Node - https://nodejs.org/api/globals.html#global-objects
global.test = test;
global.expect = expect;

// now run node --require and name of this file name of file with tests,  to make this module loaded and available at startup - https://nodejs.org/api/cli.html#-r---require-module
