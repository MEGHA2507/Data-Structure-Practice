// check if any or the pair of numbers in the given array 
// can sum up to the target value provided

// let arr = [1,2,3,9];
// let sum = 8;

let arr = [1,2,4,4];
let sum = 8;

function hasPairWithSum(arr, sum){
    for(let i=0; i< arr.length; i++){
        for(let j=0; j<arr.length; j++){
            if(arr[i] + arr[j] === sum){
                return true;
            }
        }
    }

    return false;
}

console.log(hasPairWithSum(arr, sum));

// optimized approach 

function haspairWithSum2(arr, sum){
    const mySet = new Set();
    const length = arr.length;

    for(let i=0; i< length; i++){
        if(mySet.has(arr[i])){
            return true;
        }
        mySet.add(sum - arr[i]);
    }
    return false;
}

console.log(haspairWithSum2(arr, sum));


