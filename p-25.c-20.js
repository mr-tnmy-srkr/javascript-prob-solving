/* Write a function findOdds & sumOfOdds that will take the array [ 5, 7, 8, 10, 45, 30]
as the input parameter and will return the odd numbers array & then find sum of the odd numbers. */

// ...........................................................................................

function findEvens(arr) {
  if (!Array.isArray(arr)) {
    return "please provide me an valid array";
  }

  const oddNumbers = [];
  for (let item of arr) {
    if (item % 2 === 1) {
      oddNumbers.push(item);
    }
  }
  return oddNumbers;
}

function sumOfOdds(arr) {
  if (!Array.isArray(arr)) {
    return "please provide me an valid array";
  }

  let sum = 0;
  for (let items of arr) {
    if (items % 2 === 1) {
      sum += items;
    }
  }
/* let i = 0;
while(i<arr.length){
  sum += arr[i];
  i++
} */

  return sum;
}

const myNumbers = [5, 7, 8, 10, 45, 30];
const myOddNumbers = findEvens(myNumbers);
const total = sumOfOdds(myNumbers);
console.log(myOddNumbers);
console.log(total);

/* output:
[ 5, 7, 45 ]
57
 */