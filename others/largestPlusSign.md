## Problem

You are given an integer `n`. You have an `n x n` binary `grid` with all values initially **1's** except for some indices given in the array `mines`. The **ith** element of the array mines is defined as `mines[i] = [xi, yi]` where `grid[xi][yi] == 0`.

Return the order of the largest axis-aligned plus sign of **1's** contained in grid. If there is none, return **0**.

An **axis-aligned** plus sign of **1's** of order `k` has some center `grid[r][c] == 1` along with four arms of length `k - 1` going up, down, left, and right, and made of **1's**. Note that there could be **0's** or **1's** beyond the arms of the plus sign, only the relevant area of the plus sign is checked for **1's**.

## Intuition

How can we improve our brute-force? One way is to try to speed up the inner loop involving `k`, the order of the candidate plus sign. If we knew the longest possible arm length `L_u`, `L_l`, `L_d`, `L_r` in each direction from a center, we could know the order `min(L_u, L_l, L_d, L_r)` of a plus sign at that center. We could find these lengths separately using dynamic programming.

## Algorithm

For each (cardinal) direction, and for each coordinate `(r, c)` let's compute the count of that coordinate: the longest line of **1's** starting from `(r, c)` and going in that direction. With dynamic programming, it is either `0` if `grid[r][c]` is zero, else it is `1` plus the count of the coordinate in the same direction. For example, if the direction is left and we have a row like `01110110`, the corresponding count values are `01230120`, and the integers are either `1` more than their successor, or `0`. For each square, we want `dp[r][c]` to end up being the minimum of the 4 possible counts. At the end, we take the maximum value in `dp`.

## Hint

For each direction such as "left", find `left[r][c]` = the number of **1's** you will see before a zero starting at `r, c` and walking left. You can find this in `N^2` time with a `dp`. The largest plus sign at `r, c` is just the minimum of `left[r][c]`, `up[r][c]` etc.

## Constraints:

```
1 <= n <= 500
1 <= mines.length <= 5000
0 <= xi, yi < n
All the pairs (xi, yi) are unique.
```

### Example 1:

```
Grid:

[ 1 | 1 | 1 | 1 | 1 ]
[ 1 | 1 | 1 | 1 | 1 ]
[ 1 | 1 | 1 | 1 | 1 ]
[ 1 | 1 | 1 | 1 | 1 ]
[ 1 | 1 | 0 | 1 | 1 ]

Input: n = 5, mines = [[4,2]]
Output: 2
Explanation: In the above grid, the largest plus sign can only be of order 2. One of them is shown.
```

### Example 2:

```
Grid:

[ 0 ]

Input: n = 1, mines = [[0,0]]
Output: 0
Explanation: There is no plus sign, so return 0.
```

```javascript
/**
 * @param {number} n
 * @param {number[][]} mines
 * @return {number}
 */
var orderOfLargestPlusSign = function (n, mines) {
  let grid = createGrid(n);
  setMines(grid, mines);

  console.log(grid[-1][0]);
};

function createGrid(n) {
  return Array(n)
    .fill()
    .map(() => Array(n).fill(1));
}

function createGrid(m, n) {
  return Array(n) // rows
    .fill()
    .map(() => Array(m).fill(0)); //colums
}

function setMines(grid, mines) {
  for (let i = 0; i < mines.length; i++) {
    const x = mines[i][0];
    const y = mines[i][1];
    grid[x][y] = 0;
  }
}
```
