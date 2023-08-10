/* Problem - 5

Do you go to the shop to buy a chip with a cheetah note? 
Create a function called canPay() that
There are 2 inputs: an array, and some numbers.
1. Pay your retail amount for each element of the array
1 taka
2 taka
5 taka

2. The second input is the price of the chips.

Task:
1. Returns boolean true if the retail amount is equal 
to or greater than the price of the chips.

will do:
2. And if the sum of the notes is less than the value of 
the chips, the field will return boolean false.

3. Bonus: Check if first element of input is empty array.
 empty array Please turn it back.

 Sample Input -> Sample Output
 [1,2,5],10 -> false
 [1,5,5],10 -> true */

//  ---------------------------------------------------------------------------------

function canPay(changeArray, totalDue) {
  if (changeArray.length === 0) {
    return "You are entered an empty array, please enter a valid array!";
  }
  let sum = 0;
  for (let i of changeArray) {
    sum += i;
  }
  if (sum >= totalDue) {
    return true;
  } else {
    return false;
  }
}

let a = canPay([1,5,5], 10);
let b = canPay([1,4,5], 10);
let c = canPay([1,3,5], 10);
let d = canPay([], 10);
console.log(a);
console.log(b);
console.log(c);
console.log(d);

// output
/* 
true
true
false
You are entered an empty array, please enter a valid array! */
