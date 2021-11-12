function numberOfWaysToTraverseGraph_DP(width, height) {
  // Write your code here.
  let numberOfWays = createGrid(width + 1, height + 1);

  for (let wIdx = 1; wIdx < width + 1; wIdx++) {
    for (let hIdx = 1; hIdx < height + 1; hIdx++) {
      if (wIdx === 1 || hIdx === 1) {
        console.log({ wIdx, hIdx });
        numberOfWays[hIdx][wIdx] = 1;
      } else {
        const waysLeft = numberOfWays[hIdx][wIdx - 1];
        const waysUp = numberOfWays[hIdx - 1][wIdx];
        console.log({ waysLeft, waysUp });
        numberOfWays[hIdx][wIdx] = waysLeft + waysUp;
      }
    }
  }

  //   console.log(numberOfWays);

  return numberOfWays[height][width];
}

function numberOfWaysToTraverseGraph_Recursive(width, height) {
  if (width === 1 || height === 1) {
    return 1;
  }

  return (
    numberOfWaysToTraverseGraph_Recursive(width - 1, height) +
    numberOfWaysToTraverseGraph_Recursive(width, height - 1)
  );
}

function createGrid(m, n) {
  return Array(n) // rows
    .fill()
    .map(() => Array(m).fill(0)); //columns
}

const w = 2;
const h = 3;

const dp = numberOfWaysToTraverseGraph_DP(w, h);
console.log(dp);

// const rec = numberOfWaysToTraverseGraph_Recursive(w, h);
// console.log(rec);

// [ S, 0, 0, 0 ]
// [ 0, 0, 0, 0 ]
// [ 0, 0, 0, E ]

// R = w - 1 // 3
// D = h - 1 // 2

// {R, R, R, D, D}

// (R + D)! / R! * D!
