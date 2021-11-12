```javascript
function isMonotonic(array) {
  // increasing -1
  // decreasing +1
  // none 0

  let direction = 0;

  for (let i = 0; i < array.length - 1; i++) {
    console.log({ i });
    let auxDir = direction;
    if (array[i] < array[i + 1]) {
      // set direction
      direction = 1;
    } else if (array[i] > array[i + 1]) {
      // set direction
      direction = -1;
    }

    console.log({ auxDir });
    console.log({ direction });

    if (auxDir !== 0 && auxDir !== direction) {
      return false;
    }
  }

  return true;
}
```
