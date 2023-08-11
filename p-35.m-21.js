// swap variable using temp & without temp

// ------------------------------------------------------------
//                             by using temp
// ------------------------------------------------------------

let first = 5;
let second = 7;
let temp = first;
first = second;
second = temp;
console.log(first , second);


// ------------------------------------------------------------
//                             by Destructuring
// ------------------------------------------------------------

let firstNo = 15;
let secondNo = 17;

[firstNo , secondNo] = [secondNo , firstNo];
console.log(firstNo , secondNo);