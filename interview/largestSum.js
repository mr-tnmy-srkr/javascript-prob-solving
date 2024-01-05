// How would you find the largest sum of any two elements?
function topSum(arr) {
  var biggest = arr[0],
    second = arr[1],
    len = arr.length,
    i = 2;

  if (len < 2) return null;

  if (biggest < second) {
    biggest = arr[1];
    second = arr[0];
  }

  for (; i < len; i++) {
    if (arr[i] > biggest) {
      second = biggest;
      biggest = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return biggest + second;
}

var myArray = [5, 8, 2, 10, 7];
var result = topSum(myArray);

console.log(result);  // 18
