const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function absurdBubbleSort(arr, sortCompletionCallback) {

  outerBubbleSortLoop(arr, sortCompletionCallback);
  // let madeAnySwaps = true;
}

function outerBubbleSortLoop(arr, sortCompletionCallback, madeAnySwaps = true) {
  if (madeAnySwaps === true) {
    innerBubbleSortLoop(arr, sortCompletionCallback, 0, false, outerBubbleSortLoop);
  }
  else {
    sortCompletionCallback(arr);
  }
}

function askIfGreaterThan(el1, el2, callback) {

  reader.question(`Is ${el1} greater than ${el2}? (Yes or No)`,
    (res) => {
      if (res === 'Yes') {
        callback(true);
      }
      else {
        callback(false);
      }
    });
}

function innerBubbleSortLoop(arr, sortCompletionCallback, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i === arr.length -1) {
    outerBubbleSortLoop(arr, sortCompletionCallback, madeAnySwaps);
  }
  else {
    askIfGreaterThan(arr[i],arr[i+1], (arg) => {
      if (arg === true) {
        let temp1 = arr[i];
        let temp2 = arr[i+1];
        arr[i] = temp2;
        arr[i+1] = temp1;
        // [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]]
        // arr[i] = [arr[i+1], arr[i+1] = arr[i]][0]
        madeAnySwaps = true;
      }
    i++;
    innerBubbleSortLoop(arr, sortCompletionCallback, i, madeAnySwaps,outerBubbleSortLoop);
    });
  }
}


absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});


// innerBubbleSortLoop([2,1,4,3],0, false, outerBubbleSortLoop);

// let tim = askIfGreaterThan(3, 1, result => console.log(result));
