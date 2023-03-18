// google question

// Find the first recurring character in an array

// Given an array = [2,5,1,2,3,5,1,2,4];
// should return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// should return 1

// Given an array = [2,3,4,5];
// It should return undefined
// --------------------------------------------------------------------------------//

// my solution

// function firstRepeatingElement(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return undefined;
// }

// andre's solution

function firstRepeatingElement(arr) {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]] !== undefined) {
      return arr[i];
    } else {
      map[arr[i]] = i;
    }
  }
  return undefined;
}

console.log(firstRepeatingElement([2, 5, 1, 2, 3, 5, 1, 2, 4]));
