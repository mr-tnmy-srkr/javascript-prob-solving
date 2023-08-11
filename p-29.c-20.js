// find the largest number from an array

// ------------------------------------------------------

function findLargest(x) {
  if (!Array.isArray(x)) {
    return "please provide me an valid array";
  } else {
    let largest = x[0];
    for (let items of x) {
   if(typeof items !== "number"){
    return "please provide me an valid number array"
   }else{
    if (items > largest) {
        largest = items;
      }
   }
    }
    return largest;
  }
}

const arr = [5, 12, 7, 9, 20, 4, 2, 3];
console.log(findLargest(arr));

// output : 20
