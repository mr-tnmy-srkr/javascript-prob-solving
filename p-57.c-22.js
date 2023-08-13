/* You will be given a function called “isLGSeven()”.
 It will take a number as input.
Now your task: you have to find the difference between the input value and 7.
 If this difference is smaller than 7, you must return the subtraction.
  Otherwise you must return double of the input.
   Means twice the number you took as input. */

/*    Input : 6
Output: -1
Input: -15
Output: -22
Input: 15
Output: 30
 */

//    -------------------------------------------------------------------------------

function isLGSeven(x){
    if(typeof x !== "number"){
        return "please provide me a number";
    }else{
        const differ = x - 7;
        if(differ < 7){
            return differ;
        }else{
            return x*2;
        }
    }
}

console.log(isLGSeven(-15));  //-22
console.log(isLGSeven(12)); //5
console.log(isLGSeven(15)); //30
console.log(isLGSeven("-15")); //please provide me a number