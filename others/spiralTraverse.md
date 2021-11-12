# Spiral Traverse

Write a function that takes in an `n x m` two-dimensional array (that can be square-shaped) and returns a one-dimensional array of all the array's elements in spiral order.

The spiral order starts at the top left corner of the two-dimensional array, goes to the right, and proceeds in a spiral pattern all the way until every element has been visited.

```COLUMS
array =[          0    1    2    3
                -------------------
            0 | [ 1  , 2  , 3  , 4 ],
        R     |
        O   1 | [ 12 , 13 , 14 , 5 ],
        W     |
        S   2 | [ 11 , 16 , 15 , 6 ],
              |
            3 | [ 10 , 9  , 8  , 7 ]
]

returns [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
```

[row,column]

1. Traverse the outer perimeter
2. Traverse the inner perimeter

```
sRow = 0,
eRow = array.length - 1 // length of rows

sCol = 0
eCol = array[0].length - 1 //length of columns

sequence: sRow => eCol => eRow => sCol => sRow

main loop

while (sRow <= eRow and sCol <= eCol)

    1. traverse from sRow to eCol
        sRow = 0
        sCol = 0
        eCol = 3
        col = sCol; col <= eCol + 1; col ++
        array[sRow][col] // where col is an index for all the values in the column
        [0,0] = 1,
        [0,1] = 2,
        [0,2] = 3,
        [0,3] = 4,

    2. traverse from eCol to eRow
        sRow = 0
        eRow = 3
        eCol = 3
        row = sRow + 1; row <= eRow + 1; row ++
        array[row][eCol] // where row is the index of all rows
        [1,3] = 5
        [2,3] = 6
        [3,3] = 7

    3. traverse from eRow to sCol
        eRow = 3
        sCol = 0
        eCol = 3
        col = eCol - 1; col <= sCol - 1 ; col--
        array[eRow][col] //
        [3,2] = 8
        [3,1] = 9
        [3,0] = 10

    4. traverse from sCol to sRow
        sCol = 0
        sRow = 0
        eRow = 3
        row = eRow - 1; row <= sRow ; row --
        array[row][sCol]
        [2,0] = 11
        [1,0] = 12

    5. Traverse the inner perimeter
        sRow ++;
        eRow --; // length of rows

        sCol ++;
        eCol --; //length of columns

if StartCol === endCol
break
avoid double counting single column

see test case 9
```

```javascript
function spiralTraverse(array) {
  // Write your code here.

  let result = [];
  let startRow = 0;
  let endRow = array.length - 1;
  let startCol = 0;
  let endCol = array[0].length - 1;

  while (startRow <= endRow && startCol <= endCol) {
    // first row
    for (let col = startCol; col <= endCol; col++) {
      result.push(array[startRow][col]);
    }

    // last column
    for (let row = startRow + 1; row <= endRow; row++) {
      result.push(array[row][endCol]);
    }

    // last row
    for (let col = endCol - 1; col >= startCol; col--) {
      if (startRow === endRow) break;
      result.push(array[endRow][col]);
    }

    // first column
    for (let row = endRow - 1; row > startRow; row--) {
      if (startCol === endCol) break;
      result.push(array[row][startCol]);
    }

    startRow++;
    endRow--; // length of rows

    startCol++;
    endCol--; //length of columns
  }

  console.log({ result });
  return result;
}

// Do not edit the line below.
exports.spiralTraverse = spiralTraverse;
```
