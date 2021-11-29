function validStartingCity(distances, fuel, mpg) {
  // Write your code here.
  let city = { idx: null, miles: Number.MAX_VALUE };
  let miles = 0;
  for (let i = 0; i < distances.length; i++) {
    if (miles < city.miles) {
      city.idx = i;
      city.miles = miles;
    }

    miles += fuel[i] * mpg;
    miles -= distances[i];
  }

  return city.idx;
}

const distances = [5, 25, 15, 10, 15];
const fuel = [1, 2, 1, 0, 3];
const mpg = 10;

// const distances = [10, 20, 10, 15, 5, 15, 25];
// const fuel = [0, 2, 1, 0, 0, 1, 1];
// const mpg = 20;

const res = validStartingCity(distances, fuel, mpg);
console.log(res);
