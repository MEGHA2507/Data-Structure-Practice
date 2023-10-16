// moving all zeros to the end of the array

let arr = [1,0,0,0,1,0,1];


function binary(arr){
  let arr1 = [];
  let arr2=[];
 
    for(let i=0; i< arr.length; i++){
        if(arr[i] !== 0){
            arr1.push(arr[i]);
        }else{
           arr2.push(arr[i]);
        }
    }
    console.log(arr1.concat(arr2));
    return arr;
   
}

binary(arr);


