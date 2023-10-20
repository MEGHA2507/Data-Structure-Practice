// given a number N return the index value of the fibonacci sequence of N,
// where the sequence is:

// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of sequence is that each value is the sum of the 2 
// previous values, that means that for N=5 -> 2+3


function fibonacciIterative(number){

}

fibonacciIterative(5);

function fibonacciRecursive(number){
    if(number < 2){
        return number;
    }
    return fibonacciRecursive(number-1) + fibonacciRecursive(number -2);
}

console.log(fibonacciRecursive(8));

// print fibonacci series till nth Term

function fibonacci(num) {
    if (num == 1)
        return 0;
    if (num == 2)
        return 1;
    let num1 = 0;
    let num2 = 1;
    let sum;
    let i = 2;
    while (i < num) {
        sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        i += 1;
    }
    
    return num2;
}

console.log(fibonacci(5));