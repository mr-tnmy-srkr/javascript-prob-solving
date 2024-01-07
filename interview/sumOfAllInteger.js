//Write a function that returns the sum of all integers in an array.
function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
  console.log(sumArray([2,4,6,8,10]));  // 30