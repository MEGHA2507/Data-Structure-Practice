// reverse a string
// "Hi My name is Megha" to be reversed

let str = "Hi! My name is Megha";

// approch 1:
function stringReverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not a valid string to reverse";
  }

  //   let strArr = str.split("");
  let reversedStringArr = [];
  let arrlength = str.length;

  for (let i = arrlength - 1; i >= 0; i--) {
    reversedStringArr.push(str[i]);
  }

  return reversedStringArr.join("");
}

// approach 2:
// function stringReverse(str) {
//   return str.split("").reverse().join("");
// }

// approach 3:
//const stringReverse = (str) => str.split("").reverse().join("");

// approach 4:
//const stringReverse = (str) => [...str].reverse().join("");

console.log(stringReverse(str));
