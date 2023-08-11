// Write a function getSum() that will take the array [ 5, 7, 8, 10, 45, 30]
// as the input parameter and will return the sum of numbers of array.

// ..................................................................................
//                                      by for loop
// ..................................................................................

function getSum(arr){
if(!Array.isArray(arr)){
    return "please provide me an array"
}

    let sum = 0
    for(i=0 ; i < arr.length ; i++){
sum += arr[i]
    }
return sum;
}
const myNumbers1 =  [5, 7, 8, 10, 45, 30];
// console.log(Array.isArray(myNumbers))
console.log(getSum(myNumbers1));    //105

// .......................................................................
//                                  by while loop
// .......................................................................

function getSum(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array"
    }
    
        let sum = 0;
        let i=0;
       while(i<arr.length){
        sum += arr[i];
        i++;
       }
    return sum;
    }
const myNumbers2 =  [5, 7, 8, 10, 45, 30];
console.log(getSum(myNumbers2));   //105

// ................................................................................
//                                   by for of loop
// ................................................................................

function getSum(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array"
    }

        let sum = 0;
      for(let i of arr){
sum = sum + i
      }
    return sum;
    }
const myNumbers3 =  [5, 7, 8, 10, 45, 30];
console.log(getSum(myNumbers3));  // 105
