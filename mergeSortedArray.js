// given are two sorted arrays. 
//write a function which accepts two sorted arrays and merge them to return an array which is sorted;
//  array1 = [0,3,4,31]
// array2 = [4,6,30]

let array1 = [0, 3, 4, 31, 54];
let array2 = [4, 6, 30, 49];

// my solution

// function mergeSortedArrays(array1, array2) {
//   let totalArr = array1.concat(array2);

//   for (let i = 0; i <= totalArr.length; i++) {
//     for (let j = 0; j <= totalArr.length; j++) {
//       if (totalArr[i] > totalArr[j]) {
//         let temp = totalArr[j];
//         totalArr[j] = totalArr[i];
//         totalArr[i] = temp;
//       }
//     }
//   }

//   return totalArr.reverse();
// }

// Andre's solution

function mergeSortedArrays(array1, array2) {
  if (array1 && array2) {
    if (array1.length == 0) {
      return array2;
    }

    if (array2.length == 0) {
      return array1;
    }

    if (array1.length == 0 && array2.length == 0) {
      return [];
    }

    let totalArr = [];
    let arr1Item = array1[0];
    let arr2item = array2[0];
    let i = 1;
    let j = 1;

    // let array1 = [0, 3, 4, 31, ];
    // let array2 = [4, 6, 30];

    while (arr1Item || arr2item) {
      if (!arr1Item || !arr2item || arr1Item <= arr2item) {
        totalArr.push(arr1Item);
        arr1Item = array1[i];
        i++;
      } else {
        totalArr.push(arr2item);
        arr2item = array2[j];
        j++;
      }
    }

    return totalArr;
  }
}

console.log(mergeSortedArrays(array1, array2));
