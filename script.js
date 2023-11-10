const numbers = [99, 44, 6, 2,1, 5, 63,87, 283, 4, 0];

// selection Sort

function selectionSort(numbers){
    for(let i=0; i<numbers.length; i++){
        let minValue = numbers[i];
        let minIndex = i;

        for(let j=i+1;j<numbers.length; j++){
            if(numbers[j] < numbers[minIndex]){
                minIndex = j;
            }
        }

        numbers[i] = numbers[minIndex];
        numbers[minIndex] = minValue;

    }

    return numbers;
}

console.log('selection sort: ', selectionSort(numbers));


// Bubble Sort 

function bubbleSort(arr){

    for(let i=0; i< arr.length; i++){
        for(let j=0; j< arr.length; j++){
            if(arr[j+1] < arr[j]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    return arr;
}

console.log('bubble sort: ', bubbleSort(numbers));


// Insertion Sort

function insertionSort(arr){
    for(let i=0; i<arr.length; i++){
        let temp = arr[i];
        let indexItr = i-1;

        while(indexItr>=0 && arr[indexItr] > arr[i]){
            arr[indexItr+1] = arr[indexItr]; 
            indexItr--;
        }
        arr[indexItr+1] = temp;
    }

    return arr;
}

console.log('insertion sort: ', insertionSort(numbers));



