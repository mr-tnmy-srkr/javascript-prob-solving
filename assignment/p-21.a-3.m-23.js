/* Problem - 3

Then you need to write a function called sortMaker(). The parameter of
 this function will be an array and
This array will always contain two elements.
Task:
1. If the second element of the array is a positive number,
 you return the array in ascending to descending order.
will do
2. If the two elements are the same, you will return this string: “equal”
3. Bonus: If any element of the array is a negative number,
 you will return “Invalid” in that field.

Sample Input Sample Output
[2,3] -> [3,2]
[4,2] -> [4,2]
[4,4] -> equal
[1,2] -> [2,1]
[4,-2] -> Invalid Input
 */

// -------------------------------------------------------------------------------

function sortMaker(arr) {
  let arr1 = arr[0];
  let arr2 = arr[1];
  if (arr1 < 0 || arr2 < 0) {
    return "Invalid Input";
  }
  if (arr1 === arr2) {
    return "equal";
  }
  let newArr = [];
  if (arr1 > arr2) {
    newArr.push(arr1, arr2);
  } else {
    newArr.push(arr2, arr1);
  }
  return newArr;
}

let x = [2, 3];
let y = [4, 2];
let z = [4, 4];
let a = [1, 2];
let b = [4, -2];
let c = [0, 0];
let d = [1, 1];
let e = [1, 0];
let f = [0, 1];
console.log(sortMaker(x));
console.log(sortMaker(y));
console.log(sortMaker(z));
console.log(sortMaker(a));
console.log(sortMaker(b));
console.log(sortMaker(c));
console.log(sortMaker(d));
console.log(sortMaker(e));
console.log(sortMaker(f));

/* output

[ 3, 2 ]
[ 4, 2 ]
equal
[ 2, 1 ]
Invalid Input
equal
equal
[ 1, 0 ]
[ 1, 0 ] */