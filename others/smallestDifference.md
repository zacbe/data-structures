arrayOne = [-1, 5, 10, 20, 28, 3]
arrayTwo = [26, 134, 135, 15, 17]

result [28,26]
Find the pair of numbers whose absolute difference is closest to zero

1. Look at the problem
2. Think about the problem
3. Come up with a solution
4. Write the solution
5. Success

// sort the arrays
arrayOne = [-1, 3, 5, 10, 20, 28]
arrayTwo = [15, 17, 26, 134, 135]

// traverse the two arrays and keep track of the difference
// update the difference when a smaller value is found
// keep track of the indices where the current smallest value was found

// Traverse the arrayOne n times where n = arrayOne.length
// for each time we traverse arrayOne we traverse arrayTwo n times

```javascript
// Two for loops

// Time O(n * m) we need to sort n and m
// Space O(n + m)

function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.

  // Sort the arrays
  arrayOne.sort((a, b) => a - b); // n log n
  arrayTwo.sort((a, b) => a - b); // n log n

  let smallestDiff = Infinity;
  let smallestPair = [arrayOne[0], arrayTwo[0]];

  for (let i = 0; i < arrayOne.length; i++) {
    for (let j = 0; j < arrayTwo.length; j++) {
      const diff = Math.abs(arrayOne[i] - arrayTwo[j]);
      if (diff < smallestDiff) {
        smallestDiff = diff;
        smallestPair[0] = arrayOne[i];
        smallestPair[1] = arrayTwo[j];
      }
    }
  }

  return smallestPair;
}

// Do not edit the line below.
exports.smallestDifference = smallestDifference;
```
