/**
 * Suppose Andy and Doris want to choose a restaurant for dinner, and they both
 *  have a list of favorite restaurants represented by strings.
 *
 * You need to help them find out their common interest with the least list
 * index sum. If there is a choice tie between answers, output all of them with
 * no order requirement. You could assume there always exists an answer.
 *
 * Note: index sum refers to the sum of the indexes of the same restaurant in different lists
 */

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
function findRestaurant(list1, list2) {
  // Create a list of restaurants with index
  const map = new Map();
  for (const [index, restaurant] of list1.entries()) {
    map.set(restaurant, index);
  }

  let globalSum = Infinity;
  let commonRestaurant = [];

  for (const [index, restaurant] of list2.entries()) {
    if (map.has(restaurant)) {
      const value = map.get(restaurant);
      const localSum = index + value;

      console.log({ restaurant, localSum });
      if (localSum < globalSum) {
        globalSum = localSum;
        commonRestaurant = []; //empty the array if smaller index was found
        commonRestaurant.push(restaurant);
      } else if (localSum === globalSum) {
        commonRestaurant.push(restaurant);
      }
    }
  }

  return commonRestaurant;
}

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// const list2 = [
//   "Piatti",
//   "The Grill at Torrey Pines",
//   "Hungry Hunter Steakhouse",
//   "Shogun",
// ];

const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
const list2 = ["KFC", "Shogun", "Burger King"];

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// const list2 = ["KFC", "Burger King", "Tapioca Express", "Shogun"];

// const list1 = ["Shogun", "Tapioca Express", "Burger King", "KFC"];
// const list2 = ["KNN", "KFC", "Burger King", "Tapioca Express", "Shogun"];

// const list1 = ["KFC"];
// const list2 = ["KFC"];

const res = findRestaurant(list1, list2);
console.log({ res });
