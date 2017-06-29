const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Give me a number silly human?", (res) => {
      sum = sum + parseInt(res, 10);
      console.log(`Your current sum is ${sum}`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  }
  else {
    completionCallback(sum);
  }

}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
