// Give 2 arrays, create a function that let's a user know (true/false)
// whether these two arrays conatin any common items
// For Example:
// const array1 = ['a', 'b', 'c', 'x'];
// const array2 = ['z','y','i'];
// should return false.
// --------------
// const array1 =['a', 'b','c', 'x'];
// const array2 = ['z', 'y', 'x'];
// should return true;


// brute force approach
function commonItemsInArray(arr1, arr2){
    for(let i=0; i< arr1.length; i++){
        for(let j=0; j< arr2.length; j++){
            if(arr1[i] === arr2[j]){
                return true;
            }
        }
    }
    return false;
}

// const arr1 =['a', 'b','c', 'x'];
// const arr2 = ['z', 'y', 'x'];
const arr1 = ['a', 'b', 'c', 'x'];
const arr2 = ['z','y','i'];
console.log(commonItemsInArray(arr1, arr2));

// trying to optimise using object and single loop

function commonItemsExitsInArray(arr1, arr2){
    let map ={};

    for(let i=0; i<arr1.length; i++){
        if(!map[arr1[i]]){
            map[arr1[i]] = true;
        }
    }

    console.log(map);

    for(let j=0; j<arr2.length; j++){
        if(map[arr2[j]]){
            return true;
        }
    }

    return false;

   
}

console.log(commonItemsExitsInArray(arr1, arr2));

// using JavaScript inbult functions

function commonItemsArray(arr1, arr2){
    return arr1.some(item => arr2.includes(item));
}

console.log(commonItemsArray(arr1, arr2));