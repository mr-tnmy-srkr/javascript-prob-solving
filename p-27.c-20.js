// sum of number element of Array

// ------------------------------------------------------------------

function sumOfArr(arr){
    if(!Array.isArray(arr)){
        return "please provide me a valid Array";
    }else{
    let totalSum = 0;
    for(let items of arr){
        if(typeof items !== "number"){
            return "please provide me a valid number Array";
        }else{
        totalSum += items;
        }
    }
    return totalSum;
}
}

const numbs = [1, 2, 3, 4, 5];
const total = sumOfArr(numbs);
console.log(total);      //15