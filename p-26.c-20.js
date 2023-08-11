/* Write a function findEvens & sumOfEvens that will take the array [ 5, 7, 8, 10, 45, 30]
as the input parameter and will return the even numbers array & then find sum of the even numbers. */

// ...........................................................................................
function findEvens(arr){
    if (!Array.isArray(arr)){
        return "please provide me an valid array"
    }

    const evenNumbers = [];
    for (let item of arr){
        if(item % 2 === 0){
          evenNumbers.push(item);
        }
    }
    return evenNumbers; 
}

function sumOfEvens(arr){
    if (!Array.isArray(arr)){
        return "please provide me an valid array"
    }

    let sum = 0;
    for (let items of arr){
      if(items % 2 === 0){
        sum += items;
      }
    }
/* for(let i=0;i<arr.length;i++){
    sum += arr[i];
} */

    return sum;
}

const myNumbers = [ 5, 7, 8, 10, 45, 30];
const myEvenNumbers = findEvens(myNumbers);
const total = sumOfEvens(myNumbers);
console.log(myEvenNumbers);
console.log(total);

/* output: 
[ 8, 10, 30 ]
48 */