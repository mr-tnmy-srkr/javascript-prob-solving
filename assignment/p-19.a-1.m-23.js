/* Problem - 1 (basic math)
You are given a function called cubeNumber(). 
The function takes an input number.
Task:
1. Cube the input number and return the result from the function.
2. Bonus: Input is not number type, what else can you do?
From the Bay function.
Sample Input Sample Output
3 27
4 64
Note: A negative or 0 field that does not match the 
validity date is ignored. I mean these

Return the input cube. We will only check for 
positives in the system. */

// -------------------------------------------------------------------------------------------------------

function cubeNumber(number) {
  if (typeof number !== "number") {
    return "please enter a valid number!";
  }
  let output = Math.pow(number, 3);
  return output;
}
let x = 6;
let y = -6;
let z = 0;
let arr = [6];
const result1 = cubeNumber(x);
const result2 = cubeNumber(y);
const result3 = cubeNumber(z);
const result4 = cubeNumber(arr);
console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);

//

//output 

/* 216
-216
0
please enter a valid number! */
