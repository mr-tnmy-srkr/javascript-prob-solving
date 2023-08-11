// find the largest name from an array

// ---------------------------------------------------------

function biggestName(arr){
  let bigName = arr[0];
  for(i=1; i<arr.length; i++){
    if(arr[i].length>bigName.length){
        bigName = arr [i];
    }
  }
  return bigName;
}


const friends = ["arif", "rosy", "sunny", "mosaddek", "babul", "saki"];
console.log(biggestName(friends));

// output : mosaddek