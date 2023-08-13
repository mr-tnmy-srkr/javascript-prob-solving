/* You will be given a function called findingBadData().
 It will take an array as input. Any number of numbers will be in the array.
  Numbers can be negative numbers (less than zero) and 
  positive numbers (greater than or equal to zero). If any number 
  is negative we will call it "Bad Data". If a number is positive,
   we will call it "Good Data".
Now you have to find out how many bad data are there in your task: 
array and return that number. 
Sample Input & Output:-

Input: [ 1,2,5 ]
Output: 0
Input: [ 2, -5, -7, -13 ]
Output: 3
*/

// --------------------------------------------------------------------------------------------

function findingBadData(arr){
    if(!Array.isArray(arr)){
        return "please provide me an array of number"
    }else{
        let badData = 0;
        for(let item of arr){
            if(typeof item !== "number"){
                return "please provide me an array of number"
            }else{
                if(item < 0){
                    badData++; // badData = badData + 1;
                }
            }
        }
        return badData
    }
}

const x = [ 2, -5, -7, -13 ];
const y =[ 1,2,5 ];

console.log(findingBadData(x)); //3
console.log(findingBadData(y)); //0