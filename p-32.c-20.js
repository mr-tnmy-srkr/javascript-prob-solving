// find the smallest name from an array and put them to a new array

// ---------------------------------------------------------

function smallestName(arr){
    let smallNameList = [];
    let smallName = arr[0];
    for(i=0; i<arr.length; i++){
      if(arr[i].length<=smallName.length){
          smallName = arr[i];
          smallNameList.push(smallName);
        //   console.log(arr[i])
      }
    }
    return smallNameList;
  }
  
  
  const friends = ["arif", "rosy", "sunny", "mosaddek", "babul", "saki"];
  console.log(smallestName(friends));

//   output : [ 'arif', 'rosy', 'saki' ]