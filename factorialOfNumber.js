// write two functions to find the factorial of a number. 
//One function should use recurssive approach while the other should use for loop.

function findFactorialRecursive(number){
    if(number=== 0){
        return 1;
    }
    let factorial =1;
    return number * findFactorialRecursive(number - 1);
}
console.log(findFactorialRecursive(5));


function findFactorialIterative(number){
    if(number=== 0){
        return 1;
    }
    let factorial = 1;
    for(let i=1; i<= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}

console.log(findFactorialIterative(5));



