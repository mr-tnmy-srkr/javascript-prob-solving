/* Write a function called make_avg() 
which will take an array of integers and the size 
of that array and return the average of those values. */

// ----------------------------------------------------------

function make_avg(arr, size) {
  if (size === 0) {
    return 0;
  }
  let sum = 0;
  for (let i = 0; i < size; i++) {
    sum = sum + arr[i];
  }
  let average = sum / size;
    return average;
}
const numberArray = [1, 2, 3, 4, 5, 6, 7];
var arrayLength = numberArray.length;
var averageValue = make_avg(numberArray, arrayLength);
console.log(averageValue);
